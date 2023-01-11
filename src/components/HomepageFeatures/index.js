import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '新手空投',
    Svg: require('@site/static/img/odyssey/jti.svg').default,
    description: (
      <>
				新手着陆元码链即有空投礼包，赠送燃料，助你开启奥德赛精彩之旅。   
      </>
    ),
  },
  {
    title: '创世徽章',
    Svg: require('@site/static/img/odyssey/flyingj.svg').default,
    description: (
      <>
        免费领取创世徽章，与元码链一起飞翔。
      </>
    ),
  },
  {
    title: 'JNS DAO',
    Svg: require('@site/static/img/odyssey/lovej.svg').default,
    description: (
      <>
        参与线上拍卖会，把中意的JNS域名收入囊中，更可加入JNS DAO，进行链上投票，参与社群自治。
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
