---
slug: jns-bridge
title: 赏金任务：JNS跨链桥开发
authors: [devguild]
tags: [jnsdao, bridge]
---

## 一、背景

>  最近JNS社区出现了一些诉求：希望将JNS从元码链跨到以太坊生态去；为了能够快速的验证这种诉求的合理性，我们先行采用人工桥的方式，在两条链上进行JNS的转移；待诉求的合理性经过充分验证后，可以采用更加自动化的跨链方案；

## 二、人工桥的思路概述

1. JNS从元码链跨到以太坊生态（跨出）

    > 1. 用户联系JNS DAO技术公会，提出跨链诉求；
    > 2. 用户先行将元码链上的jns转入一个支持NFT资产的多签合约地址；该多签合约由JNS DAO进行部署及管理；
    > 3. JNS DAO技术公会确认用户jns转入后，由技术公会指定的N把私钥中的两把私钥对五元组数据的哈希值 keccak-256([jns name, jns-owner-address, timelock, domain separator, function selector]) 分别进行签名, 得到sig1和sig2;
    > 4. JNS DAO技术公会将步骤3中生成的sig1和sig2以及相关参数合并成mint calldata（"birth certificate"）提供给用户;
    > 5. 用户将Metamask连接至以太坊网络，向部署在以太链上的JNS合约发送mint calldata，即可自行铸造相同的jns；jns将会下发到jns-owner-address钱包地址；

2. JNS从以太坊生态跨回到元码链（跨入）

    > 1. 用户联系JNS DAO技术公会，提出跨回元码链诉求；
    > 2. JNS DAO技术公会提供burn calldata（"burn certificate"）给用户；
    > 2. 用户将Metamask连接至以太坊网络，向部署在以太链上的JNS合约发送burn calldata，即可自行销毁以太链上指定的jns；
    > 3. JNS DAO技术公会，确认用户已经在以太链销毁jns后，将元码链上相应的jns从多签合约地址转出至用户地址；

3. 关于1中五元组的说明
   >jns： 用户即将进行跨链操作的JNS域名全称，例如abc.j、123.j等；
   > 
   >jns-owner-address：用户在以太坊主网接收JNS跨链资产的地址；
   > 
   > timelock：用户跨链操作的到期时间；以以太坊的区块高度为准；在该高度到来前，签名有效；
   > 
   > domain separator：以太坊上JNS合约选择器标识, 在部署JNS合约时自动生成；
   > 
   >function selector: 以太坊上JNS合约中的mint接口选择器标识, 基于keccak256算法生成；

## 三、已有的源码

> 1. JNS合约
> 2. 多签钱包合约

## 四、待开发的内容点

1. 将JNS合约扩展出burn的能力

    > 1. 新增burn对外接口；nft owner可以自主销毁自己的jns，不可以销毁非owner的jns资产；
    > 2. 待销毁的jns必须是unbind状态，否则无法销毁；
    > 3. 针对销毁的jns，要在合约内记录该nft的owner及销毁区块高度；

2. 将JNS的mint接口，扩展出鉴权能力

    > 1. 拥有合法签名权的N个公钥应通过配置接口提前写入合约中；
    > 2. 鉴权基于keccak-256([jns, jns-owner-address, timelock, domain separator, function selector])的两份签名;


3. 扩展多签钱包合约，使其支持NFT资产

    > 1. 不可以破坏掉已有的原生资产多签能力；
    > 2. 不可以破坏合约已有的安全性；
    > 3. 新增针对NFT的发起 “资产转移” 接口；
    > 4. 新增针对NFT的签名“资产转移” 接口；签名内容是[jns, jns-owner-address, timelock]三元组，并将签名结果写入mapping;


## 五、交付物

> 1. 合约代码（solidity）两份，分别是上述的JNS扩展合约和扩展的多签合约钱包；

## 六、验收

**请先自行测试无误后再提交验收**

1. 扩展的JNS合约在以太坊链上部署、工作正常，符合设计要求，无安全隐患。
2. 扩展的多签钱包合约在元码链上部署、工作正常，符合设计要求，无安全隐患。
3. 跨链全流程闭环准确无误，符合设计要求。

## 七、赏金 

> 工作量预估：15个有效工作小时 (约合3个标准工作日)
>
> 赏金预算：15个JNS白名单（凭白名单享一元自由选）

