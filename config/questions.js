/* ── Domestic Air – Form Questions ──────────────────────────
   Add, remove, or reorder questions here.
   Supported types: text, textarea, date, number, select, radio, checkbox
   See README.md for full field reference.
   ────────────────────────────────────────────────────────── */

window.QUESTIONS = {
  "sections": [
    {
      "title": "Visit Details",
      "icon": "clipboard",
      "fields": [
        {
          "id": "engineer_name",
          "type": "select",
          "label": "Engineer Name",
          "required": false,
          "options": [
            "James Carter",
            "Ryan Booth",
            "Liam Fletcher",
            "Callum Shaw",
            "Tom Hargreaves",
            "Other – see notes"
          ]
        },
        {
          "id": "visit_date",
          "type": "date",
          "label": "Date of Visit",
          "required": false
        },
        {
          "id": "visit_type",
          "type": "select",
          "label": "Type of Visit",
          "required": false,
          "options": [
            "Planned Maintenance",
            "Reactive Callout",
            "Follow-up / Warranty",
            "New Installation Check",
            "Customer Request"
          ]
        },
        {
          "id": "customer_name",
          "type": "text",
          "label": "Customer Name",
          "required": false,
          "placeholder": "e.g. Mr & Mrs Johnson"
        },
        {
          "id": "site_address",
          "type": "textarea",
          "label": "Site Address",
          "required": false,
          "placeholder": "Full address including postcode"
        },
        {
          "id": "job_reference",
          "type": "text",
          "label": "Job Reference Number",
          "required": false,
          "placeholder": "e.g. DA-2026-0142"
        },
        {
          "id": "arrival_time",
          "type": "text",
          "label": "Time of Arrival",
          "required": false,
          "placeholder": "e.g. 09:30"
        },
        {
          "id": "departure_time",
          "type": "text",
          "label": "Time of Departure",
          "required": false,
          "placeholder": "e.g. 11:15"
        }
      ]
    },
    {
      "title": "Equipment Details",
      "icon": "settings",
      "fields": [
        {
          "id": "equipment_make",
          "type": "select",
          "label": "Make / Manufacturer",
          "required": false,
          "options": [
            "Daikin",
            "Mitsubishi Electric",
            "Mitsubishi Heavy Industries",
            "Fujitsu",
            "Panasonic",
            "Samsung",
            "LG",
            "Toshiba",
            "Hitachi",
            "Carrier",
            "Other"
          ]
        },
        {
          "id": "equipment_model",
          "type": "text",
          "label": "Model Number",
          "required": false,
          "placeholder": "e.g. FTXM35R / ATXM35R"
        },
        {
          "id": "equipment_serial",
          "type": "text",
          "label": "Indoor Unit Serial Number",
          "required": false,
          "placeholder": "Found on label inside front panel"
        },
        {
          "id": "outdoor_serial",
          "type": "text",
          "label": "Outdoor Unit Serial Number",
          "required": false,
          "placeholder": "Found on label on outdoor unit"
        },
        {
          "id": "equipment_type",
          "type": "select",
          "label": "System Type",
          "required": false,
          "options": [
            "Wall-Mounted Split",
            "Ceiling Cassette",
            "Floor Console",
            "Ducted (Concealed)",
            "Multi-Split (2 rooms)",
            "Multi-Split (3+ rooms)",
            "VRF / VRV System",
            "Portable Unit"
          ]
        },
        {
          "id": "refrigerant_type",
          "type": "select",
          "label": "Refrigerant Type",
          "required": false,
          "options": [
            "R32",
            "R410A",
            "R22 (legacy)",
            "R407C",
            "R290 (Propane)",
            "Unknown"
          ]
        },
        {
          "id": "system_capacity",
          "type": "select",
          "label": "System Capacity",
          "required": false,
          "options": [
            "1.5 kW", "2.0 kW", "2.5 kW", "3.5 kW",
            "4.2 kW", "5.0 kW", "5.3 kW", "6.0 kW",
            "7.0 kW", "8.0 kW", "9.0 kW", "Other"
          ]
        },
        {
          "id": "install_date",
          "type": "date",
          "label": "Original Installation Date",
          "required": false
        },
        {
          "id": "warranty_status",
          "type": "select",
          "label": "Warranty Status",
          "required": false,
          "options": [
            "In warranty",
            "Out of warranty",
            "Extended warranty (Domestic Air)",
            "Unknown"
          ]
        }
      ]
    },
    {
      "title": "Safety Checks",
      "icon": "zap",
      "fields": [
        {
          "id": "safe_to_work",
          "type": "radio",
          "label": "Is it safe to work on this equipment?",
          "required": false,
          "options": ["Yes", "No", "Restricted"]
        },
        {
          "id": "isolator_accessible",
          "type": "radio",
          "label": "Electrical isolator accessible and clearly labelled?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "supply_voltage",
          "type": "number",
          "label": "Supply Voltage at Isolator",
          "required": false,
          "placeholder": "e.g. 230",
          "unit": "V"
        },
        {
          "id": "earth_continuity",
          "type": "radio",
          "label": "Earth continuity satisfactory?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "rcd_protection",
          "type": "radio",
          "label": "RCD / circuit protection present and labelled?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "wiring_condition",
          "type": "radio",
          "label": "All wiring in good condition, no signs of overheating or damage?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "f_gas_registered",
          "type": "radio",
          "label": "Work carried out under F-Gas regulations?",
          "required": false,
          "options": ["Yes", "No", "N/A"]
        },
        {
          "id": "safety_notes",
          "type": "textarea",
          "label": "Safety Observations / Concerns",
          "required": false,
          "placeholder": "Note any safety issues or actions taken"
        }
      ]
    },
    {
      "title": "Indoor Unit Inspection",
      "icon": "eye",
      "fields": [
        {
          "id": "indoor_unit_clean",
          "type": "radio",
          "label": "Indoor unit casing clean and undamaged?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "indoor_fan_blade",
          "type": "radio",
          "label": "Fan blade / cross-flow fan clean and undamaged?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "indoor_coil_clean",
          "type": "radio",
          "label": "Evaporator coil clean, no fouling or mould?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "filters_condition",
          "type": "radio",
          "label": "Air filters – condition on arrival?",
          "required": false,
          "options": ["Clean", "Slightly dirty", "Very dirty", "Damaged", "N/A"]
        },
        {
          "id": "filters_cleaned",
          "type": "checkbox",
          "label": "Filters cleaned on this visit?"
        },
        {
          "id": "filters_replaced",
          "type": "checkbox",
          "label": "Filters replaced on this visit?"
        },
        {
          "id": "drain_tray_clean",
          "type": "radio",
          "label": "Condensate drain tray clean and free of algae?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "drain_flow",
          "type": "radio",
          "label": "Condensate drain flowing freely (no blockage)?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "louvers_working",
          "type": "radio",
          "label": "Auto-swing louvers / vanes operating correctly?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "indoor_noise_vibration",
          "type": "radio",
          "label": "No unusual noise or vibration from indoor unit?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "return_air_temp",
          "type": "number",
          "label": "Return Air Temperature (at grille)",
          "required": false,
          "placeholder": "e.g. 22",
          "unit": "°C"
        },
        {
          "id": "supply_air_temp",
          "type": "number",
          "label": "Supply Air Temperature (discharge)",
          "required": false,
          "placeholder": "e.g. 13",
          "unit": "°C"
        },
        {
          "id": "indoor_unit_notes",
          "type": "textarea",
          "label": "Indoor Unit Notes",
          "required": false,
          "placeholder": "Any further observations about the indoor unit"
        }
      ]
    },
    {
      "title": "Outdoor Unit Inspection",
      "icon": "wind",
      "fields": [
        {
          "id": "outdoor_unit_location",
          "type": "radio",
          "label": "Outdoor unit in a well-ventilated, accessible position?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "outdoor_casing",
          "type": "radio",
          "label": "Outdoor unit casing undamaged, no corrosion?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "condenser_coil_clean",
          "type": "radio",
          "label": "Condenser coil fins clean and undamaged?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "outdoor_fan_clean",
          "type": "radio",
          "label": "Outdoor fan blade clean and free-spinning?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "pipework_condition",
          "type": "radio",
          "label": "Refrigerant pipework in good condition, no kinks?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "pipe_insulation",
          "type": "radio",
          "label": "Pipe insulation intact, UV-protected where exposed?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "outdoor_brackets",
          "type": "radio",
          "label": "Mounting brackets / fixings secure and undamaged?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "outdoor_clearance",
          "type": "radio",
          "label": "Minimum clearances maintained around outdoor unit?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "outdoor_noise_vibration",
          "type": "radio",
          "label": "No unusual noise or vibration from outdoor unit?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "outdoor_unit_notes",
          "type": "textarea",
          "label": "Outdoor Unit Notes",
          "required": false,
          "placeholder": "Any further observations about the outdoor unit"
        }
      ]
    },
    {
      "title": "Refrigerant Circuit",
      "icon": "thermometer",
      "fields": [
        {
          "id": "leak_check_method",
          "type": "select",
          "label": "Leak Check Method Used",
          "required": false,
          "options": [
            "Electronic leak detector",
            "UV dye and lamp",
            "Soap solution",
            "Visual inspection only",
            "Not carried out"
          ]
        },
        {
          "id": "no_refrigerant_leak",
          "type": "radio",
          "label": "No refrigerant leaks detected?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "pressure_high",
          "type": "number",
          "label": "High Side Pressure (condensing)",
          "required": false,
          "placeholder": "e.g. 24.5",
          "unit": "bar"
        },
        {
          "id": "pressure_low",
          "type": "number",
          "label": "Low Side Pressure (suction)",
          "required": false,
          "placeholder": "e.g. 8.2",
          "unit": "bar"
        },
        {
          "id": "suction_pipe_temp",
          "type": "number",
          "label": "Suction Pipe Temperature",
          "required": false,
          "placeholder": "e.g. 7",
          "unit": "°C"
        },
        {
          "id": "superheat",
          "type": "number",
          "label": "Superheat",
          "required": false,
          "placeholder": "e.g. 6",
          "unit": "K"
        },
        {
          "id": "subcooling",
          "type": "number",
          "label": "Subcooling",
          "required": false,
          "placeholder": "e.g. 5",
          "unit": "K"
        },
        {
          "id": "refrigerant_topped_up",
          "type": "checkbox",
          "label": "Refrigerant added on this visit?"
        },
        {
          "id": "refrigerant_amount",
          "type": "number",
          "label": "Amount of Refrigerant Added (if applicable)",
          "required": false,
          "placeholder": "e.g. 150",
          "unit": "grams"
        },
        {
          "id": "ambient_temp",
          "type": "number",
          "label": "Outdoor Ambient Temperature",
          "required": false,
          "placeholder": "e.g. 18",
          "unit": "°C"
        }
      ]
    },
    {
      "title": "Electrical & Performance",
      "icon": "zap",
      "fields": [
        {
          "id": "current_indoor",
          "type": "number",
          "label": "Running Current – Indoor Unit",
          "required": false,
          "placeholder": "e.g. 3.8",
          "unit": "A"
        },
        {
          "id": "current_outdoor",
          "type": "number",
          "label": "Running Current – Outdoor Unit",
          "required": false,
          "placeholder": "e.g. 9.2",
          "unit": "A"
        },
        {
          "id": "current_within_spec",
          "type": "radio",
          "label": "Running current within manufacturer's rated tolerance?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "compressor_starts",
          "type": "radio",
          "label": "Compressor starts and runs smoothly?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "defrost_function",
          "type": "radio",
          "label": "Defrost cycle functioning correctly (heat pump models)?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "capacitor_checked",
          "type": "radio",
          "label": "Fan capacitor checked and within tolerance?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "pcb_visual",
          "type": "radio",
          "label": "PCB and electrical components – no signs of burning or damage?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        }
      ]
    },
    {
      "title": "Controls & Settings",
      "icon": "sliders",
      "fields": [
        {
          "id": "remote_control_working",
          "type": "radio",
          "label": "Remote control functioning correctly?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "remote_batteries",
          "type": "checkbox",
          "label": "Remote control batteries replaced on this visit?"
        },
        {
          "id": "wifi_adaptor",
          "type": "radio",
          "label": "Wi-Fi / smart controller connected and responding?",
          "required": false,
          "options": ["Pass", "Fail", "N/A", "Not fitted"]
        },
        {
          "id": "all_modes_tested",
          "type": "radio",
          "label": "Cooling and heating modes tested and operating correctly?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "fan_speeds_working",
          "type": "radio",
          "label": "All fan speed settings working?",
          "required": false,
          "options": ["Pass", "Fail", "N/A"]
        },
        {
          "id": "timer_schedule",
          "type": "radio",
          "label": "Timer / weekly schedule checked and set correctly?",
          "required": false,
          "options": ["Pass", "Fail", "N/A", "Not set"]
        },
        {
          "id": "error_codes",
          "type": "text",
          "label": "Error or Fault Codes on Display (if any)",
          "required": false,
          "placeholder": "e.g. E7, F3 – or 'None'"
        },
        {
          "id": "error_codes_cleared",
          "type": "radio",
          "label": "Error codes cleared after investigation?",
          "required": false,
          "options": ["Yes", "No", "N/A"]
        }
      ]
    },
    {
      "title": "Cleaning Carried Out",
      "icon": "wind",
      "fields": [
        {
          "id": "indoor_coil_cleaned",
          "type": "checkbox",
          "label": "Indoor evaporator coil cleaned?"
        },
        {
          "id": "condenser_coil_cleaned",
          "type": "checkbox",
          "label": "Outdoor condenser coil cleaned?"
        },
        {
          "id": "drain_tray_cleaned",
          "type": "checkbox",
          "label": "Condensate drain tray and pipe flushed?"
        },
        {
          "id": "fan_blade_cleaned",
          "type": "checkbox",
          "label": "Indoor cross-flow fan blade cleaned?"
        },
        {
          "id": "outdoor_unit_cleaned",
          "type": "checkbox",
          "label": "Outdoor unit casing wiped down?"
        },
        {
          "id": "antibacterial_treatment",
          "type": "checkbox",
          "label": "Antibacterial / anti-mould treatment applied?"
        },
        {
          "id": "cleaning_notes",
          "type": "textarea",
          "label": "Cleaning Notes",
          "required": false,
          "placeholder": "Describe condition found and what was cleaned"
        }
      ]
    },
    {
      "title": "Overall Assessment",
      "icon": "check-circle",
      "fields": [
        {
          "id": "overall_condition",
          "type": "select",
          "label": "Overall System Condition",
          "required": false,
          "options": [
            "A – Excellent, no issues found",
            "B – Good, minor observations only",
            "C – Fair, remedial work recommended",
            "D – Poor, urgent attention required",
            "F – Unsafe, system isolated"
          ]
        },
        {
          "id": "system_left_running",
          "type": "radio",
          "label": "System left running at end of visit?",
          "required": false,
          "options": ["Yes", "No – fault", "No – customer request"]
        },
        {
          "id": "immediate_action",
          "type": "radio",
          "label": "Is a follow-up visit or immediate action required?",
          "required": false,
          "options": ["Yes – urgent", "Yes – routine", "No"]
        },
        {
          "id": "recommended_actions",
          "type": "textarea",
          "label": "Recommended / Outstanding Works",
          "required": false,
          "placeholder": "Describe work recommended or left outstanding"
        },
        {
          "id": "parts_required",
          "type": "textarea",
          "label": "Parts or Materials to be Ordered",
          "required": false,
          "placeholder": "e.g. Replacement remote control – Daikin BRC52B63"
        },
        {
          "id": "next_service_date",
          "type": "date",
          "label": "Recommended Next Service Date",
          "required": false
        },
        {
          "id": "additional_notes",
          "type": "textarea",
          "label": "Additional Engineer Notes",
          "required": false,
          "placeholder": "Any other relevant observations"
        }
      ]
    },
    {
      "title": "Customer Sign-Off",
      "icon": "check-circle",
      "fields": [
        {
          "id": "customer_informed",
          "type": "radio",
          "label": "Customer informed of findings and any recommendations?",
          "required": false,
          "options": ["Yes", "No – vacant property", "Left written note"]
        },
        {
          "id": "customer_satisfied",
          "type": "radio",
          "label": "Customer satisfied with the service?",
          "required": false,
          "options": ["Yes", "No", "Not present"]
        },
        {
          "id": "customer_reported_issue",
          "type": "textarea",
          "label": "Issue Reported by Customer (if any)",
          "required": false,
          "placeholder": "Describe what the customer said the problem was"
        },
        {
          "id": "issue_resolved",
          "type": "radio",
          "label": "Was the customer's reported issue resolved?",
          "required": false,
          "options": ["Yes – fully resolved", "Partially resolved", "No – further visit needed", "N/A"]
        },
        {
          "id": "customer_signature_name",
          "type": "text",
          "label": "Customer Printed Name (if signed)",
          "required": false,
          "placeholder": "e.g. Sarah Johnson"
        },
        {
          "id": "engineer_initials",
          "type": "text",
          "label": "Engineer Initials (to confirm report complete)",
          "required": true,
          "placeholder": "e.g. JC"
        }
      ]
    }
  ]
};
