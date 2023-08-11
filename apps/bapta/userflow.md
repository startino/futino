
Userflow FlowChart
---
```mermaid


flowchart TD

subgraph B
A[Land]-->B[Understand Bapta hosts Safaris for a good price and service]
end

subgraph A
landing_page[Landing Page] --> clicks_find_tour([Clicks Find a Tour])

landing_page --> scrolls_down([Scrolls Down])
scrolls_down --> top_tours[Top Rated Tours Section]


clicks_find_tour --> tours[Tours Page]
top_tours --> clicks_a_tour([Clicks on a Tour])
end

```