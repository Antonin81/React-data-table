# React + TypeScript + Vite

theme : data-table-classic

# @antonin-oc/react-data-table

## React data table component

This data table has been created for my OpenClassrooms studies. It is a pretty simple data table, with not many configurations, but easy to use. I had to use React, and I added Typescript to my tools.

## Key Features

- Built-in :
  - Sorting
  - Paginator
  - Search
  - Showed data length selection
- Themeable/Customizable
- Accessibility

## How to work with It

You can import this package using npm :

```
npm i @antonin-oc/react-data-table
```

Then, import the DataTable component :

```
import { DataTable } from "@antonin-oc/react-data-table";
```

You can call it like this :

```
<DataTable
  attributes={attributes}
  data={data}
  headings={headings}
/>
```

data is an array of json objects.\
Example :

```
const data : Record<string, any>[] = [
  {
    firstName : "John",
    lastName : "Doe",
    age : 24
  },{
    firstName : "John",
    lastName : "Smith",
    age : 32
  }
]
```

headings is an array of json objects, with the keys title and data, title corresponding to the displayed text in the thead, and data to the corresponding key in the data object.\
Example :

```
const headings : { title: string; data: string; }[] = [
  {
    title : "First name",
    data : "firstName"
  },{
    title : "Last name",
    data : "lastName"
  },{
    title : "Age",
    data : "age"
  }
]
```

attributes is an json object, with the keys id, className and style.\
Example :

```
const attributes: TableHTMLAttributes<any> = {
  id: "data-table",
  className: "data-table",
  style: {
    backgroundColor: "white",
  },
};
```

### Themes

At the moment, one theme exists beside default one. You can use it giving the class "data-table-classic" in the className value in the attributes object.

It looks like this :

- Basic :
![Capture d'écran 2024-12-27 141753](https://github.com/user-attachments/assets/f889c0ca-5fd7-4ad3-93b7-c63c03b45d21)

- Classic :
![Capture d’écran 2024-12-27 141832](https://github.com/user-attachments/assets/b72784a8-e92c-41fc-8c0f-4d44a501689b)

## How to work on It

This project uses React, Typescript, Sass, npm, Eslint and Prettier \
To work on it, fork the project.\
Here are the executable commands :

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser, or on the port you changed if you did.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run lint`

Runs the linter.

### `npm run preview`

Runs the built version on [http://localhost:4173](http://localhost:4173).

### `npm run sass`

Compiles in real time your scss files in a css file.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Help

You can find help to use these tools by looking at these links :

- React - [React documentation](https://react.dev).
- TypeScript - [TypeScript documentation](https://www.typescriptlang.org/docs/).
- Sass - [Sass documentation](https://sass-lang.com/documentation/).
- npm - [npm documentation](https://docs.npmjs.com).
- Eslint - [Eslint documentation](https://eslint.org/docs/latest/).
- Prettier - [Prettier documentation](https://prettier.io/docs/en/).
