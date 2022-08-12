import axios from 'axios';

export const getVotes = async () => {
    return await axios.get("/api/result/1");
};



export const submitVote = async (candidateID: number) => {
    const payload = {
      votationID: 1,
    };

    const response = await axios.post(`/api/vote/${candidateID}`, payload);

    return response.status;
  };
