# How to get started

Download the repository

cd into the root of the repository
run

    $ npm ci
    $ npm start

Then either wait for a browser to automatically appear or naviguate to `localhost:3000`

# How the project works

Do not touch imageAPI.ts, index.ts, react-app-env.d.ts. These files are the magic that hold everything together.
You can write javascript or typescript.
The file src/game/main.ts contains a `main` function. This function is called 60 times a second and must be used to draw everything.
Once `npm start` has started. Saving any file will automatically reload the website.

## Drawing a line

The `main` function is passed a CanvasRenderingContext2D. An example of usage can be found here:
https://www.w3schools.com/jsref/canvas_lineto.asp

Note that the canvas object is not needed in this project and the `ctx` object is passed as argument to the function.

Therefore the following code should work (in main):

```ts
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(300, 150);
ctx.stroke();
```

## Drawing an image

We can use the `drawImage` method of `ctx` to draw an image.
https://www.w3schools.com/jsref/canvas_drawimage.asp

Note that because this project uses several non-default tools. Loading an image is different.

1. Save the image in the `public` folder.
1. Import the `loadImage` function from the `imageAPI` as such:

```ts
import { loadImage } from "../imageAPI";
```

1. Call the `loadImage` function and give it a **relative path** from the `public/` directory. A picture of a Stardew Valley cat was included by default

```ts
let catImage = loadImage("cat.png");
```

1. This variable can then be used as argument to the `drawImage` method.

```ts
ctx.drawImage(catImage, 10, 10);
```
