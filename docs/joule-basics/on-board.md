---
sidebar_position: 5
---

import styles from '/static/css/odyssey.css';

import ExtLinkSvg from '/static/img/extlink.svg';

import Group1AdminContact from '/static/img/gadm/g01adm.jpg';
import Group2AdminContact from '/static/img/gadm/g02adm.jpg';
import Group3AdminContact from '/static/img/gadm/g03adm.jpg';
import Group4AdminContact from '/static/img/gadm/g04adm.jpg';
import Group5AdminContact from '/static/img/gadm/g05adm.jpg';
import Group6AdminContact from '/static/img/gadm/g06adm.jpg';
import Group7AdminContact from '/static/img/gadm/g07adm.jpg';
import Group8AdminContact from '/static/img/gadm/g08adm.jpg';
import Group9AdminContact from '/static/img/gadm/g09adm.jpg';

import JiaolianContact from '/static/img/gadm/jiaolian.jpg';

# 参与内测

从下表中选择任意一个组长（请勿重复加入），微信扫码联系（添加好友时请备注：元码链内测），请他/她拉你进**分组群**和**内测群**，开启你的奥德赛之旅吧！

目前内测阶段有10位组长，都已经进行了高等级实名认证，请放心联络。添加微信时请备注：元码链。

<table>
    <tbody>
    <tr>
        <th>分组</th>
        <th>组长</th>
        <th>联络二维码（微信）</th>
    </tr>
    {
        Object.entries([
            {"g":"1组", "n":"@芳芳", "c":<span className='wxqr'><img src={Group1AdminContact} /></span>},
            {"g":"2组", "n":"@大可", "c":<span className='wxqr'><img src={Group2AdminContact} /></span>},
            {"g":"3组", "n":"@Dream...", "c":<span className='wxqr'><img src={Group3AdminContact} /></span>},
            {"g":"4组", "n":"@志豪", "c":<span className='wxqr'><img src={Group4AdminContact} /></span>},
            {"g":"5组", "n":"@༺晓杰🎗牙医࿐   ", "c":<span className='wxqr'><img src={Group5AdminContact} /></span>},
            {"g":"6组", "n":"@岑云 见路不走", "c":<span className='wxqr'><img src={Group6AdminContact} /></span>},
            {"g":"7组", "n":"@摩卡与茶", "c":<span className='wxqr'><img src={Group7AdminContact} /></span>},
            {"g":"8组", "n":"@明海云", "c":<span className='wxqr'><img src={Group8AdminContact} /></span>},
            {"g":"9组", "n":"@Koant", "c":<span className='wxqr'><img src={Group9AdminContact} /></span>}
        ]).sort(() => Math.random() - 0.5).map(([k, v]) => 
            <tr key={v.g}>
                <td>{v.g}</td>
                <td>{v.n}</td>
                <td>{v.c}</td>
            </tr>
        )
    }
    <tr>
        <td>10组</td>
        <td>@楼兰渔夫</td>
        <td>TBD</td>
    </tr>
    <tr>
        <td>fallback</td>
        <td>@刘教链</td>
        <td>如果都联络不上，请联系刘教链（微信号：jiaoliancoin ，添加好友时请备注：元码链内测）。<br /> <span className='wxqr'><img src={JiaolianContact} /></span></td>
    </tr>
    </tbody>
</table>

