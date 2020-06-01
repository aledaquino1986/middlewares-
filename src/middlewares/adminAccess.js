let usuariosPermitidos = ["Ada", "Greta", "Vim", "Tim"]

function adminAccess (req, res, next) {
   for (var i = 0; i < usuariosPermitidos.length; i++) {
       if (usuariosPermitidos[i].includes(req.query.user)) {
        next();
       }
   }
    res.send("No tienes los privilegios para ingresar");
    
    }
    
    module.exports = adminAccess