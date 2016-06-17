﻿var configuration = {}
configuration.baseurls =
{
    'services': 'https://stn.wim.usgs.gov/STNServices',
    'application': 'https://stn.wim.usgs.gov/STNWeb'    
}

configuration.resources =
    [
        //#region agency (1)
        {            
            "name": "Agency",
            "description": "The agency resource represents an agency that a member or source is an employee for.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/agencies{0}",
                        "description": "This service returns a list of agencies.",
                        "id": "All Agencies",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"                        
                    },
                    {
                        "uri": "/agencies/{1}{0}",
                        "description": "This service returns an agency.",
                        "id": "An Agency",
                        "parameters": [
                           { "name": "agencyId", "type": "number", "description": "Id of agency requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                         "uri": "/members/{1}/agencies{0}",
                         "description": "This service returns a member's agency.",
                         "id": "Member Agency",
                         "parameters": [
                            { "name": "memberId", "type": "number", "description": "Id of member requested", "value": "" }
                         ],
                         "availableMedia": [".xml", ".json"],
                         "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sources/{1}/agencies{0}",
                        "description": "This service returns a source's agency.",
                        "id": "Source Agency",
                        "parameters": [
                           { "name": "sourceId", "type": "number", "description": "Id of member requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }
            ]
        },
        //#endregion 
        //#region approval (2)
        {
            "name": "Approval",
            "description": "The approval resource represents an approval that is applied to a hwm or data file once reviewed and deemed complete.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/approvals{0}",
                        "description": "This service returns a list of approvals.",
                        "id": "All Approvals",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/approvals/{1}{0}",
                        "description": "This service returns an approval by it's ID.",
                        "id": "An Approval",
                        "parameters": [
                           { "name": "approvalId", "type": "number", "description": "Id of approval requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/hwms/{1}/approval{0}",
                        "description": "This service returns a hwm approval by a hwm ID.",
                        "id": "HWM Approval",
                        "parameters": [
                           { "name": "hwmId", "type": "number", "description": "Id of hwm", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/datafiles/{1}/approval{0}",
                        "description": "This service returns a data file approval by a data file ID.",
                        "id": "Data File Approval",
                        "parameters": [
                           { "name": "datafileId", "type": "number", "description": "Id of data file", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region contact  (3)
        {
            "name": "Contact",
            "description": "The contact resource represents an contact that can be added to a report.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/contacts{0}",
                        "description": "This service returns a list of contacts. Requires authentication.",
                        "id": "All Contacts",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/contacts/{1}{0}",
                        "description": "This service returns a contact by it's ID. Requires authentication.",
                        "id": "A Contact",
                        "parameters": [
                           { "name": "contactId", "type": "number", "description": "Id of contact requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/contacts{0}?reportmetric={1}&contacttype{2}",
                        "description": "This service returns a contact for a report and by a contact type. Requires authentication.",
                        "id": "Report Contact By Contact Type",
                        "parameters": [
                           { "name": "reportId", "type": "number", "description": "Id of the report", "value": "" },
                           { "name": "contactTypeId", "type": "number", "description": "Id of the contact type", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/contacts{0}?reportmetric={1}",
                        "description": "This service returns a list of contacts for a report. Requires authentication.",
                        "id": "Report Contacts",
                        "parameters": [
                           { "name": "reportId", "type": "number", "description": "Id of report", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
               ]
           }]
        },
        //#endregion
        //#region contact type  (4)
        {
            "name": "Contact Type",
            "description": "The contact type resource represents a contact type that can be added to a contact.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/contacttypes{0}",
                        "description": "This service returns a list of contact types.",
                        "id": "All Contacts",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/contacttypes/{1}{0}",
                        "description": "This service returns a contact type by it's ID.",
                        "id": "A Contact Type",
                        "parameters": [
                           { "name": "contactTypeId", "type": "number", "description": "Id of contact type requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/contacts/{1}/contacttypes{0}",
                        "description": "This service returns a contact type for a contact.",
                        "id": "Contact's Contact Type",
                        "parameters": [
                           { "name": "contactId", "type": "number", "description": "Id of the contact", "value": "" }                           
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region county  (5)
        {
            "name": "Counties",
            "description": "The counties resource represents U.S. counties.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/counties{0}",
                        "description": "This service returns a list of counties.",
                        "id": "All Counties",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/counties/{1}{0}",
                        "description": "This service returns a county by it's ID.",
                        "id": "A County",
                        "parameters": [
                           { "name": "countyId", "type": "number", "description": "Id of county requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/states/{1}/counties{0}",
                        "description": "This service returns a list of counties for a state by state ID.",
                        "id": "State Counties by Id",
                        "parameters": [
                           { "name": "stateId", "type": "number", "description": "Id of the state", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/states/counties{0}?StateAbbrev={1}",
                        "description": "This service returns a list of counties for a state by state abbreviation.",
                        "id": "State Counties by Abbrev",
                        "parameters": [
                           { "name": "stateAbbrev", "type": "string", "description": "Abbreviation of the state", "value": "FL" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sites/countiesbystate{0}?StateAbbrev={1}",
                        "description": "This service returns a list of counties in a state where sites exists.",
                        "id": "Site Counties",
                        "parameters": [
                           { "name": "stateAbbrev", "type": "string", "description": "Abbreviation of the state", "value": "FL" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region data file  (6)
        {
            "name": "Data Files",
            "description": "The data file resource represents data files associated with sensors.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/datafiles{0}",
                        "description": "This service returns a list of data files. Without authentication, only approved data files are returned.",
                        "id": "All Data Files",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/datafiles/{1}{0}",
                        "description": "This service returns a data file by it's ID. Without authentication, only approved data files are returned.",
                        "id": "A Data File",
                        "parameters": [
                           { "name": "datafileId", "type": "number", "description": "Id of data file requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/files/{1}/datafile{0}",
                        "description": "This service returns a data file of a file that is of type data. Without authentication, only approved data files are returned.",
                        "id": "File Data File",
                        "parameters": [
                           { "name": "fileId", "type": "number", "description": "Id of the file", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/approvals/{1}/datafiles{0}",
                        "description": "This service returns a list of data files for an approval. Without authentication, only approved data files are returned.",
                        "id": "Approval Data Files",
                        "parameters": [
                           { "name": "approvalId", "type": "number", "description": "Id of the approval", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/datafiles{0}?IsApproved={1}&event={2}&processor={3}&state={4}",
                        "description": "This service returns a list of data files that meet the passed-in parameters. Without authentication, only approved data files are returned.",
                        "id": "Filtered Data Files",
                        "parameters": [
                           { "name": "appoved", "type": "boolean", "description": "True for data files that are approved, false for those that are not.", "value": "" },
                           { "name": "eventId", "type": "number", "description": "Id for an event.", "optional": true, "value": "" },
                           { "name": "processorId", "type": "number", "description": "Id for a member that processed the data file.", "optional": true, "value": "" },
                           { "name": "stateAbbrev", "type": "string", "description": "State abbreviation.", "optional": true, "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/instruments/{1}/datafiles{0}",
                        "description": "This service returns a list of data files for a sensor. Without authentication, only approved data files are returned.",
                        "id": "Sensor Data Files",
                        "parameters": [
                           { "name": "instrumentId", "type": "number", "description": "Id of the sensor", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/peaksummaries/{1}/datafiles{0}",
                        "description": "This service returns a list of data files for a peak summary. Without authentication, only approved data files are returned.",
                        "id": "Peak Summary Data files",
                        "parameters": [
                           { "name": "peakSummaryId", "type": "number", "description": "Id of the peak summary", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"                        
                    }
                ]
            }]
        },
        //#endregion
        //#region deployment priority (7)
        {
            "name": "Deployment Priority",
            "description": "The deployment priority resource represents deployment priorities that sites can have.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/deploymentpriorities{0}",
                        "description": "This service returns a list of deployment priorities.",
                        "id": "All Deployment Priorities",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/deploymentpriorities/{1}{0}",
                        "description": "This service returns a deployment priority by it's ID.",
                        "id": "A Deployment Priority",
                        "parameters": [
                           { "name": "deploymentPriorityId", "type": "number", "description": "Id of deployment priority requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sites/{1}/deploymentpriorities{0}",
                        "description": "This service returns a deployment priority of a site.",
                        "id": "Site Deployment Priority",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region deployment type (8)
        {
            "name": "Deployment Type",
            "description": "The deployment type resource represents deployment types that sensors can have.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/deploymenttypes{0}",
                        "description": "This service returns a list of deployment types.",
                        "id": "All Deployment Types",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/deploymenttypes/{1}{0}",
                        "description": "This service returns a deployment type by it's ID.",
                        "id": "A Deployment Type",
                        "parameters": [
                           { "name": "deploymentTypeId", "type": "number", "description": "Id of deployment type requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/instruments/{1}/deploymenttype{0}",
                        "description": "This service returns a deployment type of a sensor.",
                        "id": "Sensor Deployment Type",
                        "parameters": [
                           { "name": "instrumentId", "type": "number", "description": "Id of the sensor", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sensortypes/{1}/deploymenttypes{0}",
                        "description": "This service returns a list of deployment types of a sensor type.",
                        "id": "Sensor Type Deployment Types",
                        "parameters": [
                           { "name": "sensorTypeId", "type": "number", "description": "Id of the sensor type", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region event (9)
        {
            "name": "Event",
            "description": "The event resource represents the event that sensor and hwms are created during.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/events{0}",
                        "description": "This service returns a list of events.",
                        "id": "All Events",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/events/{1}{0}",
                        "description": "This service returns an event by it's ID.",
                        "id": "An Event",
                        "parameters": [
                           { "name": "eventId", "type": "number", "description": "Id of event requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/events{0}?Site={1}",
                        "description": "This service returns a list of events that a site has sensor and/or hwms created at.",
                        "id": "Site Events",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/eventtypes/{1}/events{0}",
                        "description": "This service returns a list of events that have this event type.",
                        "id": "Event Type Events",
                        "parameters": [
                           { "name": "eventTypeId", "type": "number", "description": "Id of the event type", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/eventstatus/{1}/events{0}",
                        "description": "This service returns a list of events that have this event status.",
                        "id": "Event Status Events",
                        "parameters": [
                           { "name": "eventStatusId", "type": "number", "description": "Id of the event status", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/hwms/{1}/event{0}",
                        "description": "This service returns the event that this hwm was created at.",
                        "id": "HWM Event",
                        "parameters": [
                           { "name": "hwmId", "type": "number", "description": "Id of the hwm", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/instruments/{1}/event{0}",
                        "description": "This service returns the event that this sensor was deployed at.",
                        "id": "Sensor Event",
                        "parameters": [
                           { "name": "sensorId", "type": "number", "description": "Id of the sensor", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/events/FilteredEvents{0}?Date={1}&Type={2}&State={3}",
                        "description": "This service returns a list of events that meet the passed-in parameters.",
                        "id": "Filtered Events",
                        "parameters": [
                           { "name": "date", "type": "date", "description": "Date to start query, events that started on or after this date", "optional": true, "value": "08/01/2012" },
                           { "name": "eventTypeId", "type": "number", "description": "Id of event type", "optional": true, "value": "" },
                           { "name": "stateAbbrev", "type": "string", "description": "State abbreviation", "optional": true, "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region event status (10)
        {
            "name": "Event Status",
            "description": "The event status resource represents event statuses that events can have.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/eventstatus{0}",
                        "description": "This service returns a list of event statuses.",
                        "id": "All Event Statuses",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/eventstatus/{1}{0}",
                        "description": "This service returns an event status by it's ID.",
                        "id": "An Event Status",
                        "parameters": [
                           { "name": "eventStatusId", "type": "number", "description": "Id of event status requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/events/{1}/status{0}",
                        "description": "This service returns an event status of an event.",
                        "id": "Event Event Status",
                        "parameters": [
                           { "name": "eventId", "type": "number", "description": "Id of the event", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region event type (11)
        {
            "name": "Event Type",
            "description": "The event type resource represents event types that events can have.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/eventtypes{0}",
                        "description": "This service returns a list of event types.",
                        "id": "All Event Types",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/eventtypes/{1}{0}",
                        "description": "This service returns an event type by it's ID.",
                        "id": "An Event Type",
                        "parameters": [
                           { "name": "eventTypeId", "type": "number", "description": "Id of event type requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/events/{1}/Type{0}",
                        "description": "This service returns an event type of an event.",
                        "id": "Event Event Type",
                        "parameters": [
                           { "name": "eventId", "type": "number", "description": "Id of the event", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region file (12)
        {
            "name": "File",
            "description": "The file resource represents files that can be uploaded at sites, objective points, hwms, and sensors.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/files{0}",
                        "description": "This service returns a list of files.",
                        "id": "All Files",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/files/{1}{0}",
                        "description": "This service returns a file by it's ID.",
                        "id": "A File",
                        "parameters": [
                           { "name": "fileId", "type": "number", "description": "Id of file requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/files/{1}/item",
                        "description": "This service returns a file item.",
                        "id": "File Item",
                        "parameters": [
                           { "name": "fileId", "type": "number", "description": "Id of the file", "value": "" }
                        ],
                        "availableMedia": [],
                        "selectedMedia": ""
                    },
                    {
                        "uri": "/files{0}?FromDate={1}&ToDate={2}",
                        "description": "This service returns a list of files that were uploaded within the given date range.",
                        "id": "Files By Date Range",
                        "parameters": [
                           { "name": "fromDate", "type": "date", "description": "date to start with", "value": "02/28/2016" },
                           { "name": "toDate", "type": "date", "description": "date to end with", "value": "03/01/2016" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/hwms/{1}/files{0}",
                        "description": "This service returns a list of files for a hwm.",
                        "id": "HWM Files",
                        "parameters": [
                           { "name": "hwmId", "type": "number", "description": "Id of the hwm", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/objectivepoints/{1}/files{0}",
                        "description": "This service returns a list of file for an objective point.",
                        "id": "Objective Point Files",
                        "parameters": [
                           { "name": "objectivePointId", "type": "number", "description": "Id of the objective point", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/filetypes/{1}/files{0}",
                        "description": "This service returns a list of file that are of a given file type.",
                        "id": "File Type Files",
                        "parameters": [
                           { "name": "fileTypeId", "type": "number", "description": "Id of the file type", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sites/{1}/files{0}",
                        "description": "This service returns a list of files for a site.",
                        "id": "Site Files",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sources/{1}/files{0}",
                        "description": "This service returns a list of files that were uploaded by a given source.",
                        "id": "Source Files",
                        "parameters": [
                           { "name": "sourceId", "type": "number", "description": "Id of the source", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/datafiles/{1}/files{0}",
                        "description": "This service returns a list of files for a data file.",
                        "id": "Data File Files",
                        "parameters": [
                           { "name": "dataFileId", "type": "number", "description": "Id of the data file", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/instruments/{1}/files{0}",
                        "description": "This service returns a list of files for a sensor.",
                        "id": "Sensor Files",
                        "parameters": [
                           { "name": "instrumentId", "type": "number", "description": "Id of the sensor", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/events/{1}/files{0}",
                        "description": "This service returns a list of files for an event.",
                        "id": "Event Files",
                        "parameters": [
                           { "name": "eventId", "type": "number", "description": "Id of the event", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/events/{1}/eventfileitems",
                        "description": "This service returns a zip file of all files uploaded during an event.",
                        "id": "Event File Items",
                        "parameters": [
                           { "name": "eventId", "type": "number", "description": "Id of the event", "value": "" }
                        ],
                        "availableMedia": [],
                        "selectedMedia": ""
                    },
                    {
                        "uri": "/files{0}?Site={1}&Event={2}",
                        "description": "This service returns a list of files for a site during a given event.",
                        "id": "Site Event Files",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" },
                           { "name": "eventId", "type": "number", "description": "Id of the event", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }//,
                    //{ //do we really need this one.. anyone using it?? -- doesn't work
                    //    "uri": "/files{0}?State={1}",
                    //    "description": "This service returns a list of files for a state.",
                    //    "id": "Files By State",
                    //    "parameters": [
                    //       { "name": "stateAbbrev", "type": "string", "description": "State abbreviation", "value": "" }
                    //    ],
                    //    "availableMedia": [".xml", ".json"],
                    //    "selectedMedia": ".json"
                    //}
                ]
            }]
        },
        //#endregion
        //#region file type (13)
        {
            "name": "File Type",
            "description": "The file type resource represents file types that files can have.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/filetypes{0}",
                        "description": "This service returns a list of file types.",
                        "id": "All File Types",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/filetypes/{1}{0}",
                        "description": "This service returns a file type by it's ID.",
                        "id": "A File Type",
                        "parameters": [
                           { "name": "fileTypeId", "type": "number", "description": "Id of file type requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/files/{1}/type{0}",
                        "description": "This service returns a file type of a file.",
                        "id": "File File Type",
                        "parameters": [
                           { "name": "fileId", "type": "number", "description": "Id of the file", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region horizontal collect methods (14)
        {
            "name": "Horizontal Collect Method",
            "description": "The horizontal collect method resource represents horizontal collect method that sites, objective points, and hwms can have.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/horizontalmethods{0}",
                        "description": "This service returns a list of horizontal collect methods.",
                        "id": "All Horizontal Collect Methods",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/horizontalmethods/{1}{0}",
                        "description": "This service returns an horizontal collect method by it's ID.",
                        "id": "An Horizontal Collect Method",
                        "parameters": [
                           { "name": "hcollectId", "type": "number", "description": "Id of horizontal collect method requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/hwms/{1}/horizontalmethod{0}",
                        "description": "This service returns an horizontal collect method of an hwm.",
                        "id": "HWM Horizontal Collect Method",
                        "parameters": [
                           { "name": "hwmId", "type": "number", "description": "Id of the hwm", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region horizontal datum (15)
        {
            "name": "Horizontal Datum",
            "description": "The horizontal datum resource represents horizontal datum that sites, objective points, and hwms can have.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/horizontaldatums{0}",
                        "description": "This service returns a list of horizontal datum.",
                        "id": "All Horizontal Datums",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/horizontaldatums/{1}{0}",
                        "description": "This service returns an horizontal datum by it's ID.",
                        "id": "An Horizontal Datum",
                        "parameters": [
                           { "name": "hdatumId", "type": "number", "description": "Id of horizontal datum requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sites/{1}/hdatum{0}",
                        "description": "This service returns an horizontal datum of a site.",
                        "id": "Site Horizontal Datum",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region housing type (16)
        {
            "name": "Housing Type",
            "description": "The housing type resource represents housing type that sensors can have.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/housingtypes{0}",
                        "description": "This service returns a list of horizontal datum.",
                        "id": "All Housing Types",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/housingtypes/{1}{0}",
                        "description": "This service returns an housing type by it's ID.",
                        "id": "An Housing Type",
                        "parameters": [
                           { "name": "housingTypeId", "type": "number", "description": "Id of housing type requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/instruments/{1}/instrumenthousingtype{0}",
                        "description": "This service returns an housing type of a sensor.",
                        "id": "Sensor Housing Type",
                        "parameters": [
                           { "name": "sensorId", "type": "number", "description": "Id of the sensor", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region hwm (17)
        {
            "name": "HWM",
            "description": "The hwm resource represents hwms that are found at site locations.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/hwms{0}",
                        "description": "This service returns a list of hwms. If unauthorized, only approved hwms will be returned.",
                        "id": "All HWMs",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/hwms/{1}{0}",
                        "description": "This service returns a hwm by it's ID.",
                        "id": "A HWM",
                        "parameters": [
                           { "name": "hwmId", "type": "number", "description": "Id of hwm requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/events/{1}/hwms{0}",
                        "description": "This service returns a list of hwms found at an event. If unauthorized, only approved hwms will be returned.",
                        "id": "Event HWMs",
                        "parameters": [
                           { "name": "eventId", "type": "number", "description": "Id of the event", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/sites/{1}/EventHWMs{0}?Event={2}",
                        "description": "This service returns a list of hwms found at a site for an event. If unauthorized, only approved hwms will be returned.",
                        "id": "Site Event HWMs",
                        "parameters": [
                            { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" },
                            { "name": "eventId", "type": "number", "description": "Id of the event", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/hwms{0}?IsApproved={1}&Event={2}&Member={3}&State={4}",
                        "description": "This service returns a list of hwms that meet the passed-in parameters. If unauthorized, only approved hwms will be returned.",
                        "id": "Approval HWMs",
                        "parameters": [
                           { "name": "appoved", "type": "boolean", "description": "True for hwms that are approved, false for those that are not", "value": "" },
                           { "name": "eventId", "type": "number", "description": "Id of the event", "optional":true, "value": "" },
                           { "name": "memberId", "type": "number", "description": "Id of the member that either flagged or surveyed", "optional": true, "value": "" },
                           { "name": "stateAbbrev", "type": "string", "description": "State abbreviation", "optional": true, "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/approvals/{1}/hwms{0}",
                        "description": "This service returns a list of hwms for this approval.",
                        "id": "Approved HWMs",
                        "parameters": [
                           { "name": "approvalId", "type": "number", "description": "Id of the approval", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/members/{1}/hwms{0}",
                        "description": "This service returns a list of hwms that were flagged or surveyed by the given member. If unauthorized, only approved hwms will be returned.",
                        "id": "Member HWMs",
                        "parameters": [
                           { "name": "memberId", "type": "number", "description": "Id of the member", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/hwmqualities/{1}/hwms{0}",
                        "description": "This service returns a list of hwms with a given hwm quality. If unauthorized, only approved hwms will be returned.",
                        "id": "HWM Quality HWMs",
                        "parameters": [
                           { "name": "hwmQualId", "type": "number", "description": "Id of the hwm quality", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/hwmtypes/{1}/hwms{0}",
                        "description": "This service returns a list of hwms with a given hwm type. If unauthorized, only approved hwms will be returned.",
                        "id": "HWM Type HWMs",
                        "parameters": [
                           { "name": "hwmTypeId", "type": "number", "description": "Id of the hwm type", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/horizontalmethods/{1}/hwms{0}",
                        "description": "This service returns a list of hwms with a given horizontal method. If unauthorized, only approved hwms will be returned.",
                        "id": "Horizontal Method HWMs",
                        "parameters": [
                           { "name": "horizontalMethodId", "type": "number", "description": "Id of the horizontal method", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/verticalmethods/{1}/hwms{0}",
                        "description": "This service returns a list of hwms with a given vertical method. If unauthorized, only approved hwms will be returned.",
                        "id": "Vertical Method HWMs",
                        "parameters": [
                           { "name": "verticalMethodId", "type": "number", "description": "Id of the vertical method", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/sites/{1}/hwms{0}",
                        "description": "This service returns a list of hwms at a given site. If unauthorized, only approved hwms will be returned.",
                        "id": "Site HWMs",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/VerticalDatums/{1}/hwms{0}",
                        "description": "This service returns a list of hwms with a given vertical datum. If unauthorized, only approved hwms will be returned.",
                        "id": "Vertical Datum HWMs",
                        "parameters": [
                           { "name": "verticalDatumId", "type": "number", "description": "Id of the vertical datum", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/markers/{1}/hwms{0}",
                        "description": "This service returns a list of hwms with a given marker. If unauthorized, only approved hwms will be returned.",
                        "id": "Marker HWMs",
                        "parameters": [
                           { "name": "markerId", "type": "number", "description": "Id of the marker", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/peaksummaries/{1}/hwms{0}",
                        "description": "This service returns a list of hwms with a given peak summary. If unauthorized, only approved hwms will be returned.",
                        "id": "Peak Summary HWMs",
                        "parameters": [
                           { "name": "peakSummaryId", "type": "number", "description": "Id of the peak summary", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/files/{1}/hwm{0}",
                        "description": "This service returns a hwm that a given file was uploaded for. If unauthorized, only approved hwms will be returned.",
                        "id": "File HWM",
                        "parameters": [
                           { "name": "fileId", "type": "number", "description": "Id of the file", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/HWMs/FilteredHWMs{0}?Event={1}&EventType={2}&EventStatus={3}"+
                            "&States={4}&County={5}&HWMType={6}&HWMQuality={7}"+
                            "&HWMEnvironment={8}&SurveyComplete={9}&StillWater={10}",
                        "description": "This service returns a list of hwms that meet the passed-in parameters. If unauthorized, only approved hwms will be returned.",
                        "id": "Filtered HWMs",
                        "parameters": [
                           { "name": "eventId", "type": "comma separated string", "description": "Comma separated list of event IDs (ex: '1,2,3' or '1')", "optional":true, "value": "" },
                           { "name": "eventTypeIDs", "type": "comma separated string", "description": "Comma separated list of event type IDs", "optional": true, "value": "" },
                           { "name": "eventStatusID", "type": "number", "description": "Id of the event status", "optional": true, "value": "" },
                           { "name": "states", "type": "comma separated string", "description": "Comma separated list of state abbreviations", "optional": true, "value": "" },
                           { "name": "counties", "type": "comma separated string", "description": "Comma separated list of county names (Include 'County' at the end, ex: 'Washington County')", "optional": true, "value": "" },
                           { "name": "hwmTypeIDs", "type": "comma separated string", "description": "Comma separated list of hwm type IDs", "optional": true, "value": "" },
                           { "name": "hwmQualIDs", "type": "comma separated string", "description": "Comma separated list of hwm quality IDs", "optional": true, "value": "" },
                           { "name": "hwmEnvironment", "type": "string", "description": "Either 'Coastal' or 'Riverine'", "optional": true, "value": "" },
                           { "name": "surveyComplete", "type": "boolean", "description": "True or false: surveyed or not", "optional": true, "value": "" },
                           { "name": "stillWater", "type": "boolean", "description": "True or false: stillwater or not", "optional": true, "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    }
                ]
            }]
        },
        //#endregion
        //#region hwm quality (18)
        {
            "name": "HWM Quality",
            "description": "The hwm quality resource represents a hwm quality that can be added to a hwm.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/hwmqualities{0}",
                        "description": "This service returns a list of hwm qualities.",
                        "id": "All HWM Qualities",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/hwmqualities/{1}{0}",
                        "description": "This service returns a hwm quality by it's ID.",
                        "id": "A HWM Quality",
                        "parameters": [
                           { "name": "hwmQualityId", "type": "number", "description": "Id of hwm quality requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/hwms/{1}/Quality{0}",
                        "description": "This service returns a hwm quality for a hwm.",
                        "id": "HWM HWM Quality",
                        "parameters": [
                           { "name": "hwmId", "type": "number", "description": "Id of the hwm", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region hwm type (19)
        {
            "name": "HWM Type",
            "description": "The hwm type resource represents a hwm type that can be added to a hwm.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/hwmtypes{0}",
                        "description": "This service returns a list of hwm types.",
                        "id": "All HWM Types",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/hwmtypes/{1}{0}",
                        "description": "This service returns a hwm type by it's ID.",
                        "id": "A HWM Type",
                        "parameters": [
                           { "name": "hwmtypeId", "type": "number", "description": "Id of hwm type requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/hwms/{1}/type{0}",
                        "description": "This service returns a hwm type for a hwm.",
                        "id": "HWM HWM Type",
                        "parameters": [
                           { "name": "hwmId", "type": "number", "description": "Id of the hwm", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region instrument collection condition (20)
        {
            "name": "Instrument Collect Condition",
            "description": "The instrument collect condition resource represents an instrument collection condition that can be added to a sensor.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/instrcollectconditions{0}",
                        "description": "This service returns a list of instrument collection conditions.",
                        "id": "All Instrument Collect Conditions",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/instrcollectconditions/{1}{0}",
                        "description": "This service returns an instrument collection condition by it's ID.",
                        "id": "An Instrument Collect Condition",
                        "parameters": [
                           { "name": "instCollectConditionId", "type": "number", "description": "Id of instrument collection condition requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/instruments/{1}/CollectCondition{0}",
                        "description": "This service returns an instrument collection condition for a sensor.",
                        "id": "Sensor Instrument Collection Condition",
                        "parameters": [
                           { "name": "sensorId", "type": "number", "description": "Id of the sensor", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region sensor  (21)
        {
            "name": "Sensor",
            "description": "The sensor resource represents a sensor that can be deployed and retrieved at a site.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/instruments{0}",
                        "description": "This service returns a list of sensors.",
                        "id": "All Sensors",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/instruments/{1}{0}",
                        "description": "This service returns a sensor by it's ID.",
                        "id": "A Sensor",
                        "parameters": [
                           { "name": "sensorId", "type": "number", "description": "Id of sensor requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/files/{1}/instrument{0}",
                        "description": "This service returns a sensor that the given file was uploaded for.",
                        "id": "File Sensor",
                        "parameters": [
                           { "name": "fileId", "type": "number", "description": "Id of the file", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/instrumentstatus/{1}/instrument{0}",
                        "description": "This service returns a sensor associated with an instrument status.",
                        "id": "Instrument Status Sensor",
                        "parameters": [
                           { "name": "instrumentStatusId", "type": "number", "description": "Id of the instrument status", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/datafiles/{1}/instrument{0}",
                        "description": "This service returns a sensor for a data file.",
                        "id": "Data File Sensor",
                        "parameters": [
                           { "name": "dataFileId", "type": "number", "description": "Id of the data file", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sites/{1}/instruments{0}",
                        "description": "This service returns a list of sensors that were deployed at a site.",
                        "id": "Site Sensors",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sensortypes/{1}/instruments{0}",
                        "description": "This service returns a list of sensors with the given sensor type.",
                        "id": "Sensor Type Sensors",
                        "parameters": [
                           { "name": "sensorTypeId", "type": "number", "description": "Id of the sensor type", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sensorbrands/{1}/instruments{0}",
                        "description": "This service returns a list of sensors with the given sensor brand.",
                        "id": "Sensor Brand Sensors",
                        "parameters": [
                           { "name": "sensorBrandId", "type": "number", "description": "Id of the sensor brand", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/deploymenttypes/{1}/instruments{0}",
                        "description": "This service returns a list of sensors with the given deployment type.",
                        "id": "Deployment Type Sensors",
                        "parameters": [
                           { "name": "deploymentTypeId", "type": "number", "description": "Id of the deployment type", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/events/{1}/instruments{0}",
                        "description": "This service returns a list of sensors that were deployed for an event.",
                        "id": "Event Sensors",
                        "parameters": [
                           { "name": "eventId", "type": "number", "description": "Id of the event", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sites/{1}/instruments{0}?Event={2}",
                        "description": "This service returns a list of sensors deployed at a given site for an event.",
                        "id": "Site Event Sensors",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" },
                           { "name": "eventId", "type": "number", "description": "Id of the event", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/Instruments/FilteredInstruments{0}?Event={1}&EventType={2}&EventStatus={3}&States={4}&County={5}&CurrentStatus={6}&CollectionCondition={7}&DeploymentType={8}",
                        "description": "This service returns a list of sensors that meet the passed-in parameters.",
                        "id": "Filtered Sensors",
                        "parameters": [
                           { "name": "eventIds", "type": "comma separated string", "description": "Comma separated list of event IDs (ex: '1,2,3' or '1')", "optional": true, "value": "" },
                           { "name": "eventTypeIDs", "type": "comma separated string", "description": "Comma separated list of event type IDs", "optional": true, "value": "" },
                           { "name": "eventStatusID", "type": "number", "description": "Id of the event status", "optional": true, "value": "" },
                           { "name": "states", "type": "comma separated string", "description": "Comma separated list of state abbreviations", "optional": true, "value": "" },
                           { "name": "counties", "type": "comma separated string", "description": "Comma separated list of county names (Include 'County' at the end, ex: 'Washington County')", "optional": true, "value": "" },
                           { "name": "statusIDs", "type": "comma separated string", "description": "Comma separated list of sensor status IDs", "optional": true, "value": "" },
                           { "name": "collectionConditionIDs", "type": "comma separated string", "description": "Comma separated list of instrument collection condition IDs", "optional": true, "value": "" },
                           { "name": "deploymentTypeIDs", "type": "comma separated string", "description": "Comma separated list of deployment type IDs", "optional": true, "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/instruments/{1}/fullinstrument{0}",
                        "description": "This service returns a list of sensors with their associated sensor statuses (instrument_status). (response can only be returned as .json)",
                        "id": "Full Sensors",
                        "parameters": [
                           { "name": "sensorId", "type": "number", "description": "Id of the sensor", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sites/{1}/sitefullinstrumentlist{0}",
                        "description": "This service returns a list of sensors with their associated sensor statuses (instrument_status) that were deployed at a site. (response can only be returned as .json).",
                        "id": "Site Full Sensors",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region instrument status (22)
        {
            "name": "Instrument Status",
            "description": "The instrument status resource represents a status that a sensor can have.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/instrumentstatus{0}",
                        "description": "This service returns a list of instrument statuses.",
                        "id": "All Instrument Statuses",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/instrumentstatus/{1}{0}",
                        "description": "This service returns an instrument status by it's ID.",
                        "id": "An Instrument Status",
                        "parameters": [
                           { "name": "instStatusId", "type": "number", "description": "Id of instrument status requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/instruments/{1}/InstrumentStatusLog{0}",
                        "description": "This service returns a list of all the instrument statuses that a sensor has in descending order (most recent first).",
                        "id": "Instrument Status Log",
                        "parameters": [
                           { "name": "sensorId", "type": "number", "description": "Id of the sensor", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/instruments/{1}/instrumentstatus{0}",
                        "description": "This service returns the most recent instrument status of a sensor.",
                        "id": "Sensor Instrument Status",
                        "parameters": [
                           { "name": "sensorId", "type": "number", "description": "Id of the sensor", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region land owner contact (23)
        {
            "name": "Land Owner Contact",
            "description": "The land owner contact resource represents a land owner that can be associated with a site. Requires authentication.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/LandOwners{0}",
                        "description": "This service returns a list of land owners. Requires authentication.",
                        "id": "All Land Owners",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/LandOwners/{1}{0}",
                        "description": "This service returns a land owner by it's ID. Requires authentication.",
                        "id": "A Land Owner",
                        "parameters": [
                           { "name": "landOwnerId", "type": "number", "description": "Id of land owner requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sites/{1}/landowner{0}",
                        "description": "This service returns a land owner associated with a site. Requires authentication.",
                        "id": "Site Land Owner",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region marker (24)
        {
            "name": "Marker",
            "description": "The marker resource represents a marker that can be associated with a hwm.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/markers{0}",
                        "description": "This service returns a list of markers.",
                        "id": "All Markers",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/markers/{1}{0}",
                        "description": "This service returns a marker by it's ID.",
                        "id": "A Marker",
                        "parameters": [
                           { "name": "markerId", "type": "number", "description": "Id of marker requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/hwms/{1}/marker{0}",
                        "description": "This service returns a marker associated with a hwm.",
                        "id": "HWM Marker",
                        "parameters": [
                           { "name": "hwmId", "type": "number", "description": "Id of the hwm", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region member (25)
        {
            "name": "Member",
            "description": "The member resource represents a member that can be the creator of an event, a site, hwm, sensor, file, and an objective point. Requires authentication.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/members{0}",
                        "description": "This service returns a list of members.Requires authentication.",
                        "id": "All Members",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/members/{1}{0}",
                        "description": "This service returns a member by it's ID. Requires authentication.",
                        "id": "A Member",
                        "parameters": [
                           { "name": "memberId", "type": "number", "description": "Id of member requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/members/GetMemberName/{1}{0}",
                        "description": "This service returns a member name. Does not require authentication.",
                        "id": "Member Name",
                        "parameters": [
                           { "name": "memberId", "type": "number", "description": "Id of the member", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/agencies/{1}/members{0}",
                        "description": "This service returns a list of members that are in the given agency. Requires authentication.",
                        "id": "Agency Members",
                        "parameters": [
                           { "name": "agencyId", "type": "number", "description": "Id of the agency", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/roles/{1}/members{0}",
                        "description": "This service returns a list of members that have the given role. Requires authentication.",
                        "id": "Role Members",
                        "parameters": [
                           { "name": "roleId", "type": "number", "description": "Id of the role", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/events/{1}/eventcoordinator{0}",
                        "description": "This service returns a member that is the coordinator for an event. Requires authentication.",
                        "id": "Event Coordinator",
                        "parameters": [
                           { "name": "eventId", "type": "number", "description": "Id of the event", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/approvals/{1}/approvingofficial{0}",
                        "description": "This service returns a member that created an approval. Requires authentication.",
                        "id": "Approving Official",
                        "parameters": [
                           { "name": "approvalId", "type": "number", "description": "Id of the approval", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/datafiles/{1}/processor{0}",
                        "description": "This service returns a member that processed a data file. Requires authentication.",
                        "id": "Data File Processor",
                        "parameters": [
                           { "name": "dataFileId", "type": "number", "description": "Id of the data file", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/peaksummaries/{1}/processor{0}",
                        "description": "This service returns a member that created a peak summary. Requires authentication.",
                        "id": "Peak Summary Processor",
                        "parameters": [
                           { "name": "peakSummaryId", "type": "number", "description": "Id of the peak summary", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/events/{1}/members{0}",
                        "description": "This service returns a list of members that have deployed or retrieved a sensor, and/or flagged or surveyed a hwm for an event. Requires authentication.",
                        "id": "Event Members",
                        "parameters": [
                           { "name": "eventId", "type": "number", "description": "Id of the event", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region network name (26)
        {
            "name": "Network Name",
            "description": "The netowrk name resource represents the network names that can be associated with a site.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/networknames{0}",
                        "description": "This service returns a list of network names.",
                        "id": "All Network Names",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/networknames/{1}{0}",
                        "description": "This service returns a network name by it's ID.",
                        "id": "A Network Name",
                        "parameters": [
                           { "name": "networkNameId", "type": "number", "description": "Id of network name requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sites/{1}/networknames{0}",
                        "description": "This service returns a list of network names associated with a site.",
                        "id": "Site Network Names",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region network name (27)
        {
            "name": "Network Type",
            "description": "The netowrk type resource represents the network types that can be associated with a site.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/networktypes{0}",
                        "description": "This service returns a list of network types.",
                        "id": "All Network Types",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/networktypes/{1}{0}",
                        "description": "This service returns a network type by it's ID.",
                        "id": "A Network Type",
                        "parameters": [
                           { "name": "networkTypeId", "type": "number", "description": "Id of network type requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sites/{1}/networktypes{0}",
                        "description": "This service returns a list of network types associated with a site.",
                        "id": "Site Network Types",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region objective point  (28)
        {
            "name": "Objective Point",
            "description": "The objective point (aka: datum location or referenece point) resource represents the objective points that can be associated with a site.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/objectivepoints{0}",
                        "description": "This service returns a list of objective points.",
                        "id": "All Objective Points",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/objectivepoints/{1}{0}",
                        "description": "This service returns an objective point by it's ID.",
                        "id": "An Objective Point",
                        "parameters": [
                           { "name": "objectivePointId", "type": "number", "description": "Id of objective point requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/verticaldatums/{1}/objectivepoints{0}",
                        "description": "This service returns a list of objective points with a vertical datum.",
                        "id": "Vertical Datum Objective Point",
                        "parameters": [
                           { "name": "vdatumId", "type": "number", "description": "Id of the vertical datum", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sites/{1}/objectivepoints{0}",
                        "description": "This service returns a list of objective points at a site.",
                        "id": "Site Objective Point",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region objective point type (29)
        {
            "name": "Objective Point Type",
            "description": "The objective point type resource represents a objective point type that can be added to a objective point.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/optypes{0}",
                        "description": "This service returns a list of objective point types.",
                        "id": "All Objective Point Types",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/optypes/{1}{0}",
                        "description": "This service returns a objective point type by it's ID.",
                        "id": "An Objective Point Type",
                        "parameters": [
                           { "name": "objectivePointTypeId", "type": "number", "description": "Id of objective point type requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/objectivepoints/{1}/OPType{0}",
                        "description": "This service returns an objective point type for a objective point.",
                        "id": "Objective Point OP Type",
                        "parameters": [
                           { "name": "objectivePointId", "type": "number", "description": "Id of the hwm", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region op Control Identifier  (30)
        {
            "name": "OP Control Identifier",
            "description": "The op control identifier resource represents the op control identifier that can be associated with a objective point (aka: datum location/reference point).",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/opcontrolidentifiers{0}",
                        "description": "This service returns a list of op control identifiers.",
                        "id": "All OP Control Identifiers",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/opcontrolidentifiers/{1}{0}",
                        "description": "This service returns an op control identifier by it's ID.",
                        "id": "An OP Control Identifier",
                        "parameters": [
                           { "name": "opControlId", "type": "number", "description": "Id of op control identifier requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/objectivepoints/{1}/opcontrols{0}",
                        "description": "This service returns a list of op control identifiers for an objective point.",
                        "id": "Objective Point OP Control Identifiers",
                        "parameters": [
                           { "name": "objectivePointId", "type": "number", "description": "Id of the objective point", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region op measurements  (31)
        {
            "name": "OP Measurement",
            "description": "The op measurement resource represents the op measurement that can be associated with an instrument's status and objective point (aka: datum location/reference point).",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/opmeasurements{0}",
                        "description": "This service returns a list of op measurements.",
                        "id": "All OP Measurements",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/opmeasurements/{1}{0}",
                        "description": "This service returns an op measurement by it's ID.",
                        "id": "An OP Measurement",
                        "parameters": [
                           { "name": "opMeasurementId", "type": "number", "description": "Id of op measurement requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/objectivepoints/{1}/opmeasurements{0}",
                        "description": "This service returns a list of op measurements for an objective point.",
                        "id": "Objective Point OP Measurements",
                        "parameters": [
                           { "name": "objectivePointId", "type": "number", "description": "Id of the objective point", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/instrumentstatus/{1}/opmeasurements{0}",
                        "description": "This service returns a list of op measurements for an instrument status.",
                        "id": "Instrument Status OP Measurements",
                        "parameters": [
                           { "name": "instrumentStatusId", "type": "number", "description": "Id of the instrument status", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region op quality  (32)
        {
            "name": "OP Quality",
            "description": "The op quality resource represents the op quality that can be applied to an objective point (aka: datum location/reference point).",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/objectivepointqualities{0}",
                        "description": "This service returns a list of op qualities.",
                        "id": "All OP Qualities",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/objectivepointqualities/{1}{0}",
                        "description": "This service returns an op quality by it's ID.",
                        "id": "An OP Quality",
                        "parameters": [
                           { "name": "opqualityId", "type": "number", "description": "Id of op quality requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/objectivepoints/{1}/quality{0}",
                        "description": "This service returns an op quality for an objective point.",
                        "id": "Objective Point OP Quality",
                        "parameters": [
                           { "name": "objectivePointId", "type": "number", "description": "Id of the objective point", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region peak summary  (33)   TODO:::: Errors on hwm/peaks and datafile/peaks
        {
            "name": "Peak Summary",
            "description": "The peak summary resource represents the peak summary that can be created using hwms and data file information for a site during an event.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/peaksummaries{0}",
                        "description": "This service returns a list of peak summaries.",
                        "id": "All Peak Summaries",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/peaksummaries/{1}{0}",
                        "description": "This service returns a peak summary by it's ID.",
                        "id": "A Peak Summary",
                        "parameters": [
                           { "name": "peakSummaryId", "type": "number", "description": "Id of peak summary requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/hwms/{1}/peaksummary{0}",
                        "description": "This service returns a peak summary for a hwm. If unauthorized, hwm would also need to be approved.",
                        "id": "HWM Peak Summary",
                        "parameters": [
                           { "name": "hwmId", "type": "number", "description": "Id of the hwm", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/datafiles/{1}/peaksummary{0}",
                        "description": "This service returns an peak summary for a data file.",
                        "id": "Data File Peak Summary",
                        "parameters": [
                           { "name": "dataFileId", "type": "number", "description": "Id of the data file", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/events/{1}/peaksummaries{0}",
                        "description": "This service returns a list of peak summaries for an event.",
                        "id": "Event Peak Summaries",
                        "parameters": [
                           { "name": "eventId", "type": "number", "description": "Id of the event", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sites/{1}/peaksummaries{0}",
                        "description": "This service returns a list of peak summaries for a site.",
                        "id": "Site Peak Summaries",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sites/{1}/peaksummaryview{0}",
                        "description": "This service returns a list of peak summaries for a site including event information.",
                        "id": "Site Peak Summary View",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/PeakSummaries/FilteredPeaks{0}?Event={1}&EventType={2}&EventStatus={3}&States={4}&County={5}&StartDate={6}&EndDate={7}",
                        "description": "This service returns a list of peak summaries including site information that meet the passed-in parameters.",
                        "id": "Filtered Peaks",
                        "parameters": [
                           { "name": "eventIds", "type": "comma separated string", "description": "Comma separated list of event IDs (ex: '1,2,3' or '1')", "optional": true, "value": "" },
                           { "name": "eventTypeIDs", "type": "comma separated string", "description": "Comma separated list of event type IDs", "optional": true, "value": "" },
                           { "name": "eventStatusID", "type": "number", "description": "Id of the event status", "optional": true, "value": "" },
                           { "name": "states", "type": "comma separated string", "description": "Comma separated list of state abbreviation", "optional": true, "value": "" },
                           { "name": "counties", "type": "comma separated string", "description": "Comma separated list of county names (include 'County', ex: 'Washington County')", "optional": true, "value": "" },
                           { "name": "startDate", "type": "date", "description": "Date to start searching (ex with format: '05/20/2015')", "optional": true, "value": "" },
                           { "name": "endDate", "type": "date", "description": "Date to end searching (ex with format: '07/20/2015')", "optional": true, "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
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