var fs = require('fs');


module.exports = {
	read: function(callback){
		fs.readFile(__dirname + "/../"+"db/users.json", 'utf8', function(err, data){
			if(err)
				return console.log(err);
			data = JSON.parse(data);
			callback(data);

		});
	},
	write: function(dataJson, res){
		fs.writeFile(__dirname + "/../"+"db/users.json", dataJson, function(err, data){
			if(err)
				return console.log(err);
			res.json({'msg': 'Usuário inserido com sucesso!'});

		});
	},

	check: function(params, data){
		var naorepete=0;
		 for(var i=0;i<data.length;i++){
       		if(data[i].name.toLowerCase()===params.name.toLowerCase()){
       			naorepete=1;
       		}
		}
        return naorepete;
	}
}