const roleCheck = (req, res, next) => {
  if (req.body.userType == "C") {
    return next();
  } else {
    res.send({
      status: 1,
      msg: "access denied",
    });
  }
};

module.exports = { roleCheck };
