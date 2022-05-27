``` html
<div id="container">
    <div id="box">
</div>
```

#container {
    display: grid
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
}

#box {
    grid-column: 2;
    grid-row: 2;
    with: 100px;
    height: 100px;
}