export const Microservices : {[key: string]: string} = {
    // give like this : 
    // "ms-name" : "http://localhost:[port-no.]/[context-root]"
    "auth"      : "http://localhost:8100/api/authorization/auth",
    "checklist" : "http://localhost:8200/checklist",
    "benchmark" : "http://localhost:7000/api/benchmark1/benchmark",
    "severity"  : "http://localhost:8300/severity"
}