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
    textarea, iframe {<br />
       border: 2px solid #ddd;<br />
       height: 100px;<br />
       width: 100%;<br />
    }<br />
</style>
<table border="0" width="100%" cellspacing="5" cellpadding="5">
<tbody>
<tr>
<td scope="col" width="50%"></td>
<td scope="col" align="left" width="50%"><input type="button" value="Run Code" /></td>
</tr>
<tr>
<td><form><strong>Code</strong>
<textarea id="sourceCode" name="sourceCode">&lt;br /&gt;
&lt;html&gt;&lt;br /&gt;
&lt;head&gt;&lt;br /&gt;
&lt;title&gt;Hello&lt;/title&gt;&lt;br /&gt;
&lt;/head&gt;&lt;br /&gt;
&lt;body&gt;&lt;/p&gt;
&lt;h1&gt;Hello!&lt;/h1&gt;
&lt;p&gt;Write HTML, CSS or JavaScript code here and click 'Run Code'.&lt;/p&gt;
&lt;p&gt;&lt;/body&gt;&lt;br /&gt;
&lt;/html&gt;&lt;br /&gt;
                </textarea></form></td>
<td><strong>Output</strong><iframe id="targetCode" name="targetCode" width="300" height="150"></iframe></td>
</tr>
</tbody>
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