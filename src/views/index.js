const files = require.context('.', false, /\.vue/);

const configViews = [];

files.keys().forEach(key => {
  const componentConfig = files(key);
  const component = componentConfig.default;
  const name = component.name;
  configViews.push({
    path: `/${name}`,
    name,
    component: component
  });
});

export default configViews;
