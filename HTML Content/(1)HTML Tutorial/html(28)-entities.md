HTML Entities
Reserved characters in HTML must be replaced with character entities.

HTML Entities
Some characters are reserved in HTML.

If you use the less than (<) or greater than (>) signs in your text, the browser might mix them with tags.

Character entities are used to display reserved characters in HTML.

A character entity looks like this:

&entity_name;
OR

&#entity_number;
To display a less than sign (<) we must write: &lt; or &#60;

Advantage of using an entity name: An entity name is easy to remember.
Disadvantage of using an entity name: Browsers may not support all entity names, but the support for entity numbers is good.

Non-breaking Space
A commonly used entity in HTML is the non-breaking space: &nbsp;

A non-breaking space is a space that will not break into a new line.

Two words separated by a non-breaking space will stick together (not break into a new line). This is handy when breaking the words might be disruptive.

Examples:

§ 10
10 km/h
10 PM
Another common use of the non-breaking space is to prevent browsers from truncating spaces in HTML pages.

If you write 10 spaces in your text, the browser will remove 9 of them. To add real spaces to your text, you can use the &nbsp; character entity.

Tip: The non-breaking hyphen (&#8209;) is used to define a hyphen character (‑) that does not break into a new line.


Some Useful HTML Character Entities
<!-- Put in a table -->
Result	Description	Entity Name	Entity Number	Try it
non-breaking space	&nbsp;	&#160;	
<	less than	&lt;	&#60;	
>	greater than	&gt;	&#62;	
&	ampersand	&amp;	&#38;	
"	double quotation mark	&quot;	&#34;	
'	single quotation mark (apostrophe)	&apos;	&#39;	
¢	cent	&cent;	&#162;	
£	pound	&pound;	&#163;	
¥	yen	&yen;	&#165;	
€	euro	&euro;	&#8364;	
©	copyright	&copy;	&#169;	
®	registered trademark	&reg;	&#174;


Combining Diacritical Marks
A diacritical mark is a "glyph" added to a letter.

Some diacritical marks, like grave (  ̀) and acute (  ́) are called accents.

Diacritical marks can appear both above and below a letter, inside a letter, and between two letters.

Diacritical marks can be used in combination with alphanumeric characters to produce a character that is not present in the character set (encoding) used in the page.

