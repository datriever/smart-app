import pandas as pd

def normalize(column):
    """Normalize a column to the range [0, 1]."""
    return column / column.max()

def calculate_economic_risk(row, data):
    """Calculate economic risk as an average of normalized CAPEX, LCOE, and Fuel Price."""
    capex = row['CAPEX ($/kW)']
    lcoe = row['LCOE Coste de los instrumentos ($/MWh)']
    fuel_price = row['Fuel price ($/GJ)']

    normalized_capex = capex / data['CAPEX ($/kW)'].max()
    normalized_lcoe = lcoe / data['LCOE Coste de los instrumentos ($/MWh)'].max()
    normalized_fuel_price = fuel_price / data['Fuel price ($/GJ)'].max()

    return (normalized_capex + normalized_lcoe + normalized_fuel_price) / 3

def calculate_operational_risk(row, data):
    """Calculate operational risk as an average of normalized (1-Capacity Factor), Fixed O&M, and Variable O&M."""
    var_om = row['Variable O&M cost ($/MWh)']
    fixed_om = row['Fixed O&M cost (fraction of CAPEX)']
    capacity_factor = 1 - row['Capacity factor']

    normalized_var_om = var_om / data['Variable O&M cost ($/MWh)'].max()
    normalized_fixed_om = fixed_om / data['Fixed O&M cost (fraction of CAPEX)'].max()
    normalized_capacity_factor = capacity_factor / (1 - data['Capacity factor']).max()

    return (normalized_var_om + normalized_fixed_om + normalized_capacity_factor) / 3

def assign_risk_by_type(instrument, risk_type):
    """Assign fixed regulatory and environmental risks based on the instrument."""
    regulatory_risks = {
        "Biomass": 0.4,
        "Geothermal": 0.2,
        "Hydro": 0.2,
        "PV": 0.2,
        "Wind onshore": 0.2,
        "Nuclear": 0.5,
        "Coal": 0.5,
        "Natural Gas": 0.5
    }

    environmental_risks = {
        "Biomass": 0.4,
        "Geothermal": 0.2,
        "Hydro": 0.2,
        "PV": 0.2,
        "Wind onshore": 0.2,
        "Nuclear": 0.4,
        "Coal": 0.5,
        "Natural Gas": 0.5
    }

    if risk_type == "regulatory":
        return regulatory_risks.get(instrument, 0.0)
    elif risk_type == "environmental":
        return environmental_risks.get(instrument, 0.0)
