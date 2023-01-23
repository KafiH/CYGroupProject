HTML Input form* Attributes
This chapter describes the different form* attributes for the HTML <input> element.

The form Attribute
The input form attribute specifies the form the <input> element belongs to.

The value of this attribute must be equal to the id attribute of the <form> element it belongs to.

Example
An input field located outside of the HTML form (but still a part of the form):

<form action="/action_page.php" id="form1">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <input type="submit" value="Submit">
</form>

<label for="lname">Last name:</label>
<input type="text" id="lname" name="lname" form="form1">
The formaction Attribute
The input formaction attribute specifies the URL of the file that will process the input when the form is submitted.

Note: This attribute overrides the action attribute of the <form> element.

The formaction attribute works with the following input types: submit and image.

Example
An HTML form with two submit buttons, with different actions:

<form action="/action_page.php">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
  <input type="submit" formaction="/action_page2.php" value="Submit as Admin">
</form>
The formenctype Attribute
The input formenctype attribute specifies how the form-data should be encoded when submitted (only for forms with method="post").

Note: This attribute overrides the enctype attribute of the <form> element.

The formenctype attribute works with the following input types: submit and image.

Example
A form with two submit buttons. The first sends the form-data with default encoding, the second sends the form-data encoded as "multipart/form-data":

<form action="/action_page_binary.asp" method="post">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <input type="submit" value="Submit">
  <input type="submit" formenctype="multipart/form-data"
  value="Submit as Multipart/form-data">
</form>


The formmethod Attribute
The input formmethod attribute defines the HTTP method for sending form-data to the action URL.

Note: This attribute overrides the method attribute of the <form> element.

The formmethod attribute works with the following input types: submit and image.

The form-data can be sent as URL variables (method="get") or as an HTTP post transaction (method="post").

Notes on the "get" method:

This method appends the form-data to the URL in name/value pairs
This method is useful for form submissions where a user want to bookmark the result
There is a limit to how much data you can place in a URL (varies between browsers), therefore, you cannot be sure that all of the form-data will be correctly transferred
Never use the "get" method to pass sensitive information! (password or other sensitive information will be visible in the browser's address bar)
Notes on the "post" method:

This method sends the form-data as an HTTP post transaction
Form submissions with the "post" method cannot be bookmarked
The "post" method is more robust and secure than "get", and "post" does not have size limitations
Example
A form with two submit buttons. The first sends the form-data with method="get". The second sends the form-data with method="post":

<form action="/action_page.php" method="get">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit using GET">
  <input type="submit" formmethod="post" value="Submit using POST">
</form>
The formtarget Attribute
The input formtarget attribute specifies a name or a keyword that indicates where to display the response that is received after submitting the form.

Note: This attribute overrides the target attribute of the <form> element.

The formtarget attribute works with the following input types: submit and image.

Example
A form with two submit buttons, with different target windows:

<form action="/action_page.php">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
  <input type="submit" formtarget="_blank" value="Submit to a new window/tab">
</form>
The formnovalidate Attribute
The input formnovalidate attribute specifies that an <input> element should not be validated when submitted.

Note: This attribute overrides the novalidate attribute of the <form> element.

The formnovalidate attribute works with the following input types: submit.

Example
A form with two submit buttons (with and without validation):

<form action="/action_page.php">
  <label for="email">Enter your email:</label>
  <input type="email" id="email" name="email"><br><br>
  <input type="submit" value="Submit">
  <input type="submit" formnovalidate="formnovalidate"
  value="Submit without validation">
</form>
The novalidate Attribute
The novalidate attribute is a <form> attribute.

When present, novalidate specifies that all of the form-data should not be validated when submitted.

Example
Specify that no form-data should be validated on submit:

<form action="/action_page.php" novalidate>
  <label for="email">Enter your email:</label>
  <input type="email" id="email" name="email"><br><br>
  <input type="submit" value="Submit">
</form>
HTML Form and Input Elements
Tag	Description
<form>	Defines an HTML form for user input
<input>	Defines an input control