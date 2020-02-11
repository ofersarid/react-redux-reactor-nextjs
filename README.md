# React-redux-reactor-nextjs
A boilerplate for building a **server-side-rendered** website with React, Redux, Reactor &amp; Next.js
<br/><br/>

## Before you start
let's install some dev tools.
1. [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
2. [Immutable JS formmater](https://chrome.google.com/webstore/detail/immutablejs-object-format/hgldghadipiblonfkkicmgcbbijnpeog)
3. [React Devtools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
<br/><br/>

## Steps
1. Fork
2. Clone your your forked project:  `git clone: {your forked project's url} `
3. Install dependencies `yarn`
4.  Run dev: `npm run dev`
5. Open your browser at `localhost:3000`
<br/><br/>

## Connecting to the Reactor CMS
Go to the `reactor.config` file and change the `userId` to the ID string that was provided to you by Reactor.
```$xslt
module.exports = {
  userId: 'your_reactor_id',
};
```
<br/><br/>

## In the box
### Some utility components (located in the `shared`  folder)
1. `<Helmet />` - for changing the tab title and description of each page (you can set the defaults inside the file, just update the `defaultProps` section)

### Some utility services (located in the `services`  folder)
1. `device` - This service will automatically maintain the state of the device even if the window will be resized by the user. It is hooked the the Redux store and can be accessed via `device.selectors.type`  and `device.selectors.oreintation`. you must Use the `connect` function provided by `react-redux` and pass it to the state objects like so:
```
import services from '[path to services folder]';

const MyPage = ({ type, orientation }) => (
	<div>
		Device type: ${type}
		Device orientation: ${orientation}
	</div>
)

const mapStateToProps = state => ({  
	  type: device.selectors.type(state),  
	  orientation: device.selectors.oreintation(state),  
});

export default connect(mapStateToProps)(MyPage);
```
