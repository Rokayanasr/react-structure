export const generateUniqueCode = (branchName: string, pharmacyName: string) => {
    const pharmacySlug = pharmacyName.split(/\s+/).map((word) => word.charAt(0).toUpperCase()).join("");
    const branchSlug = branchName.split(/\s+/).map((word) => word.charAt(0).toUpperCase()).join("");
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    return `${pharmacySlug}${branchSlug}_${randomNum}`.toUpperCase();

    // return `${pharmacySlug}_${randomNum}`;

    // return `${pharmacySlug}_${branchName}_${randomNum}`;
};
