import React, { useContext, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import { Context } from '../Context';
import Counter from './Counter';

export default function Stats() {
  const { content, language } = useContext(Context);
  const [stats, inView] = useInView();
  const [opacity, setOpacity] = useState('0');

  useEffect(() => {
    if (inView) {
      setOpacity('1');
    }
  }, [inView]);

  return (
    <section
      id={language === 'german' ? 'zahlen' : 'stats'}
      style={{
        transition: '.5s',
        transitionDelay: '.2s',
        opacity: opacity,
      }}
    >
      <div className="wrap">
        <StyledStats ref={stats} flex={content.stats.length}>
          {content.stats.map((stat) => (
            <div key={stat.unit}>
              <div>
                <Counter end={stat.amount} suffix={stat.suffix} duration={2} />
              </div>
              <div>{stat.unit}</div>
            </div>
          ))}
        </StyledStats>

        <hr style={{ marginTop: '120px' }} />
      </div>
    </section>
  );
}

const StyledStats = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 0 0 calc(100% / ${(props) => props.flex});

    & > div {
      text-align: center;

      &:first-child {
        font-size: 3em;
      }
    }
  }
`;
