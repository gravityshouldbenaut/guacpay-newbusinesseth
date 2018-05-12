

contract ('StartBusiness', function(userID) {
	function testNewBusinessCreation (){ 
	var businessName = "Mary Pizza";
	 var token = 32423422;
	assert.isTrue(createBusiness(businessName, userID, token));
	}



});