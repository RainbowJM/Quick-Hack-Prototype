import { info } from "./api.js";

export function cleanOwnerData(info) {
    console.log(info.owner.login)
    return {
        owner: info.owner.login,
        
    }
}
export function cleanGeneralData(info) {
    return {
        created: info.created_at,
        name: info.name,
        issues: info.open_issues_count,
        visibility: info.visibility
    }
}