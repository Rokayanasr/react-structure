# Manual Tests for Image Upload and Button Enable/Disable Functionality

## Image Upload Tests

### Test 1: Upload a valid profile picture
1. Open the profile page
2. Click the "Hochladen" button next to "Profilbild"
3. Select a valid image (PNG, JPG, GIF) less than 5MB
4. **Expected result:**
   - The selected file name should appear
   - The "Profil Speichern" button should be enabled (not disabled)

### Test 2: Upload an invalid profile picture
1. Open the profile page
2. Click the "Hochladen" button next to "Profilbild"
3. Select an invalid file (such as PDF or text file)
4. **Expected result:**
   - An error message should appear: "Bitte wählen Sie eine gültige Bilddatei aus"
   - The "Profil Speichern" button should remain disabled if there are no other changes

### Test 3: Upload an oversized profile picture
1. Open the profile page
2. Click the "Hochladen" button next to "Profilbild"
3. Select an image larger than 5MB
4. **Expected result:**
   - An error message should appear: "Die Bilddatei darf nicht größer als 5MB sein"
   - The "Profil Speichern" button should remain disabled if there are no other changes

### Test 4: Upload a valid logo image
1. Open the profile page
2. Click the "Hochladen" button next to "Apothekenlogo"
3. Select a valid image (PNG, JPG, GIF) less than 5MB
4. **Expected result:**
   - The selected file name should appear
   - The "Profil Speichern" button should be enabled (not disabled)

## Button State Tests

### Test 5: Button state with no changes
1. Open the profile page
2. Do not make any changes in the form
3. **Expected result:**
   - The "Profil Speichern" button should be disabled

### Test 6: Button state with text changes
1. Open the profile page
2. Change one of the text fields (e.g., first name)
3. **Expected result:**
   - The "Profil Speichern" button should be enabled (not disabled)

### Test 7: Button state with only image changes
1. Open the profile page
2. Upload a valid profile or logo image without changing any other fields
3. **Expected result:**
   - The "Profil Speichern" button should be enabled (not disabled)

### Test 8: Button state during saving
1. Open the profile page
2. Make a change (such as uploading an image or changing a text field)
3. Click the "Profil Speichern" button
4. **Expected result:**
   - A loading indicator should appear on the button
   - The button should be disabled during the save process

### Test 9: Button state after saving
1. Perform Test 8 and wait until the save process is complete
2. **Expected result:**
   - A success message should appear: "تم تحديث الملف الشخصي بنجاح" (Profile updated successfully)
   - The button should return to its disabled state if there are no other changes

### Test 10: Button state with Radio Button change
1. Open the profile page
2. Change the state of one of the radio buttons (such as "Uniform" or "Parkplatz")
3. **Expected result:**
   - The "Profil Speichern" button should be enabled (not disabled)

### Test 11: Button state with Checkbox change
1. Open the profile page
2. Change the state of one of the checkboxes (WWS Software) by checking or unchecking an option
3. **Expected result:**
   - The "Profil Speichern" button should be enabled (not disabled)

### Test 12: Button state after saving with Checkbox/Radio changes
1. Change the state of a checkbox or radio button
2. Click the "Profil Speichern" button and wait for the save process to complete
3. **Expected result:**
   - A success message should appear: "تم تحديث الملف الشخصي بنجاح" (Profile updated successfully)
   - The button should return to its disabled state after saving 