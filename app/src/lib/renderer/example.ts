const quote = '```'
export const DEFAULT_MARKDOWN = `
# Energy Optimization Recommendations

## Recommended Energy Portfolio

${quote}plot
{ 
  "data": [
    {
      "labels": ["Solar", "Wind", "Hydro", "Natural Gas", "Coal"],
      "values": [45, 25, 15, 10, 5],
      "type": "pie",
      "hole": 0.3,
      "textinfo": "label+percent",
      "name": "Energy Sources"
    }
  ],
  "layout": {
    "title": "Energy Portfolio"
  }
}
${quote}

---

## Cost Comparison

| Current Cost (€) | Recommended Cost (€) | Savings (%) |
|-------------------|-----------------------|-------------|
| 2,000            | 1,600                 | 20%         |

---

## Monthly Emissions Breakdown

${quote}plot
{
  "data": [
    {
      "x": ["January", "February", "March", "April", "May", "June"],
      "y": [900, 850, 800, 780, 750, 700],
      "type": "bar",
      "name": "Emissions (kg CO2)"
    }
  ],
  "layout": {
    "title": "Monthly CO₂ Emissions"
  }
}
${quote}

---

## Renewable Contribution Over Time

${quote}plot
{
  "data": [
    {
      "x": ["2023", "2024", "2025", "2026", "2027"],
      "y": [20, 40, 60, 75, 90],
      "type": "scatter",
      "mode": "lines+markers",
      "name": "Renewable Contribution (%)"
    }
  ],
  "layout": {
    "title": "Renewable Energy Adoption",
    "xaxis": {"title": "Year"},
    "yaxis": {"title": "Renewables (%)"}
  }
}
${quote}

---

## Energy Source Details

| Source          | Share (%) | Estimated Cost (€) | Emission Impact (kg CO2) |
|------------------|-----------|---------------------|---------------------------|
| Solar            | 45        | 450                 | 0                         |
| Wind             | 25        | 250                 | 0                         |
| Hydro            | 15        | 200                 | 0                         |
| Natural Gas      | 10        | 150                 | 500                       |
| Coal             | 5         | 50                  | 1,000                     |

---

## CO₂ Savings Visualization

${quote}plot
{
  "data": [
    {
      "values": [5000, 2000],
      "labels": ["Current Emissions", "Projected Emissions"],
      "type": "pie",
      "textinfo": "label+percent",
      "name": "Emissions"
    }
  ],
  "layout": {
    "title": "CO₂ Emissions Reduction"
  }
}
${quote}

---

## Efficiency Metrics

${quote}plot
{
  "data": [
    {
      "x": ["Lighting", "HVAC", "Machinery", "Computers"],
      "y": [70, 50, 40, 30],
      "type": "bar",
      "name": "Efficiency (%)"
    }
  ],
  "layout": {
    "title": "Energy Efficiency by Category"
  }
}
${quote}

---

## Key Insights

| Metric                | Current Value | Projected Value | Improvement (%) |
|------------------------|---------------|------------------|-----------------|
| Renewable Share        | 20%           | 85%              | 325%            |
| Energy Cost (€)        | 2,000         | 1,600            | 20%             |
| Annual Emissions (kg)  | 10,000        | 5,000            | 50%             |
`