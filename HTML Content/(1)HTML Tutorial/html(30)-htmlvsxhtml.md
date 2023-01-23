URL Encoding
URLs can only be sent over the Internet using the ASCII character-set. If a URL contains characters outside the ASCII set, the URL has to be converted.

URL encoding converts non-ASCII characters into a format that can be transmitted over the Internet.

URL encoding replaces non-ASCII characters with a "%" followed by hexadecimal digits.

URLs cannot contain spaces. URL encoding normally replaces a space with a plus (+) sign, or %20.


XHTML - <!DOCTYPE ....> Is Mandatory
An XHTML document must have an XHTML <!DOCTYPE> declaration.

The <html>, <head>, <title>, and <body> elements must also be present, and the xmlns attribute in <html> must specify the xml namespace for the document.

Example
Here is an XHTML document with a minimum of required tags: 

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Title of document</title>
</head>
<body>

  some content here...

</body>
</html>
XHTML Elements Must be Properly Nested
In XHTML, elements must always be properly nested within each other, like this:

Correct:
<b><i>Some text</i></b>
Wrong:
<b><i>Some text</b></i>
XHTML Elements Must Always be Closed
In XHTML, elements must always be closed, like this:

Correct:
<p>This is a paragraph</p>
<p>This is another paragraph</p>
Wrong:
<p>This is a paragraph
<p>This is another paragraph
XHTML Empty Elements Must Always be Closed
In XHTML, empty elements must always be closed, like this:

Correct:
A break: <br />
A horizontal rule: <hr />
An image: <img src="happy.gif" alt="Happy face" />
Wrong:
A break: <br>
A horizontal rule: <hr>
An image: <img src="happy.gif" alt="Happy face">
XHTML Elements Must be in Lowercase
In XHTML, element names must always be in lowercase, like this:

Correct:
<body>
<p>This is a paragraph</p>
</body>
Wrong:
<BODY>
<P>This is a paragraph</P>
</BODY>
XHTML Attribute Names Must be in Lowercase
In XHTML, attribute names must always be in lowercase, like this:

Correct:
<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>
Wrong:
<a HREF="https://www.w3schools.com/html/">Visit our HTML tutorial</a>
XHTML Attribute Values Must be Quoted
In XHTML, attribute values must always be quoted, like this:

Correct:
<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>
Wrong:
<a href=https://www.w3schools.com/html/>Visit our HTML tutorial</a>
XHTML Attribute Minimization is Forbidden
In XHTML, attribute minimization is forbidden:

Correct:
<input type="checkbox" name="vehicle" value="car" checked="checked" />
<input type="text" name="lastname" disabled="disabled" />
Wrong:
<input type="checkbox" name="vehicle" value="car" checked />
<input type="text" name="lastname" disabled />

