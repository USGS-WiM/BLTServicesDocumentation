﻿var configuration = {}
configuration.baseurls =
{
    'services': 'https://blt.wim.usgs.gov/BLTServices',
    //'services': 'https://blt.wim.usgs.gov/BLTServices',
   // 'services': 'http://localhost/BLTServices',
    'application': 'https://blt.wim.usgs.gov/BLTWeb'
}

configuration.resources =
    [
        //#region active_ingredients (1)
        {            
            "name": "Active Ingredient",
            "description": "The active ingredient resource represents an active ingredient that can be used in a limitation on a PULA.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/ActiveIngredients{0}",
                        "description": "This service returns a list of all active ingredients.",
                        "id": "All Active Ingredients",
                        "parameters": [],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"                        
                    },
                    {
                        "uri": "/ActiveIngredients/{1}{0}",
                        "description": "This service returns an active ingredient.",
                        "id": "An Active Ingredient",
                        "parameters": [
                            { "name": "activeIngredientID", "type": "number", "description": "Unique primary id of active ingredient requested", "value": "" },
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/ActiveIngredients{0}?Status={1}&Date={2}",
                        "description": "This service returns a list of active ingredients for a given status. Status can be 'Published', 'Reviewed', or 'Created'.",
                        "id": "Versioned Active Ingredients",
                        "parameters": [
                           { "name": "status", "type": "string", "description": "status interested in.", "value": "" },
                           { "name": "date", "type": "date", "optional":true, "description": "If provided, date will be used to ensure expired time stamp is earlier than. If not provided, defaults to current date.", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/ActiveIngredients{0}?publishedDate={1}",
                         "description": "This service returns a list of active ingredients that are active.",
                         "id": "Published Active Ingredients",
                         "parameters": [
                            { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                         ],
                         "availableMedia": ".json",
                         "selectedMedia": ".json"
                    },
                    {
                        "uri": "/ActiveIngredients{0}?aiID={1}&publishedDate={2}",
                        "description": "This service returns a list of the published versions of an active ingredient.",
                        "id": "Published Versions of an Active Ingredient",
                        "parameters": [
                           { "name": "activeIngredientID", "type": "number", "description": "active_ingredient_id (secondary primary key) of active ingredient requested", "value": "" },
                           { "name": "date", "type": "date", "optional":true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/PULAS/{1}/ActiveIngredients{0}?publishedDate={2}",
                        "description": "This service returns a list of active ingredients that are published for a PULA.",
                        "id": "PULA Active Ingredients",
                        "parameters": [
                           { "name": "pulaID", "type": "number", "description": "pula_id of the PULA requested", "value": "" },
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    }
                ]
            }
            ]
        },
        //#endregion 
        //#region active_ingredient_pulas (2)
        {
            "name": "Pesticide Use Limitation Area (PULA)",
            "description": "The active ingredient PULA represents a Pesticide Use Limitation Areas (PULA) that has limitations, species and other information associated with it.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/PULAs{0}",
                        "description": "This service returns a list of all PULAs.",
                        "id": "All PULAs",
                        "parameters": [],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/PULAs/{1}{0}",
                        "description": "This service returns a PULA.",
                        "id": "A PULA",
                        "parameters": [
                            { "name": "pulaID", "type": "number", "description": "Unique primary id of pula requested", "value": "" },
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/PULAs{0}?status={1}&date={2}",
                        "description": "This service returns a list of PULAs for a given status. Status can be 'Published', 'Reviewed', or 'Created'.",
                        "id": "Versioned PULAs",
                        "parameters": [
                           { "name": "status", "type": "string", "description": "status interested in.", "value": "" },
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure expired time stamp is earlier than. If not provided, defaults to current date.", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/PULAs{0}?publishedDate={1}",
                        "description": "This service returns a list of PULAs (SimplePULAs) that are published and effective.",
                        "id": "Published PULAs",
                        "parameters": [
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure effective date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/PULAs/AIPulas{0}?PulaShapeId={1}&PublishedDate={2}",
                        "description": "This service returns a list of all versions of a PULA for a pula shape which represents an area where a limitation exists.",
                        "id": "PULA Shape PULAs",
                        "parameters": [
                           { "name": "pulaId", "type": "number", "description": "Id of pula shape requested", "value": "" },
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/PULAs/simplePULAs{0}?publishedDate={1}",
                        "description": "This service returns a list of simple PULAs, a custom object containing a unique ID, a ShapeID, and timestamps for created, published and expired, along with isPublished flag (0 for not published, 1 for published).",
                        "id": "Simple PULAs",
                        "parameters": [                           
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/PULAs/FilteredSimplePULAs{0}?date={1}&aiID={2}&productID={3}&eventID={4}",
                        "description": "This service returns a list of Simple PULAs that have an effective date equal to or before date provided (if none, current date) and have limitations that contain the active ingredient, product or are part of the event provided.",
                        "id": "Filtered PULAs",
                        "parameters": [
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" },
                           { "name": "activeIngredientID", "type": "number", "optional": true, "description": "ID of the active ingredient being requested", "value": "" },
                           { "name": "productID", "type": "number", "optional": true, "description": "ID of the product being requested", "value": "" },
                           { "name": "eventID", "type": "number", "optional": true, "description": "ID of the event being requested", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/PULAs/POI/{1}{0}?publishedDate={2}",
                        "description": "This service returns the most current version of a PULA (not including expired) for a pula shape which represents an area where a limitation exists.",
                        "id": "PULA Shape PULA",
                        "parameters": [
                           { "name": "shapeId", "type": "number", "description": "ID of the PULA shape being requested", "value": "" },
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region ai_classes  (3)
        {
            "name": "AI Class",
            "description": "The Active Ingredient Class (AI Class) resource represents a class that can be associated with an active ingredient.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/AIClasses{0}",
                        "description": "This service returns a list of all ai classes.",
                        "id": "All AI Classes",
                        "parameters": [],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/AIClasses/{1}{0}",
                        "description": "This service returns an ai class.",
                        "id": "An AI Class",
                        "parameters": [
                            { "name": "aiClassID", "type": "number", "description": "Unique primary id of ai class requested", "value": "" },
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/AIClasses{0}?status={1}&date={2}",
                        "description": "This service returns a list of ai classes for a given status. Status can be 'Published', 'Reviewed', or 'Created'.",
                        "id": "Versioned AI Classes",
                        "parameters": [
                           { "name": "status", "type": "string", "description": "status interested in.", "value": "" },
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure expired time stamp is earlier than. If not provided, defaults to current date.", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/AIClasses{0}?publishedDate={1}",
                        "description": "This service returns a list of ai classes that are active.",
                        "id": "Published AI Classes",
                        "parameters": [
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/AIClasses{0}?aiClassID={1}&publishedDate={2}",
                        "description": "This service returns the published version of an ai class.",
                        "id": "Published Versions of an AI Class",
                        "parameters": [
                           { "name": "aiClassID", "type": "number", "description": "ai_class_id (secondary primary id) of ai class requested", "value": "" },
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/ActiveIngredients/{1}/AIClass{0}?publisedDate={2}",
                        "description": "This service returns a list of the ai classes for an active ingredient.",
                        "id": "Active Ingredient AI Classes",
                        "parameters": [
                           { "name": "activeIngredientID", "type": "number", "description": "active_ingredient_id (secondary primary id) of active ingredient requested", "value": "" },
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    }
               ]
           }]
        },
        //#endregion
        //#region application_methods  (4)
        {
            "name": "Application Method",
            "description": "The application method resource represents an application method that can be applied to a PULA Limitation.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/ApplicationMethods{0}",
                        "description": "This service returns a list of application methods.",
                        "id": "All Application Methods",
                        "parameters": [],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/ApplicationMethods/{1}{0}",
                        "description": "This service returns an application method by it's ID.",
                        "id": "An Application Method",
                        "parameters": [
                           { "name": "applicationMethodId", "type": "number", "description": "Id of application method requested", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/ApplicationMethods{0}?status={1}&date={2}",
                        "description": "This service returns a list of application methods for a given status. Status can be 'Published', 'Reviewed', or 'Created'.",
                        "id": "Versioned Application Methods",
                        "parameters": [
                           { "name": "status", "type": "string", "description": "status interested in.", "value": "" },
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure expired time stamp is earlier than. If not provided, defaults to current date.", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/ApplicationMethods{0}?publishedDate={1}",
                        "description": "This service returns a list of application methods that are active.",
                        "id": "Published Application Methods",
                        "parameters": [
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/ApplicationMethods{0}?applicationMethodID={1}&publishedDate={2}",
                        "description": "This service returns a list of the published versions of an application method.",
                        "id": "Published Versions of an Application Method",
                        "parameters": [
                           { "name": "applicationMethodId", "type": "number", "description": "application_method_id (secondary primary id) of application method requested", "value": "" },
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/PULALimitations/ApplicationMethod{0}?PulaLimitationId={1}&PublishedDate={2}",
                        "description": "This service returns an application method that is associated with a PULA Limitation.",
                        "id": "PULA Application Method",
                        "parameters": [
                           { "name": "pulaLimitationsID", "type": "number", "description": "Id of PULA Limitation requested", "value": "" },
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region crop_use  (5)
        {
            "name": "Crop Use",
            "description": "The crop use resource represents a crop use that can be applied to a PULA Limitation.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/CropUses{0}",
                        "description": "This service returns a list of crop uses.",
                        "id": "All Crop Uses",
                        "parameters": [],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/CropUses/{1}{0}",
                        "description": "This service returns a crop use by it's ID.",
                        "id": "A Crop Use",
                        "parameters": [
                           { "name": "cropUseId", "type": "number", "description": "Id of the crop use requested", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/CropUses{0}?status={1}&date={2}",
                        "description": "This service returns a list of crop uses for a given status. Status can be 'Published', 'Reviewed', or 'Created'.",
                        "id": "Versioned Crop Uses",
                        "parameters": [
                           { "name": "status", "type": "string", "description": "status interested in.", "value": "" },
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure expired time stamp is earlier than. If not provided, defaults to current date.", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/CropUses{0}?publishedDate={1}",
                        "description": "This service returns a list of crop uses that are active.",
                        "id": "Published Crop Uses",
                        "parameters": [
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/CropUses{0}?CropUseID={1}&publishedDate={2}",
                        "description": "This service returns a list of the published versions of a crop use.",
                        "id": "Published Versions of a Crop Uses",
                        "parameters": [
                           { "name": "cropUsesID", "type": "number", "description": "crop_use_id (secondary primary key) of crop use requested", "value": "" },
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/PULALimitations/CropUse{0}?PulaLimitationId={1}&PublishedDate={2}",
                        "description": "This service returns a crop use that is associated with a PULA Limitation.",
                        "id": "PULA Crop Use",
                        "parameters": [
                           { "name": "pulaLimitationsID", "type": "number", "description": "Id of PULA Limitation requested", "value": "" },
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region division  (6)
        {
            "name": "Division",
            "description": "The division resource represents a division for an organization.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/divisions{0}",
                        "description": "This service returns a list of divisions.",
                        "id": "All Divisions",
                        "parameters": [],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/divisions/{1}{0}",
                        "description": "This service returns a division by it's ID.",
                        "id": "A Division",
                        "parameters": [
                           { "name": "divisionId", "type": "number", "description": "Id of division requested", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region event (7)
        {
            "name": "Event",
            "description": "The events resource represents an event that a PULA Limitation would be listed for.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/events{0}",
                        "description": "This service returns a list of events.",
                        "id": "All Events",
                        "parameters": [],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/events/{1}{0}",
                        "description": "This service returns an event by it's ID.",
                        "id": "An Event",
                        "parameters": [
                           { "name": "eventId", "type": "number", "description": "Id of event requested", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region formulation (8)
        {
            "name": "Formulation",
            "description": "The formulations resource represents a formulation that can be applied to a PULA Limitation.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/Formulations{0}",
                        "description": "This service returns a list of formulations.",
                        "id": "All Formulations",
                        "parameters": [],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/Formulations/{1}{0}",
                        "description": "This service returns a formulation by it's ID.",
                        "id": "A Formulation",
                        "parameters": [
                           { "name": "formulationId", "type": "number", "description": "Id of the formulation requested", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/Formulations{0}?status={1}&date={2}",
                        "description": "This service returns a list of formulations for a given status. Status can be 'Published', 'Reviewed', or 'Created'.",
                        "id": "Versioned Formulations",
                        "parameters": [
                           { "name": "status", "type": "string", "description": "status interested in.", "value": "" },
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure expired time stamp is earlier than. If not provided, defaults to current date.", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/Formulations{0}?publishedDate={1}",
                        "description": "This service returns a list of formulations that are active.",
                        "id": "Published Formulations",
                        "parameters": [
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/Formulations{0}?FormulationID={1}&publishedDate={2}",
                        "description": "This service returns a list of the published versions of a formulation.",
                        "id": "Published Versions of a Formulation",
                        "parameters": [
                           { "name": "formulationID", "type": "number", "description": "Id of formulation requested", "value": "" },
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/PULALimitations/Formulation{0}?PulaLimitationId={1}&PublishedDate={2}",
                        "description": "This service returns a formulation that is associated with a PULA Limitation.",
                        "id": "PULA Formulation",
                        "parameters": [
                           { "name": "pulaLimitationsID", "type": "number", "description": "Id of PULA Limitation requested", "value": "" },
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region limitation (9)
        {
            "name": "Limitation",
            "description": "The limitations resource represents the limitation applied to a PULA.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/Limitations{0}",
                        "description": "This service returns a list of limitations.",
                        "id": "All Limitations",
                        "parameters": [],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/Limitations/{1}{0}",
                        "description": "This service returns a limitation by it's ID.",
                        "id": "A Limitation",
                        "parameters": [
                           { "name": "limitationId", "type": "string", "description": "Id of limitation requested", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/Limitations{0}?status={1}&date={2}",
                        "description": "This service returns a list of limitations for a given status. Status can be 'Published', 'Reviewed', or 'Created'.",
                        "id": "Versioned Limitations",
                        "parameters": [
                           { "name": "status", "type": "string", "description": "status interested in.", "value": "" },
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure expired time stamp is earlier than. If not provided, defaults to current date.", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/Limitations{0}?publishedDate={1}",
                        "description": "This service returns a list of limitations that are active.",
                        "id": "Published Limitations",
                        "parameters": [
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/Limitations/{1}{0}?publishedDate={2}",
                        "description": "This service returns a list of the published versions of a limitation.",
                        "id": "Published Versions of a Limitation",
                        "parameters": [
                           { "name": "limitationID", "type": "number", "description": "limitation_id (secondary primary key) of limitation requested", "value": "" },
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/PULALimitations/Limitation{0}?PulaLimitationId={1}&PublishedDate={2}",
                        "description": "This service returns a limitation that is associated with a PULA Limitation.",
                        "id": "PULA Limitation",
                        "parameters": [
                           { "name": "pulaLimitationsID", "type": "number", "description": "Id of PULA Limitation requested", "value": "" },
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region organization (10)
        {
            "name": "Organization",
            "description": "The organization resource represents an organization that a user belongs to.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/Organizations{0}",
                        "description": "This service returns a list of organizations.",
                        "id": "All Organizations",
                        "parameters": [],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/Organizations/{1}{0}",
                        "description": "This service returns an organization by it's ID.",
                        "id": "An Organization",
                        "parameters": [
                           { "name": "eventStatusId", "type": "number", "description": "Id of event status requested", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region product (11)
        {
            "name": "Product",
            "description": "The product resource represents a product that would be on a PULA Limitation.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/Products{0}",
                        "description": "This service returns a list of Products.",
                        "id": "All Products",
                        "parameters": [],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/Products/{1}{0}",
                        "description": "This service returns a product.",
                        "id": "A Product",
                        "parameters": [
                            { "name": "productID", "type": "number", "description": "Unique primary Id of product requested", "value": "" },
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },                    
                    {
                        "uri": "/Products{0}?publishedDate={1}",
                        "description": "This service returns a list of products that are active.",
                        "id": "Published Products",
                        "parameters": [
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/Products{0}?ProductID={1}&publishedDate={2}",
                        "description": "This service returns a list of the published versions of a product.",
                        "id": "Published Versions of a Product",
                        "parameters": [
                           { "name": "ProductID", "type": "number", "description": "product_id (secondary primary key) of product requested", "value": "" },
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/Products{0}?PublishedDate={1}&term={2}",
                        "description": "This service returns a list of the published versions of a product that starts with the term passed in.",
                        "id": "Products By Name",
                        "parameters": [                           
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" },
                           { "name": "productName", "type": "number", "description": "At least three characters of a product name to search for.", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/ActiveIngredients/{1}/Product{0}?publishedDate={2}",
                        "description": "This service returns a list of products that have the given active ingredient.",
                        "id": "PULA Products",
                        "parameters": [
                           { "name": "activeIngredientID", "type": "number", "description": "active_ingredient_id of the active ingredient requested", "value": "" },
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                ]
            }]
        },
        //#endregion
        //#region pula_limitation (12)
        {
            "name": "PULA Limitation",
            "description": "The PULA Litation resource represents a PULA Limitation, complete with crop use, limitation, product or active ingredient, application method and formulation.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/PULALimitations{0}",
                        "description": "This service returns a list of PULA Limitations.",
                        "id": "All PULA Limitations",
                        "parameters": [],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/PULALimitations/{1}{0}",
                        "description": "This service returns a PULA Limitation by it's ID.",
                        "id": "A PULA Limitation",
                        "parameters": [
                           { "name": "pulaLimitId", "type": "number", "description": "Id of PULA Limitation requested", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/PULALimitations{0}?publishedDate={1}",
                        "description": "This service returns a list of PULA Limitations that are active.",
                        "id": "Published PULA Limitations",
                        "parameters": [
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/PULALimitations{0}?pulaLimitationsID={1}&publishedDate={2}",
                        "description": "This service returns a list of the published versions of a PULA Limitation.",
                        "id": "Published Versions of a PULA Limitation",
                        "parameters": [
                           { "name": "pulaLimitationId", "type": "number", "description": "Id of PULA limitation requested", "value": "" },
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/PULAs/{1}/PULALimitations{0}?publishedDate={1}",
                        "description": "This service returns a list of the PULA Limitations for a PULA.",
                        "id": "PULA Published PULA Limitations",
                        "parameters": [
                           { "name": "pulaID", "type": "number", "description": "pula_id of PULA limitation requested", "value": "" },
                           { "name": "date", "type": "date", "optional": true, "description": "If provided, date will be used to ensure published date is on or before than and expired time stamp is after. If not provided, defaults to current date", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                ]
            }]
        },
        //#endregion
        //#region role (13)
        {
            "name": "Role",
            "description": "The role resource represents role that a user has.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/Roles{0}",
                        "description": "This service returns a list of roles.",
                        "id": "All Roles",
                        "parameters": [],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/Roles/{1}{0}",
                        "description": "This service returns a role by it's ID.",
                        "id": "A Role",
                        "parameters": [
                           { "name": "roleId", "type": "number", "description": "Id of role requested", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region species (14)
        {
            "name": "Species",
            "description": "The species resource represents the species that is being protected under the PULA.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/SimpleSpecies{0}",
                        "description": "This service returns a list of all species that are stored at ecos.fws.gov through Tess.",
                        "id": "All Species",
                        "parameters": [],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/Species/{1}{0}",
                        "description": "This service returns a species by ID that is stored at ecos.fws.gov through Tess.",
                        "id": "A Species",
                        "parameters": [
                           { "name": "speciesID", "type": "number", "description": "entity_id of the species requested", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/ActiveIngredientPULA/{1}/Species{0}",
                        "description": "This service returns a list of species that are under the protection of the PULA.",
                        "id": "PULA Species",
                        "parameters": [
                           { "name": "pulaID", "type": "number", "description": "pula_id of PULA requested", "value": "" }
                        ],
                        "availableMedia": ".json",
                        "selectedMedia": ".json"
                    }
                ]
            }]
        }
        //#endregion
        //#region user (15) //needs auth. don't include
        //{
        //    "name": "User",
        //    "description": "The user resource represents a user of the internal system.",
        //    "methods": [{
        //        "type": "GET",
        //        "uriList": [
        //            {
        //                "uri": "/Users{0}",
        //                "description": "This service returns a list of users.",
        //                "id": "All Users",
        //                "parameters": [],
        //                "availableMedia": ".json",
        //                "selectedMedia": ".json"
        //            },
        //            {
        //                "uri": "/Users/{1}{0}",
        //                "description": "This service returns a user by it's ID.",
        //                "id": "A User",
        //                "parameters": [
        //                   { "name": "userId", "type": "number", "description": "Id of user requested", "value": "" }
        //                ],
        //                "availableMedia": ".json",
        //                "selectedMedia": ".json"
        //            },
        //            {
        //                "uri": "/Users{0}?username={1}",
        //                "description": "This service returns a user by it's name.",
        //                "id": "A User By Name",
        //                "parameters": [
        //                   { "name": "userName", "type": "string", "description": "Name of user requested", "value": "" }
        //                ],
        //                "availableMedia": ".json",
        //                "selectedMedia": ".json"
        //            }
        //        ]
        //    }]
        //},
        //#endregion
        //#region version (16) //don't show.. for internal use only
        //{
        //    "name": "Housing Type",
        //    "description": "The housing type resource represents housing type that sensors can have.",
        //    "methods": [{
        //        "type": "GET",
        //        "uriList": [
        //            {
        //                "uri": "/housingtypes{0}",
        //                "description": "This service returns a list of housing types.",
        //                "id": "All Housing Types",
        //                "parameters": [],
        //                "availableMedia": ".json",
        //                "selectedMedia": ".json"
        //            },
        //            {
        //                "uri": "/housingtypes/{1}{0}",
        //                "description": "This service returns an housing type by it's ID.",
        //                "id": "An Housing Type",
        //                "parameters": [
        //                   { "name": "housingTypeId", "type": "number", "description": "Id of housing type requested", "value": "" }
        //                ],
        //                "availableMedia": ".json",
        //                "selectedMedia": ".json"
        //            },
        //            {
        //                "uri": "/instruments/{1}/instrumenthousingtype{0}",
        //                "description": "This service returns an housing type of a sensor.",
        //                "id": "Sensor Housing Type",
        //                "parameters": [
        //                   { "name": "sensorId", "type": "number", "description": "Id of the sensor", "value": "" }
        //                ],
        //                "availableMedia": ".json",
        //                "selectedMedia": ".json"
        //            }
        //        ]
        //    }]
        //},
        //#endregion
        
    ]
configuration.basemaps =
{
    national: {
        name: "National Geographic",
        type: "agsBase",
        layer: "NationalGeographic",
        visible: true
    },
    streets: {
        name: "Streets",
        type: "agsBase",
        layer: "Streets",
        visible: false
    }
}// end baselayer
configuration.overlayedLayers = {
  
}//end overlayedLayers
configuration.regions = [
    { "RegionID": "AL", "Name": "Alabama", "Bounds": [[30.189622, -88.47203], [35.00888, -84.893486]] },
    { "RegionID": "AK", "Name": "Alaska", "Bounds": [[51, -179], [72, -140]] },
    { "RegionID": "AS", "Name": "American Samoa", "Bounds": [[-14.375555, -170.82611], [-14.166389, -169.438323]] },
    { "RegionID": "AZ", "Name": "Arizona", "Bounds": [[31.329174, -114.815414], [37.004585, -109.044883]] },
    { "RegionID": "AR", "Name": "Arkansas", "Bounds": [[33.004528, -94.618156], [36.499656, -89.644409]] },
    { "RegionID": "CA", "Name": "California", "Bounds": [[32.530426, -124.411186], [42.009826, -114.129486]] },
    { "RegionID": "CO", "Name": "Colorado", "Bounds": [[36.992225, -109.060806], [41.005611, -102.041984]] },
    { "RegionID": "CT", "Name": "Connecticut", "Bounds": [[40.982486, -73.729721], [42.049732, -71.788238]] },
    { "RegionID": "DE", "Name": "Delaware", "Bounds": [[38.449325, -75.788055], [39.840576, -75.042396]] },
    { "RegionID": "DC", "Name": "District of Columbia", "Bounds": [[38.801475, -77.120506], [38.995063, -76.909698]] },
    { "RegionID": "FL", "Name": "Florida", "Bounds": [[24.518321, -87.637229], [31.002105, -80.029022]] },
    { "RegionID": "GA", "Name": "Georgia", "Bounds": [[30.35713, -85.605514], [35.002037, -80.841957]] },
    { "RegionID": "GU", "Name": "Guam", "Bounds": [[13.234996, 144.634155], [13.65361, 144.953308]] },
    { "RegionID": "HA", "Name": "Hawaii", "Bounds": [[18.915493, -160.236068], [22.234394, -154.798583]] },
    { "RegionID": "ID", "Name": "Idaho", "Bounds": [[41.989837, -117.240196], [49.001522, -111.043617]] },
    { "RegionID": "IL", "Name": "Illinois", "Bounds": [[36.971115, -91.512626], [42.509479, -87.018081]] },
    { "RegionID": "IN", "Name": "Indiana", "Bounds": [[37.773048, -88.089744], [41.762321, -84.787673]] },
    { "RegionID": "IA", "Name": "Iowa", "Bounds": [[40.374542, -96.635665], [43.504646, -90.139312]] },
    { "RegionID": "KS", "Name": "Kansas", "Bounds": [[36.992221, -102.048553], [40.004512, -94.592735]] },
    { "RegionID": "KY", "Name": "Kentucky", "Bounds": [[36.496719, -89.573677], [39.147232, -81.964202]] },
    { "RegionID": "LA", "Name": "Louisiana", "Bounds": [[28.918104, -94.045776], [33.020599, -88.814056]] },
    { "RegionID": "ME", "Name": "Maine", "Bounds": [[43.064773, -71.082], [47.461883, -66.954002]] },
    { "RegionID": "MD", "Name": "Maryland", "Bounds": [[37.911422, -79.487152], [39.724014, -75.045898]] },
    { "RegionID": "MA", "Name": "Massachusetts", "Bounds": [[41.237003, -73.508407], [42.886661, -69.925399]] },
    { "RegionID": "MI", "Name": "Michigan", "Bounds": [[41.6958, -90.418708], [48.304248, -82.122901]] },
    { "RegionID": "MN", "Name": "Minnesota", "Bounds": [[43.502101, -97.238975], [49.38562, -89.487754]] },
    { "RegionID": "MS", "Name": "Mississippi", "Bounds": [[30.174402, -91.654251], [34.998321, -88.097961]] },
    { "RegionID": "MO", "Name": "Missouri", "Bounds": [[35.99509, -95.774414], [40.614028, -89.100593]] },
    { "RegionID": "MT", "Name": "Montana", "Bounds": [[44.357688, -116.050735], [49.001808, -104.03971]] },
    { "RegionID": "NE", "Name": "Nebraska", "Bounds": [[39.999885, -104.052841], [43.002796, -95.307998]] },
    { "RegionID": "NV", "Name": "Nevada", "Bounds": [[35.002079, -120.005348], [42.000312, -114.039344]] },
    { "RegionID": "NH", "Name": "New Hampshire", "Bounds": [[42.697776, -72.556434], [45.308731, -70.7135]] },
    { "RegionID": "NJ", "Name": "New Jersey", "Bounds": [[38.92564, -75.567596], [41.357639, -73.89363]] },
    { "RegionID": "NM", "Name": "New Mexico", "Bounds": [[31.331899, -109.050102], [36.999423, -103.000656]] },
    { "RegionID": "NY", "Name": "New York", "Bounds": [[40.499076, -79.763328], [45.017364, -71.85588]] },
    { "RegionID": "NC", "Name": "North Carolina", "Bounds": [[33.844467, -84.320968], [36.589008, -75.459503]] },
    { "RegionID": "ND", "Name": "North Dakota", "Bounds": [[45.93505, -104.049591], [49.001316, -96.555152]] },
    { "RegionID": "MP", "Name": "Northern Mariana Islands", "Bounds": [[14.105276, 144.89859], [20.556385, 145.870788]] },
    { "RegionID": "OH", "Name": "Ohio", "Bounds": [[38.4025, -84.819931], [42.324424, -80.51387]] },
    { "RegionID": "OK", "Name": "Oklahoma", "Bounds": [[33.615253, -103.000869], [37.00093, -94.430702]] },
    { "RegionID": "OR", "Name": "Oregon", "Bounds": [[41.992462, -124.566024], [46.285762, -116.461639]] },
    { "RegionID": "PA", "Name": "Pennsylvania", "Bounds": [[39.719429, -80.519561], [42.510452, -74.690032]] },
    { "RegionID": "PR", "Name": "Puerto Rico", "Bounds": [[17.922222, -67.938339], [18.519443, -65.241958]] },
    { "RegionID": "RI", "Name": "Rhode Island", "Bounds": [[41.144325, -71.888366], [42.0191, -71.120613]] },
    { "RegionID": "SC", "Name": "South Carolina", "Bounds": [[32.049209, -83.354354], [35.21611, -78.55368]] },
    { "RegionID": "SD", "Name": "South Dakota", "Bounds": [[42.481113, -104.057128], [45.944362, -96.436576]] },
    { "RegionID": "TN", "Name": "Tennessee", "Bounds": [[34.983898, -90.310745], [36.679244, -81.647453]] },
    { "RegionID": "TX", "Name": "Texas", "Bounds": [[25.83802, -106.645782], [36.50344, -93.508743]] },
    { "RegionID": "UT", "Name": "Utah", "Bounds": [[36.99863, -114.054069], [42.004196, -109.040946]] },
    { "RegionID": "VT", "Name": "Vermont", "Bounds": [[42.727611, -73.443428], [45.016334, -71.467712]] },
    { "RegionID": "VA", "Name": "Virginia", "Bounds": [[36.539142, -83.674819], [39.466579, -75.240722]] },
    { "RegionID": "VI", "Name": "Virgin Islands", "Bounds": [[17.676666, -65.026947], [18.377777, -64.560287]] },
    { "RegionID": "WA", "Name": "Washington", "Bounds": [[45.553112, -124.75579], [49.00362, -116.912506]] },
    { "RegionID": "WV", "Name": "West Virginia", "Bounds": [[37.202762, -82.640777], [40.638553, -77.719734]] },
    { "RegionID": "WI", "Name": "Wisconsin", "Bounds": [[42.494701, -92.885391], [47.302532, -86.249565]] },
    { "RegionID": "WY", "Name": "Wyoming", "Bounds": [[40.996269, -111.055137], [45.004203, -104.051986]] },
    { "RegionID": "CRB", "Name": "Connecticut River Basin", "Bounds": [[43, -70.5], [44, -74.5]] },
    { "RegionID": "DRB", "Name": "Delaware River Basin", "Bounds": [[38.5, -73], [42.5, -77]] },
    { "RegionID": "RRB", "Name": "Rainy River Basin", "Bounds": [[47.3, -89.5], [50, -96]] }

]//end regions