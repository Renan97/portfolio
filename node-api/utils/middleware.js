function checkSession(req, res, next) {
  if (!req.session.user) {
    return res.status(403).send("You need to sign in");
  }
  req.body.bunda = req.session.user;
  next();
}

function authRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(401).send("Not allowed");
    }
    next();
  };
}

module.exports = {
  checkSession,
  authRole,
};
