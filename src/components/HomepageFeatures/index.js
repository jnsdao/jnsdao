import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '新手空投',
    Svg: require('@site/static/img/odyssey/wgift.svg').default,
    description: (
      <>
		新手登陆即有空投礼包，赠送初始燃料费，助你开启奥德赛精彩之旅。   
      </>
    ),
  },
  {
    title: '创世徽章',
    Svg: require('@site/static/img/odyssey/flyingj.svg').default,
    description: (
      <>
        免费领取创世徽章，与JNS DAO一起飞翔。
      </>
    ),
  },
  {
    title: 'JNS拍卖会',
    Svg: require('@site/static/img/odyssey/lovej.svg').default,
    description: (
      <>
        参与线上拍卖会，获得心仪的JNS域名，成为JNS DAO的正式公民。
      </>
    ),
  },
  {
    title: '参与治理',
    Svg: require('@site/static/img/odyssey/voting.svg').default,
    description: (
      <>
        DAO公民有权利进行链上投票，参与社群自治。
      </>
    ),
  },
  {
    title: '出席证明',
    Svg: require('@site/static/img/odyssey/jnsvotepoap.svg').default,
    description: (
      <>
        参与治理和链上投票，会收到出席证明POAP徽章。
      </>
    ),
  },
  {
    title: 'DAO研习社',
    Svg: require('@site/static/img/odyssey/reading.svg').default,
    description: (
      <>
        JNS DAO公民可以参与定期举行的DAO研习社活动，一起学习，共同成长。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
