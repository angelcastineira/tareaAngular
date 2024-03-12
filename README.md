#  Tarea: Angular básico

_Enunciado:_

Realiza un ejemplo práctico usando componentes de Angular

* Que se actualice una variable
* Varios componentes

Sube a un repositorio todo el proyecto de Angular con readme explicando lo realizado

## Primeros pasos

En `src/index.html` agrego la etiqueta `<app-root></app-root>` al `body`,
quedando de la siguiente forma:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Prueba</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

Esta etiqueta hace referencia al `selector` del archivo
`app.component.ts` de la carpeta `app`:

```ts
@Component({
  selector: 'app-root',
    ...
}
```



