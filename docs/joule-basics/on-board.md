---
sidebar_position: 5
---

import styles from '/static/css/odyssey.css';
import ExtLinkSvg from '/static/img/extlink.svg';
import JNSDAOQR from '/static/img/jnsdao.jpg';
import JiaolianContact from '/static/img/gadm/jiaolian.jpg';

# 参与内测

加入Jouleverse内测或者加入JNSDAO有如下三种方法：

1. 关注JNSDAO公众号，按照相关提示进行操作
2. 添加任何一位JNSDAO相关负责人的微信（添加时备注：Jouleverse），然后请他/她为你分配一个内测分组和组长，由组长引导你创建链地址、领取空投、进入内测群
3. 直接添加任何一位内测分组的组长的微信（添加时备注：Jouleverse），由组长引导你创建链地址、领取空投、进入内测群

## 方法一：关注JNSDAO公众号

微信扫描这个二维码：

<img src={JNSDAOQR} />

## 方法二：联系任意一位JNSDAO相关负责人，分配分组

三位相关负责人都已经进行了高等级实名认证，请放心联络。添加微信时请备注：Jouleverse。

<table>
    <tbody>
    <tr>
        <th>负责人</th>
        <th>职务</th>
        <th>联络二维码（微信）</th>
    </tr>
    <tr>
        <td>David</td>
        <td>市场发展组组长</td>
        <td><span className='wxqr'><img src='/img/gadm/david.png' /></span></td>
    </tr>
    <tr>
        <td>老谢</td>
        <td>市场发展组副组长</td>
        <td><span className='wxqr'><img src='/img/gadm/laoxie.jpg' /></span></td>
    </tr>
    <tr>
        <td>Koant</td>
        <td>JNSDAO CEO</td>
        <td><span className='wxqr'><img src='/img/gadm/g09adm.png' /></span></td>
    </tr>
    </tbody>
</table>

## 方法三：直接联系任何一位组长

从下表中选择任意一个组长（请勿重复加入），微信扫码联系（添加好友时请备注：Jouleverse），请他/她拉你进**分组群**和**内测群**，开启你的奥德赛之旅吧！

目前内测阶段有12组，各组长都已经进行了高等级实名认证，请放心联络。添加微信时请备注：Jouleverse。

export const Groups = [
    {"g":"3", "n":"@Angel", "src":"/img/gadm/g12adm.jpg"},
    {"g":"11", "n":"@OPEN", "src":"/img/gadm/g11adm.jpg"},
    {"g":"9", "n":"@Koant", "src":"/img/gadm/g09adm.png"},
    {"g":"6", "n":"@岑云", "src":"/img/gadm/g06adm.jpg"},
    {"g":"1", "n":"@芳芳", "src":"/img/gadm/g01adm.jpg"},
    {"g":"8", "n":"@明海云", "src":"/img/gadm/g08adm.jpg"},
    {"g":"5", "n":"@岑云（代）", "src":"/img/gadm/g06adm.jpg"},
    {"g":"2", "n":"@Koant（代）", "src":"/img/gadm/g09adm.png"},
    {"g":"4", "n":"@OPEN（代）", "src":"/img/gadm/g11adm.jpg"},
    {"g":"10", "n":"@楼兰渔夫", "src":"/img/gadm/g10adm.jpg"},
    {"g":"7", "n":"@Angel（代）", "src":"/img/gadm/g12adm.jpg"},
]

<table>
    <tbody>
    <tr>
        <th>分组</th>
        <th>组长</th>
        <th>联络二维码（微信）</th>
    </tr>
    {[...Groups].map(v => 
        (<tr key={v.g}>
            <td>{v.g}组</td>
            <td>{v.n}</td>
            <td><span className='wxqr'><img key={v.src} src={v.src} /></span></td>
        </tr>)
    )}
    <tr>
        <td>fallback</td>
        <td>@刘教链</td>
        <td>如果都联络不上，请联系刘教链（微信号：jiaoliancoin ，添加好友时请备注：Jouleverse）。<br /> <span className='wxqr'><img src={JiaolianContact} /></span></td>
    </tr>
    </tbody>
</table>

