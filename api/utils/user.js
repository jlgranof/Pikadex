// Returns a user safe to use with JWTs
const toSafeUser = ({ id, username, email }) => { id, username, email };

// Returns a user without the hashedPassword
const toRegularUser = ({ id, username, email, avatarUrl, joined }) => {
  return { id, username, email, avatarUrl, joined }
};

module.exports = {
  toSafeUser,
  toRegularUser,
}