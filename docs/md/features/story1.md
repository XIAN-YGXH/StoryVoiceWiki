# 故事配置 AI 过程图

这个模式适合抖音、快手，这种短视频平台。

模式运行流程。

![](/images/story13.jpg)

将文件和配置在服务器上注册后，服务器就会自动开始工作。当服务器运行到图片处理逻辑的时候，就需要启动客户端来进行本地豆包图片生成。当所有图片都生成完后，服务器会自己继续运行。

需要注意的是，无论是创建目录、上传 txt 文件都需要自己手动点击一下按钮，弹出成功提示才行。

下面是两个案例，竖屏和横屏。

<div style="position: relative; padding: 30% 45%;">
  <iframe 
    src="//player.bilibili.com/player.html?isOutside=true&aid=114466146489047&bvid=BV1qqVbzoEcC&cid=29837427958&p=1" 
    scrolling="no" 
    border="0" 
    frameborder="no" 
    framespacing="0" 
    allowfullscreen="true" 
    style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
  ></iframe>
</div>

<br/>

<div style="position: relative; padding: 30% 45%;">
  <iframe 
    src="//player.bilibili.com/player.html?isOutside=true&aid=114475373960973&bvid=BV1k653zRES4&cid=29862922159&p=1" 
    scrolling="no" 
    border="0" 
    frameborder="no" 
    framespacing="0" 
    allowfullscreen="true" 
    style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
  ></iframe>
</div>

## 添加任务「错一步或者漏填都会导致出现问题」

最下面有视频教程，但是，文字会说一些注意事项。

### 1. 创建目录

书籍 ID 是书籍的唯一标识，每个书籍 ID 都要保证不相同，可以随意输入，不要用中文。

![](/images/story10.png)

输入后，需要<span style="color:red">手动点击，创建存储目录。</span>这样，服务器就会出现这样一个文件夹，你后面上传的文件都会上传到这个文件夹中。

### 2. 填写书籍

这个随意填写，就是让你区分各个书籍的。

### 选择模式

![](/images/story11.png)

### 3. 上传故事

你的故事需要先保存在 txt 文件中，然后上传，并且，需要需要<span style="color:red">手动点击，上传故事按键。</span>

另外，txt 的内容要注意按剧情分段。

![](/images/story12.png)

你需要自己按照剧情进行分段，千万不要用右边的方式。因为，AI 也不会分图。比如，你想 3 个段落就生成一张图，那你一定要把 txt 的内容进行切分，千万不要弄成一个段落。

### 4. 比例、书籍类型、风格

比例，就是你想生成竖屏还是横屏。

书籍类型，就是你这个故事是什么类型的，如果下拉框没有，你可以自定义输入。另外，故事类型不一定要模糊，可以比较具体，比如，你要生成西游记的故事，那么，书籍类型完全可以写成「西游记」。

风格，即 AI 要生成什么类型的图片。你也可以自定义输入，当然，你也可以写的很具体，比如「宫崎骏漫画风格」、「3D Q版风格」。

### 5. 图片生成阈值限制

比如，字幕条数是 3 ，字数限制是 30。

那么，生成图片的就是，当段落满足 3 条或者字数超过 30 的时候，就会生成一张图片。

### 6. 字体设置「目前只支持中文」

就是你的字幕在视频中是怎么显示的。

### 7. 音色「目前只支持中文」

就是你配音的相关设置。

你可以用「生成语音」来测试你的设置。

一切都弄好后，点击「保存书籍」就好了。记住，除了备注，其他的都是必填项。

<div style="position: relative; padding: 30% 45%;">
  <iframe 
    src="//player.bilibili.com/player.html?isOutside=true&aid=114482017738427&bvid=BV1vxVRzcEbr&cid=29884615173&p=1" 
    scrolling="no" 
    border="0" 
    frameborder="no" 
    framespacing="0" 
    allowfullscreen="true" 
    style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
  ></iframe>
</div>


## 客户端运行

请参考 [client](/md/client/client.html)





