import axios from 'axios';

export const getCandidate = async (selectedCandidate: number) => {
    return await axios.get(`/api/candidate/${selectedCandidate}`)
}
