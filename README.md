# formula editor

一款网页数学公式编辑器，基于mathquill.js封装，更便于开发者使用

# Demo

查看- [demo文件](demo.html)

# Installation

项目依赖于`jquery` `1.11.0`，项目根目录的`jquery`下提供了一个
项目打包会将`jquery`打包进去，如果项目中原有`jquery`有可能会引起冲突，请使用`iframe`版本

运行以下命令进行编译

```shell
npm install

npm run build
```

`formulaEditor.mjs`,`formulaEditor.umd.js`根据项目类型引入其一。
然后引入`style.css`

# Usage

### 普通项目

参考`demo`
引入`FormulaEditor`类，构造函数传入挂载容器，
`FormulaEditor`会根据挂载的容器适应自己的宽度，
默认的配置文件下挂载的容器最好大于`930px`

### webpack vite等项目

将编译后的`formulaEditor.mjs`，`style.css`放入项目
在需要的时候导入`FormulaEditor`类创建对象即可

### 使用iframe 避免依赖冲突

参考demo-iframe

将iframe目录下的文件拷贝进项目，iframe的地址指向formulaEditor.html
iframe之间使用postMessage交互传入的data数据为结构为
`{id: "content", "method": 'latex', "args": ['123\\frac{123}{123}'], "needReturn": false}`

| 属性         | 示例                        | 作用                                             |
|------------|---------------------------|------------------------------------------------|
| id         | `content`                 | 避免多iframe下使用onmessage接受时处理冲突，该id在onmessage时会传回 |
| method     | `latex`                   | 需要调用formulaEditor对象的方法名称，参考api                 |
| args       | `['123\\frac{123}{123}']` | 调用方法的参数，根据调用的方法需要的参数数量来传                       |
| needReturn | `true/false`              | 是否需要返回值，需要就会window.parent.postMessage传回返回值     |

```javascript
import {FormulaEditor} from "./formulaEditor.mjs";

let content = document.getElementById("content");

let formulaEditor = new FormulaEditor(content);
```

# API Methods

### constructor(el, config)

传入挂载容器对象初始化一个`FormulaEditor`编辑器，配置文件为默认结构参考
[默认配置文件](lib/config/default.js)，其中可自由定义每一个按钮，与点击后输入的
laTeX表达式（action），数学符号（label），颜色（color）等。
label会根据labelType的类型去渲染，labelType可选的如下

| labelType | label示例                                                                                                                                                                                                                                                                                                                                                                                                  | 用法                                         |
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| laTeX     | `\\pi`                                                                                                                                                                                                                                                                                                                                                                                                   | 可以将laTeX表达式作为按钮的label                      |
| text      | `+`                                                                                                                                                                                                                                                                                                                                                                                                      | 以普通字符作为label                               |
| svg       | `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path  d="M16 36L16 34.5806452 9.32682927 34.5806452 9.32682927 14 8 14 8 36 16 36zM40 36L40 14 38.6731707 14 38.6731707 34.5806452 32 34.5806452 32 36 40 36zM18.0277136 30L30 29.9698341 29.9584296 10 18 10 18.0277136 30zM19.0286533 29L19 11.0155039 29 11 28.9856734 28.9844961 19.0286533 29z"></path></svg>` | 将svg作为label，svg不应该带有颜色信息，否则config中的颜色设置会失效 |
| html      | `<p class="xxx">xxx</p>`                                                                                                                                                                                                                                                                                                                                                                                 | 将一段html代码作为label，最大程度自定义                   |

### latex()

返回用于存储的字符

### latex(laTeX)

修改当前渲染的字符

## static方法

### staticMath(el, laTeX)

将`el`渲染为`laTeX`数学字符

### 其他APi

基于mathquill.js封装 可通过`formulaEditor`对象中的`MQ`和`mathField`调用到mathquill.js的方法
参考[mathquill官网](http://docs.mathquill.com/en/latest/Api_Methods/#latex)

