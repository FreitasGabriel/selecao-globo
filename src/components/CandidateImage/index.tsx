import { CandidateWrapper } from "./styles";

interface CandidateImageProps {
  candidate: string | undefined;
}

export const CandidateImage = ({ candidate }: CandidateImageProps) => {
  return (
    <CandidateWrapper>
      {candidate === "first-candidate" ? (
        <img
          className="first-candidate"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          alt=""
        />
      ) : (
        <img
          className="second-candidate"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          alt=""
        />
      )}
    </CandidateWrapper>
  );
};
