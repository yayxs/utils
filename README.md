## Quick to use

1. Clone

```sh
# 克隆项目（vast-utils）
git clone https://github.com/yayxs/vast-utils
```

2. Use in Pro

```sh
yarn add vast-utils

// 导入
import { xxx } from 'vast-utils'

```

3. test

```sh
yarn test // use jest
```

## Constants

<dl>
<dt><a href="#isHttpsMailtoTel">isHttpsMailtoTel</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否是 http/https/mailto/tel 开头</p>
</dd>
<dt><a href="#isStart">isStart</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否是 &#39;12:34&#39; 格式</p>
</dd>
<dt><a href="#isGuoNeiCall">isGuoNeiCall</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否是 国内电话</p>
</dd>
</dl>

<a name="isHttpsMailtoTel"></a>

## isHttpsMailtoTel ⇒ <code>Boolean</code>

是否是 http/https/mailto/tel 开头

**Kind**: global constant

| Type                | Description |
| ------------------- | ----------- |
| <code>String</code> | path 地址   |

<a name="isStart"></a>

## isStart ⇒ <code>Boolean</code>

是否是 '12:34' 格式

**Kind**: global constant

| Type                | Description |
| ------------------- | ----------- |
| <code>String</code> | str         |

<a name="isGuoNeiCall"></a>

## isGuoNeiCall ⇒ <code>Boolean</code>

是否是 国内电话

**Kind**: global constant

| Type                | Description                             |
| ------------------- | --------------------------------------- |
| <code>String</code> | 电话号码 0370-3731666 或者 021-87888822 |

## Git 提交规范

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流改进
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发中
