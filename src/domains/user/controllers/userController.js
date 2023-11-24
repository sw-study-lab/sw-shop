export const getUsers = (req, res, next) => {
  return res.send("유저목록");
};

export const postUser = (req, res, next) => {
  // 유저 생성
};

export const getOne = (req, res, next) => {
  const {
    params: { id: userId },
  } = req;
  return res.send(`${userId} 번 째 유저 정보 받아오기`);
};

export const updateOne = (req, res, next) => {
  const {
    params: { id: userId },
  } = req;
  return res.send(`${userId} 번 째 유저 정보 수정하기`);
};

export const removeOne = (req, res, next) => {
  const {
    params: { id: userId },
  } = req;
  return res.send(`${userId} 번 째 유저 삭제하기`);
};
