---
ID: 27
post_title: Try it Yourself Editor!
author: admin
post_excerpt: ""
layout: post
permalink: >
  http://coding-karma.com/2017/07/25/try-it-yourself-editor/
published: true
post_date: 2017-07-25 18:52:11
---

 
<style type="text/css">
    textarea, iframe {
       border: 2px solid #ddd;
       height: 500px;
       width: 100%;	  
    }
</style>

<table width="100%" border="0" cellspacing="5" cellpadding="5">
    <tr>
        <td width="50%" scope="col">&nbsp;</td>
        <td width="50%" align="left" scope="col">
            <input onclick="runCode();" type="button" value="Run Code">
        </td>
    </tr>
    <tr>
        <td> 
            <form>
                <strong>Code</strong>
                <textarea name="sourceCode" id="sourceCode">
<html>
<head>
<title>Hello</title>
</head>
<body>
<h1>Hello!</h1>
<p>Write HTML, CSS or JavaScript code here and click 'Run Code'.</p>
</body>
</html>
                </textarea>
            </form>
        </td>
        <td><strong>Output</strong><iframe name="targetCode" id="targetCode"></iframe></td>
    </tr>
</table>  

<script type="text/javascript">
	function runCode()
	{
		var content = document.getElementById('sourceCode').value;
		var iframe = document.getElementById('targetCode');
		iframe = (iframe.contentWindow) ? iframe.contentWindow : (iframe.contentDocument.document) ? iframe.contentDocument.document : iframe.contentDocument;
		iframe.document.open();
		iframe.document.write(content);
		iframe.document.close();
		return false;
	}
	runCode();
</script>