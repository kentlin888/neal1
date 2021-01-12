```mermaid
graph LR;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

HTML tag
===
<div class="mermaid">
sequenceDiagram
A->>B:Query
B->>C:Fowasrd query
Note right of C:Thinking
C->>B:Response
B->>A:Forward response
</div>

HTML tag
===
<div class="mermaid">
  sequenceDiagram A-->B: Works!
</div>

Markdown fenced code
===
```mermaid
sequenceDiagram
  A-->B: Works!
```
HUGO shortcodes
===
{{<mermaid attr="val">}} sequenceDiagram A-->B: Works! {{</mermaid>}}