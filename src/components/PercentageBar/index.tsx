import { useEffect, useState } from "react";

import { getVotes } from "../../services/votes";
import { calcPercent } from "../../utils/calcPercent";
import { PercentageCandidateProps } from "../../types/index";
import { Container } from "./styles";

export function PercentageBar() {
  const [firsPer, setFirstPer] = useState<number>(0);
  const [secondPer, setSecondPer] = useState<number>(0);

  useEffect(() => {
    getVotes().then((resp) => {
      const percent = [resp.data.votes];
      const sum = percent[0][0].votesCount + percent[0][1].votesCount;
      const firstCand = percent[0].filter(
        (el: PercentageCandidateProps) => el.candidateId === 1
      );
      const secondCand = percent[0].filter(
        (el: PercentageCandidateProps) => el.candidateId === 2
      );

      setFirstPer(Math.round((firstCand[0].votesCount / sum) * 100));
      setSecondPer(Math.round((secondCand[0].votesCount / sum) * 100));
      calcPercent(Math.round((firstCand[0].votesCount / sum) * 100));
    });
  }, []);

  return (
    <Container data-testid="percentage__test">
      <p>
        <span className="bar">
          <p className="first-per">{firsPer}%</p>
          <p className="second-per">{secondPer}%</p>
        </span>
      </p>
    </Container>
  );
}
