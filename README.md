# t-chat3

终端运行的Chat-GPT

[![NPM version](https://img.shields.io/npm/v/t-chat3?color=a1b858&label=)](https://www.npmjs.com/package/t-chat3)

![screen shot](https://github.com/cuiyiming1998/cuiyiming1998/assets/25956970/8bb75885-1666-47a3-8089-fb356bf7e2fb)

## Usage

### Clone项目 && 安装依赖

```bash
git clone https://github.com/cuiyiming1998/t-chat3.git
```

```bash
cd t-chat3 && pnpm i
```

### 在项目中添加配置文件

新建`.env`文件

代理地址推荐使用[chatanywhere](https://api.chatanywhere.cn/v1)

```env
OPEN_BASE_PATH = '代理地址'
OPEN_API_KEY = '你的API Key'
```

### 执行打包命令

```bash
pnpm build
```

### 全局link

```bash
pnpm link --global
```

### 使用

```bash
t-chat3
```

## Alias

如果你使用的是`zsh`或其他的命令行工具, 可以在配置文件中添加别名, 更方便的调出chat窗口.

### 以zsh为例

```bash
vim ~/.zshrc
```

添加以下代码:

```zshrc
alias chat='t-chat3'
```

`:wq`退出后, 执行

```bash
source ~/.zshrc
```

后面使用`chat`命令即可

## License

[MIT](./LICENSE) License © 2023 [cymYoung](https://github.com/cuiyiming1998)
