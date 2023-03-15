import { info } from "./api.js";

export function cleanGeneralData(info) {
    return {
        created: info.created_at,
        name: info.name,
        issues: info.open_issues_count,
        visibility: info.visibility
    }
}