const { isUuid } = require("uuidv4");

const uuidIsValid = function(request, response, next){
  const {id} = request.params;

  if(!isUuid(id)) {
    return response.status(400).json({error: "Invalid repository id"})
  }

  return next();
}

module.exports = uuidIsValid;