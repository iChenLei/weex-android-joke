<p align="center"><img src="http://i1.piimg.com/567571/002efebc87d32ed1.png"></p>
<p align="center"><img src="https://img.shields.io/badge/build-failing-red.svg?style=flat-square">  <img src="https://img.shields.io/badge/Platform-Android-green.svg?style=flat-square">  <img src="https://img.shields.io/badge/sdk--version-0.8.0-red.svg?style=flat-square">  <img src="https://img.shields.io/badge/language-Js&Java-green.svg?style=flat-square">   <img src="https://img.shields.io/badge/weexfile-.we-green.svg?style=flat-square">  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square"></p>
###阿里巴巴weex校园开发大赛作品
![](http://p1.bpimg.com/567571/033072ded53b7f0e.png)
>该图片来自比赛答辩PPT的展示页

###weex开发流程
1.打开Android Studio，初始化一个项目
2.配置好gradle，安装好weex-sdk(我用的是v0.8.0版本)
```gradle
	compile 'com.android.support:recyclerview-v7:24.2.1'
    compile 'com.android.support:appcompat-v7:24.2.1'
    compile 'com.alibaba:fastjson:1.1.45'
    compile 'com.taobao.android:weex_sdk:0.8.0@aar'
    compile 'com.squareup.picasso:2.5.2'
```
3.利用Picasso实现ImageAdapter
```java
public class ImageAdapter implements IWXImgLoaderAdapter
```
4.配置好webpack.config.js，实现热更新编译we文件到Android项目下的assets文件加下
5.开发实现你的功能ing
###遇到的困难
1.SDK0.8.0版本无法实现加载本地图片，新版本已经可以实现
2.weex功能还不是很完善，自己需要写很多扩展
3.前端开发者需要安卓原生开发知识
###为什么不使用weexpack和weex-toolkit
&nbsp;&nbsp;&nbsp;&nbsp;我开发笑话部落格的时候，这两个开发工具都不是很好用，[weexpack](https://github.com/weexteam/weex-pack)打包出来的apk难于更改。当时weexpack还没有插件市场等高级功能，现在weexpack已经很好用了。[weex-toolkit](https://github.com/weexteam/weex-toolkit)用来开发H5效果不错，开发安卓需要自己改下配置。现在weex-toolkit已经支持vue2.0，效果不错，大家可以无需学习.we语法直接使用vuejs语法，web原生开发两不误。
&nbsp;&nbsp;&nbsp;&nbsp;我的建议是两者现在都可以去用啦
###.vue与.we的选择
&nbsp;&nbsp;&nbsp;&nbsp;在weex0.9.4版本之前，weex还不支持[vuejs](https://vuejs.org)和[rax](http://rax.taobaofed.org/)作为js runtime framework,在第二届weexconf上勾股宣布支持vuejs和raxjs作为weex的js运行时框架。个人建议使用vue2.0的语法来写，这样学习收益看起来是最好的，vuejs和weex两不误。我使用weex做开发的时候别无选择，只能写.we来编译。
###Weex和React Native
两者都是优秀的js移动开发框架，前者轻量适合嵌入，后者生态完善适合完全用RN来开发应用，如果有H5的考量建议weex,RN官方目前不支持兼容web开发（有第三方支持）。个人喜欢用weex开发安卓，rn开发ios.反正就是折腾啊。。。
###使用笑话部落格
>仅仅支持安卓apk

```
	weex-android-joke
	 ├──Android //java代码
	 ├──Apk
	 │   └─xiaohua.apk //可直接安装的apk文件，支持安卓4.0以上版本
	 ├──weex  //weex代码,含有webpack配置文件
	 └──README.md  //readme
```
使用git下载项目代码，会得到项目源码和安卓apk。
```git 
	clone https://github.com/iChenLei/weex-android-joke.git
```
### License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2017-present, ChenLei