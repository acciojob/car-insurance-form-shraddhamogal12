//your code here
<form method="post">
	<label for="name">Name</label>
    <input type="text" id="name" required>
	<br><br>
	<label for="email">Email</label>
     <input type="email" id="email" required>
	<br><br>
	<label>Gender</label>
	<label for="male">Male</label>
    <input type="radio" id="male" name="gender" value="male">
    <label for="female">Female</label>
    <input type="radio" id="female" name="gender" value="female">
	<br><br>
	<label for="cars">Car brands</label>
   <select id="cars" name="car">
	<option value="BMW">BMW</option>
    <option value="Mercedez">Mercedes</option>
    <option value="Audi">Audi</option>
	</select>
	<br><br>
	<label for="carage">car age</label>
	<input type="number" id="carage" required>
	<br> <br>
	<label for="dop">Date of purchase</label>
    <input type="Date" id="dop" required>
	<br><br>
	<label for="password">Password</label>
    <input type="password" id="password" required>
	<br><br>
	<button type="submit">Submit</button>
	</form>
	

	
