# 按钮

`c-button` 按钮组件，可以定制不同的颜色或者图标来替换标准的 html 按钮。

## 示例

:::demo
```html
<div class="button-wrapper">
  <c-button>默认按钮</c-button>
  <c-button color="primary">主要按钮</c-button>
  <c-button color="success">成功按钮</c-button>
  <c-button color="warning">警告按钮</c-button>
  <c-button color="info">信息按钮</c-button>
  <c-button color="danger">危险按钮</c-button>
</div>
<div class="button-wrapper">
  <c-button plain>默认按钮</c-button>
  <c-button color="primary" plain>主要按钮</c-button>
  <c-button color="success" plain>成功按钮</c-button>
  <c-button color="warning" plain>警告按钮</c-button>
  <c-button color="info" plain>信息按钮</c-button>
  <c-button color="danger" plain>危险按钮</c-button>
</div>
<div class="button-wrapper">
  <c-button round>默认按钮</c-button>
  <c-button color="primary" round>主要按钮</c-button>
  <c-button color="success" round>成功按钮</c-button>
  <c-button color="warning" round>警告按钮</c-button>
  <c-button color="info" round>信息按钮</c-button>
  <c-button color="danger" round>危险按钮</c-button>
</div>

<style lang="less">
.button-wrapper {
  padding-bottom: 10px;
  &:last-child {
	padding-bottom: 0;
  }
}
</style>
```
:::



## 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo
```html
<div class="button-wrapper">
  <c-button>默认按钮</c-button>
  <c-button size="medium">中等按钮</c-button>
  <c-button size="small">小型按钮</c-button>
  <c-button size="mini">超小按钮</c-button>
</div>
<div class="button-wrapper">
  <c-button round>默认按钮</c-button>
  <c-button size="medium" round>中等按钮</c-button>
  <c-button size="small" round>小型按钮</c-button>
  <c-button size="mini" round>超小按钮</c-button>
</div>
```
:::

