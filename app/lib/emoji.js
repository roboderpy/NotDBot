
// EmojiOne

const myGlobals = require('../globals.js');
const hook = myGlobals.hook;

const regExp = '\\uD83D\\uDC69\\u200D\\u2764\\uFE0F\\u200D\\uD83D\\uDC8B\\u200D\\uD83D\\uDC69|\
\\uD83D\\uDC68\\u200D\\u2764\\uFE0F\\u200D\\uD83D\\uDC8B\\u200D\\uD83D\\uDC68|\
\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC66|\
\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC67|\
\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC66\\u200D\\uD83D\\uDC66|\
\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC66|\
\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC67|\
\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC66\\u200D\\uD83D\\uDC66|\
\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC66|\
\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC67|\
\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC66\\u200D\\uD83D\\uDC66|\
\\uD83D\\uDC68\\u200D\\u2764\\uFE0F\\u200D\\uD83D\\uDC68|\
\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC67|\
\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67|\
\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC66|\
\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67|\
\\uD83D\\uDC69\\u200D\\u2764\\uFE0F\\u200D\\uD83D\\uDC69|\
\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC66|\
\\uD83D\\uDC41\\u200D\\uD83D\\uDDE8|\
\\uD83C\\uDDE6\\uD83C\\uDDE9|\
\\uD83C\\uDDE6\\uD83C\\uDDEA|\
\\uD83C\\uDDE6\\uD83C\\uDDEB|\
\\uD83C\\uDDE6\\uD83C\\uDDEC|\
\\uD83C\\uDDE6\\uD83C\\uDDEE|\
\\uD83C\\uDDE6\\uD83C\\uDDF1|\
\\uD83C\\uDDE6\\uD83C\\uDDF2|\
\\uD83C\\uDDE6\\uD83C\\uDDF4|\
\\uD83C\\uDDE6\\uD83C\\uDDF6|\
\\uD83C\\uDDE6\\uD83C\\uDDF7|\
\\uD83C\\uDDE6\\uD83C\\uDDF8|\
\\uD83E\\uDD18\\uD83C\\uDFFF|\
\\uD83E\\uDD18\\uD83C\\uDFFE|\
\\uD83E\\uDD18\\uD83C\\uDFFD|\
\\uD83E\\uDD18\\uD83C\\uDFFC|\
\\uD83E\\uDD18\\uD83C\\uDFFB|\
\\uD83D\\uDEC0\\uD83C\\uDFFF|\
\\uD83D\\uDEC0\\uD83C\\uDFFE|\
\\uD83D\\uDEC0\\uD83C\\uDFFD|\
\\uD83D\\uDEC0\\uD83C\\uDFFC|\
\\uD83D\\uDEC0\\uD83C\\uDFFB|\
\\uD83D\\uDEB6\\uD83C\\uDFFF|\
\\uD83D\\uDEB6\\uD83C\\uDFFE|\
\\uD83D\\uDEB6\\uD83C\\uDFFD|\
\\uD83D\\uDEB6\\uD83C\\uDFFC|\
\\uD83D\\uDEB6\\uD83C\\uDFFB|\
\\uD83D\\uDEB5\\uD83C\\uDFFF|\
\\uD83D\\uDEB5\\uD83C\\uDFFE|\
\\uD83D\\uDEB5\\uD83C\\uDFFD|\
\\uD83D\\uDEB5\\uD83C\\uDFFC|\
\\uD83D\\uDEB5\\uD83C\\uDFFB|\
\\uD83D\\uDEB4\\uD83C\\uDFFF|\
\\uD83D\\uDEB4\\uD83C\\uDFFE|\
\\uD83D\\uDEB4\\uD83C\\uDFFD|\
\\uD83D\\uDEB4\\uD83C\\uDFFC|\
\\uD83D\\uDEB4\\uD83C\\uDFFB|\
\\uD83D\\uDEA3\\uD83C\\uDFFF|\
\\uD83D\\uDEA3\\uD83C\\uDFFE|\
\\uD83D\\uDEA3\\uD83C\\uDFFD|\
\\uD83D\\uDEA3\\uD83C\\uDFFC|\
\\uD83D\\uDEA3\\uD83C\\uDFFB|\
\\uD83D\\uDE4F\\uD83C\\uDFFF|\
\\uD83D\\uDE4F\\uD83C\\uDFFE|\
\\uD83D\\uDE4F\\uD83C\\uDFFD|\
\\uD83D\\uDE4F\\uD83C\\uDFFC|\
\\uD83D\\uDE4F\\uD83C\\uDFFB|\
\\uD83D\\uDE4E\\uD83C\\uDFFF|\
\\uD83D\\uDE4E\\uD83C\\uDFFE|\
\\uD83D\\uDE4E\\uD83C\\uDFFD|\
\\uD83D\\uDE4E\\uD83C\\uDFFC|\
\\uD83D\\uDE4E\\uD83C\\uDFFB|\
\\uD83D\\uDE4D\\uD83C\\uDFFF|\
\\uD83D\\uDE4D\\uD83C\\uDFFE|\
\\uD83D\\uDE4D\\uD83C\\uDFFD|\
\\uD83D\\uDE4D\\uD83C\\uDFFC|\
\\uD83D\\uDE4D\\uD83C\\uDFFB|\
\\uD83D\\uDE4C\\uD83C\\uDFFF|\
\\uD83D\\uDE4C\\uD83C\\uDFFE|\
\\uD83D\\uDE4C\\uD83C\\uDFFD|\
\\uD83D\\uDE4C\\uD83C\\uDFFC|\
\\uD83D\\uDE4C\\uD83C\\uDFFB|\
\\uD83D\\uDE4B\\uD83C\\uDFFF|\
\\uD83D\\uDE4B\\uD83C\\uDFFE|\
\\uD83D\\uDE4B\\uD83C\\uDFFD|\
\\uD83D\\uDE4B\\uD83C\\uDFFC|\
\\uD83D\\uDE4B\\uD83C\\uDFFB|\
\\uD83D\\uDE47\\uD83C\\uDFFF|\
\\uD83D\\uDE47\\uD83C\\uDFFE|\
\\uD83D\\uDE47\\uD83C\\uDFFD|\
\\uD83D\\uDE47\\uD83C\\uDFFC|\
\\uD83D\\uDE47\\uD83C\\uDFFB|\
\\uD83D\\uDE46\\uD83C\\uDFFF|\
\\uD83D\\uDE46\\uD83C\\uDFFE|\
\\uD83D\\uDE46\\uD83C\\uDFFD|\
\\uD83D\\uDE46\\uD83C\\uDFFC|\
\\uD83D\\uDE46\\uD83C\\uDFFB|\
\\uD83D\\uDE45\\uD83C\\uDFFF|\
\\uD83D\\uDE45\\uD83C\\uDFFE|\
\\uD83D\\uDE45\\uD83C\\uDFFD|\
\\uD83D\\uDE45\\uD83C\\uDFFC|\
\\uD83D\\uDE45\\uD83C\\uDFFB|\
\\uD83D\\uDD96\\uD83C\\uDFFF|\
\\uD83D\\uDD96\\uD83C\\uDFFE|\
\\uD83D\\uDD96\\uD83C\\uDFFD|\
\\uD83D\\uDD96\\uD83C\\uDFFC|\
\\uD83D\\uDD96\\uD83C\\uDFFB|\
\\uD83D\\uDD95\\uD83C\\uDFFF|\
\\uD83D\\uDD95\\uD83C\\uDFFE|\
\\uD83D\\uDD95\\uD83C\\uDFFD|\
\\uD83D\\uDD95\\uD83C\\uDFFC|\
\\uD83D\\uDD95\\uD83C\\uDFFB|\
\\uD83D\\uDD90\\uD83C\\uDFFF|\
\\uD83D\\uDD90\\uD83C\\uDFFE|\
\\uD83D\\uDD90\\uD83C\\uDFFD|\
\\uD83D\\uDD90\\uD83C\\uDFFC|\
\\uD83D\\uDD90\\uD83C\\uDFFB|\
\\uD83D\\uDD75\\uD83C\\uDFFF|\
\\uD83D\\uDD75\\uD83C\\uDFFE|\
\\uD83D\\uDD75\\uD83C\\uDFFD|\
\\uD83D\\uDD75\\uD83C\\uDFFC|\
\\uD83D\\uDD75\\uD83C\\uDFFB|\
\\uD83D\\uDCAA\\uD83C\\uDFFF|\
\\uD83D\\uDCAA\\uD83C\\uDFFE|\
\\uD83D\\uDCAA\\uD83C\\uDFFD|\
\\uD83D\\uDCAA\\uD83C\\uDFFC|\
\\uD83D\\uDCAA\\uD83C\\uDFFB|\
\\uD83D\\uDC87\\uD83C\\uDFFF|\
\\uD83D\\uDC87\\uD83C\\uDFFE|\
\\uD83D\\uDC87\\uD83C\\uDFFD|\
\\uD83D\\uDC87\\uD83C\\uDFFC|\
\\uD83D\\uDC87\\uD83C\\uDFFB|\
\\uD83D\\uDC86\\uD83C\\uDFFF|\
\\uD83D\\uDC86\\uD83C\\uDFFE|\
\\uD83D\\uDC86\\uD83C\\uDFFD|\
\\uD83D\\uDC86\\uD83C\\uDFFC|\
\\uD83D\\uDC86\\uD83C\\uDFFB|\
\\uD83D\\uDC85\\uD83C\\uDFFF|\
\\uD83D\\uDC85\\uD83C\\uDFFE|\
\\uD83D\\uDC85\\uD83C\\uDFFD|\
\\uD83D\\uDC85\\uD83C\\uDFFC|\
\\uD83D\\uDC85\\uD83C\\uDFFB|\
\\uD83D\\uDC83\\uD83C\\uDFFF|\
\\uD83D\\uDC83\\uD83C\\uDFFE|\
\\uD83D\\uDC83\\uD83C\\uDFFD|\
\\uD83D\\uDC83\\uD83C\\uDFFC|\
\\uD83D\\uDC83\\uD83C\\uDFFB|\
\\uD83D\\uDC82\\uD83C\\uDFFF|\
\\uD83D\\uDC82\\uD83C\\uDFFE|\
\\uD83D\\uDC82\\uD83C\\uDFFD|\
\\uD83D\\uDC82\\uD83C\\uDFFC|\
\\uD83D\\uDC82\\uD83C\\uDFFB|\
\\uD83D\\uDC81\\uD83C\\uDFFF|\
\\uD83D\\uDC81\\uD83C\\uDFFE|\
\\uD83D\\uDC81\\uD83C\\uDFFD|\
\\uD83D\\uDC81\\uD83C\\uDFFC|\
\\uD83D\\uDC81\\uD83C\\uDFFB|\
\\uD83D\\uDC7C\\uD83C\\uDFFF|\
\\uD83D\\uDC7C\\uD83C\\uDFFE|\
\\uD83D\\uDC7C\\uD83C\\uDFFD|\
\\uD83D\\uDC7C\\uD83C\\uDFFC|\
\\uD83D\\uDC7C\\uD83C\\uDFFB|\
\\uD83D\\uDC78\\uD83C\\uDFFF|\
\\uD83D\\uDC78\\uD83C\\uDFFE|\
\\uD83D\\uDC78\\uD83C\\uDFFD|\
\\uD83D\\uDC78\\uD83C\\uDFFC|\
\\uD83D\\uDC78\\uD83C\\uDFFB|\
\\uD83D\\uDC77\\uD83C\\uDFFF|\
\\uD83D\\uDC77\\uD83C\\uDFFE|\
\\uD83D\\uDC77\\uD83C\\uDFFD|\
\\uD83D\\uDC77\\uD83C\\uDFFC|\
\\uD83D\\uDC77\\uD83C\\uDFFB|\
\\uD83D\\uDC76\\uD83C\\uDFFF|\
\\uD83D\\uDC76\\uD83C\\uDFFE|\
\\uD83D\\uDC76\\uD83C\\uDFFD|\
\\uD83D\\uDC76\\uD83C\\uDFFC|\
\\uD83D\\uDC76\\uD83C\\uDFFB|\
\\uD83D\\uDC75\\uD83C\\uDFFF|\
\\uD83D\\uDC75\\uD83C\\uDFFE|\
\\uD83D\\uDC75\\uD83C\\uDFFD|\
\\uD83D\\uDC75\\uD83C\\uDFFC|\
\\uD83D\\uDC75\\uD83C\\uDFFB|\
\\uD83D\\uDC74\\uD83C\\uDFFF|\
\\uD83D\\uDC74\\uD83C\\uDFFE|\
\\uD83D\\uDC74\\uD83C\\uDFFD|\
\\uD83D\\uDC74\\uD83C\\uDFFC|\
\\uD83D\\uDC74\\uD83C\\uDFFB|\
\\uD83D\\uDC73\\uD83C\\uDFFF|\
\\uD83D\\uDC73\\uD83C\\uDFFE|\
\\uD83D\\uDC73\\uD83C\\uDFFD|\
\\uD83D\\uDC73\\uD83C\\uDFFC|\
\\uD83D\\uDC73\\uD83C\\uDFFB|\
\\uD83D\\uDC72\\uD83C\\uDFFF|\
\\uD83D\\uDC72\\uD83C\\uDFFE|\
\\uD83D\\uDC72\\uD83C\\uDFFD|\
\\uD83D\\uDC72\\uD83C\\uDFFC|\
\\uD83D\\uDC72\\uD83C\\uDFFB|\
\\uD83D\\uDC71\\uD83C\\uDFFF|\
\\uD83D\\uDC71\\uD83C\\uDFFE|\
\\uD83D\\uDC71\\uD83C\\uDFFD|\
\\uD83D\\uDC71\\uD83C\\uDFFC|\
\\uD83D\\uDC71\\uD83C\\uDFFB|\
\\uD83D\\uDC70\\uD83C\\uDFFF|\
\\uD83D\\uDC70\\uD83C\\uDFFE|\
\\uD83D\\uDC70\\uD83C\\uDFFD|\
\\uD83D\\uDC70\\uD83C\\uDFFC|\
\\uD83D\\uDC70\\uD83C\\uDFFB|\
\\uD83D\\uDC6E\\uD83C\\uDFFF|\
\\uD83D\\uDC6E\\uD83C\\uDFFE|\
\\uD83D\\uDC6E\\uD83C\\uDFFD|\
\\uD83D\\uDC6E\\uD83C\\uDFFC|\
\\uD83D\\uDC6E\\uD83C\\uDFFB|\
\\uD83D\\uDC69\\uD83C\\uDFFF|\
\\uD83D\\uDC69\\uD83C\\uDFFE|\
\\uD83D\\uDC69\\uD83C\\uDFFD|\
\\uD83D\\uDC69\\uD83C\\uDFFC|\
\\uD83D\\uDC69\\uD83C\\uDFFB|\
\\uD83D\\uDC68\\uD83C\\uDFFF|\
\\uD83D\\uDC68\\uD83C\\uDFFE|\
\\uD83D\\uDC68\\uD83C\\uDFFD|\
\\uD83D\\uDC68\\uD83C\\uDFFC|\
\\uD83D\\uDC68\\uD83C\\uDFFB|\
\\uD83D\\uDC67\\uD83C\\uDFFF|\
\\uD83D\\uDC67\\uD83C\\uDFFE|\
\\uD83D\\uDC67\\uD83C\\uDFFD|\
\\uD83D\\uDC67\\uD83C\\uDFFC|\
\\uD83D\\uDC67\\uD83C\\uDFFB|\
\\uD83D\\uDC66\\uD83C\\uDFFF|\
\\uD83D\\uDC66\\uD83C\\uDFFE|\
\\uD83D\\uDC66\\uD83C\\uDFFD|\
\\uD83D\\uDC66\\uD83C\\uDFFC|\
\\uD83D\\uDC66\\uD83C\\uDFFB|\
\\uD83D\\uDC50\\uD83C\\uDFFF|\
\\uD83D\\uDC50\\uD83C\\uDFFE|\
\\uD83D\\uDC50\\uD83C\\uDFFD|\
\\uD83D\\uDC50\\uD83C\\uDFFC|\
\\uD83D\\uDC50\\uD83C\\uDFFB|\
\\uD83D\\uDC4F\\uD83C\\uDFFF|\
\\uD83D\\uDC4F\\uD83C\\uDFFE|\
\\uD83D\\uDC4F\\uD83C\\uDFFD|\
\\uD83D\\uDC4F\\uD83C\\uDFFC|\
\\uD83D\\uDC4F\\uD83C\\uDFFB|\
\\uD83D\\uDC4E\\uD83C\\uDFFF|\
\\uD83D\\uDC4E\\uD83C\\uDFFE|\
\\uD83D\\uDC4E\\uD83C\\uDFFD|\
\\uD83D\\uDC4E\\uD83C\\uDFFC|\
\\uD83D\\uDC4E\\uD83C\\uDFFB|\
\\uD83D\\uDC4D\\uD83C\\uDFFF|\
\\uD83D\\uDC4D\\uD83C\\uDFFE|\
\\uD83D\\uDC4D\\uD83C\\uDFFD|\
\\uD83D\\uDC4D\\uD83C\\uDFFC|\
\\uD83D\\uDC4D\\uD83C\\uDFFB|\
\\uD83D\\uDC4C\\uD83C\\uDFFF|\
\\uD83D\\uDC4C\\uD83C\\uDFFE|\
\\uD83D\\uDC4C\\uD83C\\uDFFD|\
\\uD83D\\uDC4C\\uD83C\\uDFFC|\
\\uD83D\\uDC4C\\uD83C\\uDFFB|\
\\uD83D\\uDC4B\\uD83C\\uDFFF|\
\\uD83D\\uDC4B\\uD83C\\uDFFE|\
\\uD83D\\uDC4B\\uD83C\\uDFFD|\
\\uD83D\\uDC4B\\uD83C\\uDFFC|\
\\uD83D\\uDC4B\\uD83C\\uDFFB|\
\\uD83D\\uDC4A\\uD83C\\uDFFF|\
\\uD83D\\uDC4A\\uD83C\\uDFFE|\
\\uD83D\\uDC4A\\uD83C\\uDFFD|\
\\uD83D\\uDC4A\\uD83C\\uDFFC|\
\\uD83D\\uDC4A\\uD83C\\uDFFB|\
\\uD83D\\uDC49\\uD83C\\uDFFF|\
\\uD83D\\uDC49\\uD83C\\uDFFE|\
\\uD83D\\uDC49\\uD83C\\uDFFD|\
\\uD83D\\uDC49\\uD83C\\uDFFC|\
\\uD83D\\uDC49\\uD83C\\uDFFB|\
\\uD83D\\uDC48\\uD83C\\uDFFF|\
\\uD83D\\uDC48\\uD83C\\uDFFE|\
\\uD83D\\uDC48\\uD83C\\uDFFD|\
\\uD83D\\uDC48\\uD83C\\uDFFC|\
\\uD83D\\uDC48\\uD83C\\uDFFB|\
\\uD83D\\uDC47\\uD83C\\uDFFF|\
\\uD83D\\uDC47\\uD83C\\uDFFE|\
\\uD83D\\uDC47\\uD83C\\uDFFD|\
\\uD83D\\uDC47\\uD83C\\uDFFC|\
\\uD83D\\uDC47\\uD83C\\uDFFB|\
\\uD83D\\uDC46\\uD83C\\uDFFF|\
\\uD83D\\uDC46\\uD83C\\uDFFE|\
\\uD83D\\uDC46\\uD83C\\uDFFD|\
\\uD83D\\uDC46\\uD83C\\uDFFC|\
\\uD83D\\uDC46\\uD83C\\uDFFB|\
\\uD83D\\uDC43\\uD83C\\uDFFF|\
\\uD83D\\uDC43\\uD83C\\uDFFE|\
\\uD83D\\uDC43\\uD83C\\uDFFD|\
\\uD83D\\uDC43\\uD83C\\uDFFC|\
\\uD83D\\uDC43\\uD83C\\uDFFB|\
\\uD83D\\uDC42\\uD83C\\uDFFF|\
\\uD83D\\uDC42\\uD83C\\uDFFE|\
\\uD83D\\uDC42\\uD83C\\uDFFD|\
\\uD83D\\uDC42\\uD83C\\uDFFC|\
\\uD83D\\uDC42\\uD83C\\uDFFB|\
\\uD83C\\uDFCB\\uD83C\\uDFFF|\
\\uD83C\\uDFCB\\uD83C\\uDFFE|\
\\uD83C\\uDFCB\\uD83C\\uDFFD|\
\\uD83C\\uDFCB\\uD83C\\uDFFC|\
\\uD83C\\uDFCB\\uD83C\\uDFFB|\
\\uD83C\\uDFCA\\uD83C\\uDFFF|\
\\uD83C\\uDFCA\\uD83C\\uDFFE|\
\\uD83C\\uDFCA\\uD83C\\uDFFD|\
\\uD83C\\uDFCA\\uD83C\\uDFFC|\
\\uD83C\\uDFCA\\uD83C\\uDFFB|\
\\uD83C\\uDFC7\\uD83C\\uDFFF|\
\\uD83C\\uDFC7\\uD83C\\uDFFE|\
\\uD83C\\uDFC7\\uD83C\\uDFFD|\
\\uD83C\\uDFC7\\uD83C\\uDFFC|\
\\uD83C\\uDFC7\\uD83C\\uDFFB|\
\\uD83C\\uDFC4\\uD83C\\uDFFF|\
\\uD83C\\uDFC4\\uD83C\\uDFFE|\
\\uD83C\\uDFC4\\uD83C\\uDFFD|\
\\uD83C\\uDFC4\\uD83C\\uDFFC|\
\\uD83C\\uDFC4\\uD83C\\uDFFB|\
\\uD83C\\uDFC3\\uD83C\\uDFFF|\
\\uD83C\\uDFC3\\uD83C\\uDFFE|\
\\uD83C\\uDFC3\\uD83C\\uDFFD|\
\\uD83C\\uDFC3\\uD83C\\uDFFC|\
\\uD83C\\uDFC3\\uD83C\\uDFFB|\
\\uD83C\\uDF85\\uD83C\\uDFFF|\
\\uD83C\\uDF85\\uD83C\\uDFFE|\
\\uD83C\\uDF85\\uD83C\\uDFFD|\
\\uD83C\\uDF85\\uD83C\\uDFFC|\
\\uD83C\\uDF85\\uD83C\\uDFFB|\
\\uD83C\\uDDFF\\uD83C\\uDDFC|\
\\uD83C\\uDDFF\\uD83C\\uDDF2|\
\\uD83C\\uDDFF\\uD83C\\uDDE6|\
\\uD83C\\uDDFE\\uD83C\\uDDF9|\
\\uD83C\\uDDFE\\uD83C\\uDDEA|\
\\uD83C\\uDDFD\\uD83C\\uDDF0|\
\\uD83C\\uDDFC\\uD83C\\uDDF8|\
\\uD83C\\uDDFC\\uD83C\\uDDEB|\
\\uD83C\\uDDFB\\uD83C\\uDDFA|\
\\uD83C\\uDDFB\\uD83C\\uDDF3|\
\\uD83C\\uDDFB\\uD83C\\uDDEE|\
\\uD83C\\uDDFB\\uD83C\\uDDEC|\
\\uD83C\\uDDFB\\uD83C\\uDDEA|\
\\uD83C\\uDDFB\\uD83C\\uDDE8|\
\\uD83C\\uDDFB\\uD83C\\uDDE6|\
\\uD83C\\uDDFA\\uD83C\\uDDFF|\
\\uD83C\\uDDFA\\uD83C\\uDDFE|\
\\uD83C\\uDDFA\\uD83C\\uDDF8|\
\\uD83C\\uDDFA\\uD83C\\uDDF2|\
\\uD83C\\uDDFA\\uD83C\\uDDEC|\
\\uD83C\\uDDFA\\uD83C\\uDDE6|\
\\uD83C\\uDDF9\\uD83C\\uDDFF|\
\\uD83C\\uDDF9\\uD83C\\uDDFC|\
\\uD83C\\uDDF9\\uD83C\\uDDFB|\
\\uD83C\\uDDF9\\uD83C\\uDDF9|\
\\uD83C\\uDDF9\\uD83C\\uDDF7|\
\\uD83C\\uDDF9\\uD83C\\uDDF4|\
\\uD83C\\uDDF9\\uD83C\\uDDF3|\
\\uD83C\\uDDF9\\uD83C\\uDDF2|\
\\uD83C\\uDDF9\\uD83C\\uDDF1|\
\\uD83C\\uDDF9\\uD83C\\uDDF0|\
\\uD83C\\uDDF9\\uD83C\\uDDEF|\
\\uD83C\\uDDF9\\uD83C\\uDDED|\
\\uD83C\\uDDF9\\uD83C\\uDDEC|\
\\uD83C\\uDDF9\\uD83C\\uDDEB|\
\\uD83C\\uDDE6\\uD83C\\uDDE8|\
\\uD83C\\uDDF9\\uD83C\\uDDE8|\
\\uD83C\\uDDF9\\uD83C\\uDDE6|\
\\uD83C\\uDDF8\\uD83C\\uDDFF|\
\\uD83C\\uDDF8\\uD83C\\uDDFE|\
\\uD83C\\uDDF8\\uD83C\\uDDFD|\
\\uD83C\\uDDF8\\uD83C\\uDDFB|\
\\uD83C\\uDDF8\\uD83C\\uDDF9|\
\\uD83C\\uDDF8\\uD83C\\uDDF8|\
\\uD83C\\uDDF8\\uD83C\\uDDF7|\
\\uD83C\\uDDF8\\uD83C\\uDDF4|\
\\uD83C\\uDDF8\\uD83C\\uDDF3|\
\\uD83C\\uDDF8\\uD83C\\uDDF2|\
\\uD83C\\uDDF8\\uD83C\\uDDF1|\
\\uD83C\\uDDF8\\uD83C\\uDDF0|\
\\uD83C\\uDDF8\\uD83C\\uDDEF|\
\\uD83C\\uDDF8\\uD83C\\uDDEE|\
\\uD83C\\uDDF8\\uD83C\\uDDED|\
\\uD83C\\uDDF8\\uD83C\\uDDEC|\
\\uD83C\\uDDF8\\uD83C\\uDDEA|\
\\uD83C\\uDDF8\\uD83C\\uDDE9|\
\\uD83C\\uDDF8\\uD83C\\uDDE8|\
\\uD83C\\uDDF8\\uD83C\\uDDE7|\
\\uD83C\\uDDF8\\uD83C\\uDDE6|\
\\uD83C\\uDDF7\\uD83C\\uDDFC|\
\\uD83C\\uDDF7\\uD83C\\uDDFA|\
\\uD83C\\uDDF7\\uD83C\\uDDF8|\
\\uD83C\\uDDF7\\uD83C\\uDDF4|\
\\uD83C\\uDDF7\\uD83C\\uDDEA|\
\\uD83C\\uDDF6\\uD83C\\uDDE6|\
\\uD83C\\uDDF5\\uD83C\\uDDFE|\
\\uD83C\\uDDF5\\uD83C\\uDDFC|\
\\uD83C\\uDDF5\\uD83C\\uDDF9|\
\\uD83C\\uDDF5\\uD83C\\uDDF8|\
\\uD83C\\uDDF5\\uD83C\\uDDF7|\
\\uD83C\\uDDF5\\uD83C\\uDDF3|\
\\uD83C\\uDDF5\\uD83C\\uDDF2|\
\\uD83C\\uDDF5\\uD83C\\uDDF1|\
\\uD83C\\uDDF5\\uD83C\\uDDF0|\
\\uD83C\\uDDF5\\uD83C\\uDDED|\
\\uD83C\\uDDF5\\uD83C\\uDDEC|\
\\uD83C\\uDDF5\\uD83C\\uDDEB|\
\\uD83C\\uDDF5\\uD83C\\uDDEA|\
\\uD83C\\uDDF5\\uD83C\\uDDE6|\
\\uD83C\\uDDF4\\uD83C\\uDDF2|\
\\uD83C\\uDDF3\\uD83C\\uDDFF|\
\\uD83C\\uDDF3\\uD83C\\uDDFA|\
\\uD83C\\uDDF3\\uD83C\\uDDF7|\
\\uD83C\\uDDF3\\uD83C\\uDDF5|\
\\uD83C\\uDDF3\\uD83C\\uDDF4|\
\\uD83C\\uDDF3\\uD83C\\uDDF1|\
\\uD83C\\uDDF3\\uD83C\\uDDEE|\
\\uD83C\\uDDF3\\uD83C\\uDDEC|\
\\uD83C\\uDDF3\\uD83C\\uDDEB|\
\\uD83C\\uDDF3\\uD83C\\uDDEA|\
\\uD83C\\uDDF3\\uD83C\\uDDE8|\
\\uD83C\\uDDF3\\uD83C\\uDDE6|\
\\uD83C\\uDDF2\\uD83C\\uDDFF|\
\\uD83C\\uDDF2\\uD83C\\uDDFE|\
\\uD83C\\uDDF2\\uD83C\\uDDFD|\
\\uD83C\\uDDF2\\uD83C\\uDDFC|\
\\uD83C\\uDDF2\\uD83C\\uDDFB|\
\\uD83C\\uDDF2\\uD83C\\uDDFA|\
\\uD83C\\uDDF2\\uD83C\\uDDF9|\
\\uD83C\\uDDF2\\uD83C\\uDDF8|\
\\uD83C\\uDDF2\\uD83C\\uDDF7|\
\\uD83C\\uDDF2\\uD83C\\uDDF6|\
\\uD83C\\uDDF2\\uD83C\\uDDF5|\
\\uD83C\\uDDF2\\uD83C\\uDDF4|\
\\uD83C\\uDDF2\\uD83C\\uDDF3|\
\\uD83C\\uDDF2\\uD83C\\uDDF2|\
\\uD83C\\uDDF2\\uD83C\\uDDF1|\
\\uD83C\\uDDF2\\uD83C\\uDDF0|\
\\uD83C\\uDDF2\\uD83C\\uDDED|\
\\uD83C\\uDDF2\\uD83C\\uDDEC|\
\\uD83C\\uDDF2\\uD83C\\uDDEB|\
\\uD83C\\uDDF2\\uD83C\\uDDEA|\
\\uD83C\\uDDF2\\uD83C\\uDDE9|\
\\uD83C\\uDDF2\\uD83C\\uDDE8|\
\\uD83C\\uDDF2\\uD83C\\uDDE6|\
\\uD83C\\uDDF1\\uD83C\\uDDFE|\
\\uD83C\\uDDF1\\uD83C\\uDDFB|\
\\uD83C\\uDDF1\\uD83C\\uDDFA|\
\\uD83C\\uDDF1\\uD83C\\uDDF9|\
\\uD83C\\uDDF1\\uD83C\\uDDF8|\
\\uD83C\\uDDF1\\uD83C\\uDDF7|\
\\uD83C\\uDDF1\\uD83C\\uDDF0|\
\\uD83C\\uDDF1\\uD83C\\uDDEE|\
\\uD83C\\uDDF1\\uD83C\\uDDE8|\
\\uD83C\\uDDF1\\uD83C\\uDDE7|\
\\uD83C\\uDDF1\\uD83C\\uDDE6|\
\\uD83C\\uDDF0\\uD83C\\uDDFF|\
\\uD83C\\uDDF0\\uD83C\\uDDFE|\
\\uD83C\\uDDF0\\uD83C\\uDDFC|\
\\uD83C\\uDDF0\\uD83C\\uDDF7|\
\\uD83C\\uDDF0\\uD83C\\uDDF5|\
\\uD83C\\uDDF0\\uD83C\\uDDF3|\
\\uD83C\\uDDF0\\uD83C\\uDDF2|\
\\uD83C\\uDDF0\\uD83C\\uDDEE|\
\\uD83C\\uDDF0\\uD83C\\uDDED|\
\\uD83C\\uDDF0\\uD83C\\uDDEC|\
\\uD83C\\uDDF0\\uD83C\\uDDEA|\
\\uD83C\\uDDEF\\uD83C\\uDDF5|\
\\uD83C\\uDDEF\\uD83C\\uDDF4|\
\\uD83C\\uDDEF\\uD83C\\uDDF2|\
\\uD83C\\uDDEF\\uD83C\\uDDEA|\
\\uD83C\\uDDEE\\uD83C\\uDDF9|\
\\uD83C\\uDDEE\\uD83C\\uDDF8|\
\\uD83C\\uDDEE\\uD83C\\uDDF7|\
\\uD83C\\uDDEE\\uD83C\\uDDF6|\
\\uD83C\\uDDEE\\uD83C\\uDDF4|\
\\uD83C\\uDDEE\\uD83C\\uDDF3|\
\\uD83C\\uDDEE\\uD83C\\uDDF2|\
\\uD83C\\uDDEE\\uD83C\\uDDF1|\
\\uD83C\\uDDEE\\uD83C\\uDDEA|\
\\uD83C\\uDDEE\\uD83C\\uDDE9|\
\\uD83C\\uDDEE\\uD83C\\uDDE8|\
\\uD83C\\uDDED\\uD83C\\uDDFA|\
\\uD83C\\uDDED\\uD83C\\uDDF9|\
\\uD83C\\uDDED\\uD83C\\uDDF7|\
\\uD83C\\uDDED\\uD83C\\uDDF3|\
\\uD83C\\uDDED\\uD83C\\uDDF2|\
\\uD83C\\uDDED\\uD83C\\uDDF0|\
\\uD83C\\uDDEC\\uD83C\\uDDFE|\
\\uD83C\\uDDEC\\uD83C\\uDDFC|\
\\uD83C\\uDDEC\\uD83C\\uDDFA|\
\\uD83C\\uDDEC\\uD83C\\uDDF9|\
\\uD83C\\uDDEC\\uD83C\\uDDF8|\
\\uD83C\\uDDEC\\uD83C\\uDDF7|\
\\uD83C\\uDDEC\\uD83C\\uDDF6|\
\\uD83C\\uDDEC\\uD83C\\uDDF5|\
\\uD83C\\uDDEC\\uD83C\\uDDF3|\
\\uD83C\\uDDEC\\uD83C\\uDDF2|\
\\uD83C\\uDDEC\\uD83C\\uDDF1|\
\\uD83C\\uDDEC\\uD83C\\uDDEE|\
\\uD83C\\uDDEC\\uD83C\\uDDED|\
\\uD83C\\uDDEC\\uD83C\\uDDEC|\
\\uD83C\\uDDEC\\uD83C\\uDDEB|\
\\uD83C\\uDDEC\\uD83C\\uDDEA|\
\\uD83C\\uDDEC\\uD83C\\uDDE9|\
\\uD83C\\uDDEC\\uD83C\\uDDE7|\
\\uD83C\\uDDEC\\uD83C\\uDDE6|\
\\uD83C\\uDDEB\\uD83C\\uDDF7|\
\\uD83C\\uDDEB\\uD83C\\uDDF4|\
\\uD83C\\uDDEB\\uD83C\\uDDF2|\
\\uD83C\\uDDEB\\uD83C\\uDDF0|\
\\uD83C\\uDDEB\\uD83C\\uDDEF|\
\\uD83C\\uDDEB\\uD83C\\uDDEE|\
\\uD83C\\uDDEA\\uD83C\\uDDFA|\
\\uD83C\\uDDEA\\uD83C\\uDDF9|\
\\uD83C\\uDDEA\\uD83C\\uDDF8|\
\\uD83C\\uDDEA\\uD83C\\uDDF7|\
\\uD83C\\uDDEA\\uD83C\\uDDED|\
\\uD83C\\uDDEA\\uD83C\\uDDEC|\
\\uD83C\\uDDEA\\uD83C\\uDDEA|\
\\uD83C\\uDDEA\\uD83C\\uDDE8|\
\\uD83C\\uDDEA\\uD83C\\uDDE6|\
\\uD83C\\uDDE9\\uD83C\\uDDFF|\
\\uD83C\\uDDE9\\uD83C\\uDDF4|\
\\uD83C\\uDDE9\\uD83C\\uDDF2|\
\\uD83C\\uDDE9\\uD83C\\uDDF0|\
\\uD83C\\uDDE9\\uD83C\\uDDEF|\
\\uD83C\\uDDE9\\uD83C\\uDDEC|\
\\uD83C\\uDDE9\\uD83C\\uDDEA|\
\\uD83C\\uDDE8\\uD83C\\uDDFF|\
\\uD83C\\uDDE8\\uD83C\\uDDFE|\
\\uD83C\\uDDE8\\uD83C\\uDDFD|\
\\uD83C\\uDDE8\\uD83C\\uDDFC|\
\\uD83C\\uDDE8\\uD83C\\uDDFB|\
\\uD83C\\uDDE8\\uD83C\\uDDFA|\
\\uD83C\\uDDE8\\uD83C\\uDDF7|\
\\uD83C\\uDDE8\\uD83C\\uDDF5|\
\\uD83C\\uDDE8\\uD83C\\uDDF4|\
\\uD83C\\uDDE8\\uD83C\\uDDF3|\
\\uD83C\\uDDE8\\uD83C\\uDDF2|\
\\uD83C\\uDDE8\\uD83C\\uDDF1|\
\\uD83C\\uDDE8\\uD83C\\uDDF0|\
\\uD83C\\uDDE8\\uD83C\\uDDEE|\
\\uD83C\\uDDE8\\uD83C\\uDDED|\
\\uD83C\\uDDE8\\uD83C\\uDDEC|\
\\uD83C\\uDDE8\\uD83C\\uDDEB|\
\\uD83C\\uDDE8\\uD83C\\uDDE9|\
\\uD83C\\uDDE8\\uD83C\\uDDE8|\
\\uD83C\\uDDE8\\uD83C\\uDDE6|\
\\uD83C\\uDDE7\\uD83C\\uDDFF|\
\\uD83C\\uDDE7\\uD83C\\uDDFE|\
\\uD83C\\uDDE7\\uD83C\\uDDFC|\
\\uD83C\\uDDE7\\uD83C\\uDDFB|\
\\uD83C\\uDDE7\\uD83C\\uDDF9|\
\\uD83C\\uDDE7\\uD83C\\uDDF8|\
\\uD83C\\uDDE7\\uD83C\\uDDF7|\
\\uD83C\\uDDE7\\uD83C\\uDDF6|\
\\uD83C\\uDDE7\\uD83C\\uDDF4|\
\\uD83C\\uDDE7\\uD83C\\uDDF3|\
\\uD83C\\uDDE7\\uD83C\\uDDF2|\
\\uD83C\\uDDE7\\uD83C\\uDDF1|\
\\uD83C\\uDDE7\\uD83C\\uDDEF|\
\\uD83C\\uDDE7\\uD83C\\uDDEE|\
\\uD83C\\uDDE7\\uD83C\\uDDED|\
\\uD83C\\uDDE7\\uD83C\\uDDEC|\
\\uD83C\\uDDE7\\uD83C\\uDDEB|\
\\uD83C\\uDDE7\\uD83C\\uDDEA|\
\\uD83C\\uDDE7\\uD83C\\uDDE9|\
\\uD83C\\uDDE7\\uD83C\\uDDE7|\
\\uD83C\\uDDE7\\uD83C\\uDDE6|\
\\uD83C\\uDDE6\\uD83C\\uDDFF|\
\\uD83C\\uDDE6\\uD83C\\uDDFD|\
\\uD83C\\uDDE6\\uD83C\\uDDFC|\
\\uD83C\\uDDE6\\uD83C\\uDDFA|\
\\uD83C\\uDDE6\\uD83C\\uDDF9|\
\\uD83C\\uDDF9\\uD83C\\uDDE9|\
\\uD83D\\uDDE1\\uFE0F|\
\\u26F9\\uD83C\\uDFFF|\
\\u26F9\\uD83C\\uDFFE|\
\\u26F9\\uD83C\\uDFFD|\
\\u26F9\\uD83C\\uDFFC|\
\\u26F9\\uD83C\\uDFFB|\
\\u270D\\uD83C\\uDFFF|\
\\u270D\\uD83C\\uDFFE|\
\\u270D\\uD83C\\uDFFD|\
\\u270D\\uD83C\\uDFFC|\
\\u270D\\uD83C\\uDFFB|\
\\uD83C\\uDC04\\uFE0F|\
\\uD83C\\uDD7F\\uFE0F|\
\\uD83C\\uDE02\\uFE0F|\
\\uD83C\\uDE1A\\uFE0F|\
\\uD83C\\uDE2F\\uFE0F|\
\\uD83C\\uDE37\\uFE0F|\
\\uD83C\\uDF9E\\uFE0F|\
\\uD83C\\uDF9F\\uFE0F|\
\\uD83C\\uDFCB\\uFE0F|\
\\uD83C\\uDFCC\\uFE0F|\
\\uD83C\\uDFCD\\uFE0F|\
\\uD83C\\uDFCE\\uFE0F|\
\\uD83C\\uDF96\\uFE0F|\
\\uD83C\\uDF97\\uFE0F|\
\\uD83C\\uDF36\\uFE0F|\
\\uD83C\\uDF27\\uFE0F|\
\\uD83C\\uDF28\\uFE0F|\
\\uD83C\\uDF29\\uFE0F|\
\\uD83C\\uDF2A\\uFE0F|\
\\uD83C\\uDF2B\\uFE0F|\
\\uD83C\\uDF2C\\uFE0F|\
\\uD83D\\uDC3F\\uFE0F|\
\\uD83D\\uDD77\\uFE0F|\
\\uD83D\\uDD78\\uFE0F|\
\\uD83C\\uDF21\\uFE0F|\
\\uD83C\\uDF99\\uFE0F|\
\\uD83C\\uDF9A\\uFE0F|\
\\uD83C\\uDF9B\\uFE0F|\
\\uD83C\\uDFF3\\uFE0F|\
\\uD83C\\uDFF5\\uFE0F|\
\\uD83C\\uDFF7\\uFE0F|\
\\uD83D\\uDCFD\\uFE0F|\
\\uD83D\\uDD49\\uFE0F|\
\\uD83D\\uDD4A\\uFE0F|\
\\uD83D\\uDD6F\\uFE0F|\
\\uD83D\\uDD70\\uFE0F|\
\\uD83D\\uDD73\\uFE0F|\
\\uD83D\\uDD76\\uFE0F|\
\\uD83D\\uDD79\\uFE0F|\
\\uD83D\\uDD87\\uFE0F|\
\\uD83D\\uDD8A\\uFE0F|\
\\uD83D\\uDD8B\\uFE0F|\
\\uD83D\\uDD8C\\uFE0F|\
\\uD83D\\uDD8D\\uFE0F|\
\\uD83D\\uDDA5\\uFE0F|\
\\uD83D\\uDDA8\\uFE0F|\
\\uD83D\\uDDB2\\uFE0F|\
\\uD83D\\uDDBC\\uFE0F|\
\\uD83D\\uDDC2\\uFE0F|\
\\uD83D\\uDDC3\\uFE0F|\
\\uD83D\\uDDC4\\uFE0F|\
\\uD83D\\uDDD1\\uFE0F|\
\\uD83D\\uDDD2\\uFE0F|\
\\uD83D\\uDDD3\\uFE0F|\
\\uD83D\\uDDDC\\uFE0F|\
\\uD83D\\uDDDD\\uFE0F|\
\\uD83D\\uDDDE\\uFE0F|\
\\u270B\\uD83C\\uDFFF|\
\\uD83D\\uDDE3\\uFE0F|\
\\uD83D\\uDDEF\\uFE0F|\
\\uD83D\\uDDF3\\uFE0F|\
\\uD83D\\uDDFA\\uFE0F|\
\\uD83D\\uDEE0\\uFE0F|\
\\uD83D\\uDEE1\\uFE0F|\
\\uD83D\\uDEE2\\uFE0F|\
\\uD83D\\uDEF0\\uFE0F|\
\\uD83C\\uDF7D\\uFE0F|\
\\uD83D\\uDC41\\uFE0F|\
\\uD83D\\uDD74\\uFE0F|\
\\uD83D\\uDD75\\uFE0F|\
\\uD83D\\uDD90\\uFE0F|\
\\uD83C\\uDFD4\\uFE0F|\
\\uD83C\\uDFD5\\uFE0F|\
\\uD83C\\uDFD6\\uFE0F|\
\\uD83C\\uDFD7\\uFE0F|\
\\uD83C\\uDFD8\\uFE0F|\
\\uD83C\\uDFD9\\uFE0F|\
\\uD83C\\uDFDA\\uFE0F|\
\\uD83C\\uDFDB\\uFE0F|\
\\uD83C\\uDFDC\\uFE0F|\
\\uD83C\\uDFDD\\uFE0F|\
\\uD83C\\uDFDE\\uFE0F|\
\\uD83C\\uDFDF\\uFE0F|\
\\uD83D\\uDECB\\uFE0F|\
\\uD83D\\uDECD\\uFE0F|\
\\uD83D\\uDECE\\uFE0F|\
\\uD83D\\uDECF\\uFE0F|\
\\uD83D\\uDEE3\\uFE0F|\
\\uD83D\\uDEE4\\uFE0F|\
\\uD83D\\uDEE5\\uFE0F|\
\\uD83D\\uDEE9\\uFE0F|\
\\uD83D\\uDEF3\\uFE0F|\
\\uD83C\\uDF24\\uFE0F|\
\\uD83C\\uDF25\\uFE0F|\
\\uD83C\\uDF26\\uFE0F|\
\\uD83D\\uDDB1\\uFE0F|\
\\u261D\\uD83C\\uDFFB|\
\\u261D\\uD83C\\uDFFC|\
\\u261D\\uD83C\\uDFFD|\
\\u261D\\uD83C\\uDFFE|\
\\u261D\\uD83C\\uDFFF|\
\\u270C\\uD83C\\uDFFB|\
\\u270C\\uD83C\\uDFFC|\
\\u270C\\uD83C\\uDFFD|\
\\u270C\\uD83C\\uDFFE|\
\\u270C\\uD83C\\uDFFF|\
\\u270A\\uD83C\\uDFFB|\
\\u270A\\uD83C\\uDFFC|\
\\u270A\\uD83C\\uDFFD|\
\\u270A\\uD83C\\uDFFE|\
\\u270A\\uD83C\\uDFFF|\
\\u270B\\uD83C\\uDFFB|\
\\u270B\\uD83C\\uDFFC|\
\\u270B\\uD83C\\uDFFD|\
\\u270B\\uD83C\\uDFFE|\
4\\uFE0F\\u20E3|\
9\\uFE0F\\u20E3|\
0\\uFE0F\\u20E3|\
1\\uFE0F\\u20E3|\
2\\uFE0F\\u20E3|\
3\\uFE0F\\u20E3|\
#\\uFE0F\\u20E3|\
5\\uFE0F\\u20E3|\
6\\uFE0F\\u20E3|\
7\\uFE0F\\u20E3|\
8\\uFE0F\\u20E3|\
\\*\\uFE0F\\u20E3|\
\\u00A9\\uFE0F|\
\\u00AE\\uFE0F|\
\\u203C\\uFE0F|\
\\u2049\\uFE0F|\
\\u2122\\uFE0F|\
\\u2139\\uFE0F|\
\\u2194\\uFE0F|\
\\u2195\\uFE0F|\
\\u2196\\uFE0F|\
\\u2197\\uFE0F|\
\\u2198\\uFE0F|\
\\u2199\\uFE0F|\
\\u21A9\\uFE0F|\
\\u21AA\\uFE0F|\
\\u231A\\uFE0F|\
\\u231B\\uFE0F|\
\\u24C2\\uFE0F|\
\\u25AA\\uFE0F|\
\\u25AB\\uFE0F|\
\\u25B6\\uFE0F|\
\\u25C0\\uFE0F|\
\\u25FB\\uFE0F|\
\\u25FC\\uFE0F|\
\\u25FD\\uFE0F|\
\\u25FE\\uFE0F|\
\\u2600\\uFE0F|\
\\u2601\\uFE0F|\
\\u260E\\uFE0F|\
\\u2611\\uFE0F|\
\\u2614\\uFE0F|\
\\u2615\\uFE0F|\
\\u261D\\uFE0F|\
\\u263A\\uFE0F|\
\\u2648\\uFE0F|\
\\u2649\\uFE0F|\
\\u264A\\uFE0F|\
\\u264B\\uFE0F|\
\\u264C\\uFE0F|\
\\u264D\\uFE0F|\
\\u264E\\uFE0F|\
\\u264F\\uFE0F|\
\\u2650\\uFE0F|\
\\u2651\\uFE0F|\
\\u2652\\uFE0F|\
\\u2653\\uFE0F|\
\\u2660\\uFE0F|\
\\u2663\\uFE0F|\
\\u2665\\uFE0F|\
\\u2666\\uFE0F|\
\\u2668\\uFE0F|\
\\u267B\\uFE0F|\
\\u267F\\uFE0F|\
\\u2693\\uFE0F|\
\\u26A0\\uFE0F|\
\\u26A1\\uFE0F|\
\\u26AA\\uFE0F|\
\\u26AB\\uFE0F|\
\\u26BD\\uFE0F|\
\\u26BE\\uFE0F|\
\\u26C4\\uFE0F|\
\\u26C5\\uFE0F|\
\\u26D4\\uFE0F|\
\\u26EA\\uFE0F|\
\\u26F2\\uFE0F|\
\\u26F3\\uFE0F|\
\\u26F5\\uFE0F|\
\\u26FA\\uFE0F|\
\\u26FD\\uFE0F|\
\\u2702\\uFE0F|\
\\u2708\\uFE0F|\
\\u2709\\uFE0F|\
\\u270C\\uFE0F|\
\\u270F\\uFE0F|\
\\u2712\\uFE0F|\
\\u2714\\uFE0F|\
\\u2716\\uFE0F|\
\\u2733\\uFE0F|\
\\u2734\\uFE0F|\
\\u2744\\uFE0F|\
\\u2747\\uFE0F|\
\\u2757\\uFE0F|\
\\u2764\\uFE0F|\
\\u27A1\\uFE0F|\
\\u2934\\uFE0F|\
\\u2935\\uFE0F|\
\\u2B05\\uFE0F|\
\\u2B06\\uFE0F|\
\\u2B07\\uFE0F|\
\\u2B1B\\uFE0F|\
\\u2B1C\\uFE0F|\
\\u2B50\\uFE0F|\
\\u2B55\\uFE0F|\
\\u3030\\uFE0F|\
\\u303D\\uFE0F|\
\\u3297\\uFE0F|\
\\u3299\\uFE0F|\
\\u271D\\uFE0F|\
\\u2328\\uFE0F|\
\\u270D\\uFE0F|\
\\u23ED\\uFE0F|\
\\u23EE\\uFE0F|\
\\u23EF\\uFE0F|\
\\u23F1\\uFE0F|\
\\u23F2\\uFE0F|\
\\u23F8\\uFE0F|\
\\u23F9\\uFE0F|\
\\u23FA\\uFE0F|\
\\u2602\\uFE0F|\
\\u2603\\uFE0F|\
\\u2604\\uFE0F|\
\\u2618\\uFE0F|\
\\u2620\\uFE0F|\
\\u2622\\uFE0F|\
\\u2623\\uFE0F|\
\\u2626\\uFE0F|\
\\u262A\\uFE0F|\
\\u262E\\uFE0F|\
\\u262F\\uFE0F|\
\\u2638\\uFE0F|\
\\u2639\\uFE0F|\
\\u2692\\uFE0F|\
\\u2694\\uFE0F|\
\\u2696\\uFE0F|\
\\u2697\\uFE0F|\
\\u2699\\uFE0F|\
\\u269B\\uFE0F|\
\\u269C\\uFE0F|\
\\u26B0\\uFE0F|\
\\u26B1\\uFE0F|\
\\u26C8\\uFE0F|\
\\u26CF\\uFE0F|\
\\u26D1\\uFE0F|\
\\u26D3\\uFE0F|\
\\u26E9\\uFE0F|\
\\u26F0\\uFE0F|\
\\u26F1\\uFE0F|\
\\u26F4\\uFE0F|\
\\u26F7\\uFE0F|\
\\u26F8\\uFE0F|\
\\u26F9\\uFE0F|\
\\u2721\\uFE0F|\
\\u2763\\uFE0F|\
\\uD83C\\uDCCF|\
\\uD83C\\uDD70|\
\\uD83C\\uDD71|\
\\uD83C\\uDD7E|\
\\uD83C\\uDD8E|\
\\uD83C\\uDD91|\
\\uD83C\\uDD92|\
\\uD83C\\uDD93|\
\\uD83C\\uDD94|\
\\uD83C\\uDD95|\
\\uD83C\\uDD96|\
\\uD83C\\uDD97|\
\\uD83C\\uDD98|\
\\uD83C\\uDD99|\
\\uD83C\\uDD9A|\
\\uD83C\\uDE01|\
\\uD83C\\uDE32|\
\\uD83C\\uDE33|\
\\uD83C\\uDE34|\
\\uD83C\\uDE35|\
\\uD83C\\uDE36|\
\\uD83C\\uDE38|\
\\uD83C\\uDE39|\
\\uD83C\\uDE3A|\
\\uD83C\\uDE50|\
\\uD83C\\uDE51|\
\\uD83C\\uDF00|\
\\uD83C\\uDF01|\
\\uD83C\\uDF02|\
\\uD83C\\uDF03|\
\\uD83C\\uDF04|\
\\uD83C\\uDF05|\
\\uD83C\\uDF06|\
\\uD83C\\uDF07|\
\\uD83C\\uDF08|\
\\uD83C\\uDF09|\
\\uD83C\\uDF0A|\
\\uD83C\\uDF0B|\
\\uD83C\\uDF0C|\
\\uD83C\\uDF0F|\
\\uD83C\\uDF11|\
\\uD83C\\uDF13|\
\\uD83C\\uDF14|\
\\uD83C\\uDF15|\
\\uD83C\\uDF19|\
\\uD83C\\uDF1B|\
\\uD83C\\uDF1F|\
\\uD83C\\uDF20|\
\\uD83C\\uDF30|\
\\uD83C\\uDF31|\
\\uD83C\\uDF34|\
\\uD83C\\uDF35|\
\\uD83C\\uDF37|\
\\uD83C\\uDF38|\
\\uD83C\\uDF39|\
\\uD83C\\uDF3A|\
\\uD83C\\uDF3B|\
\\uD83C\\uDF3C|\
\\uD83C\\uDF3D|\
\\uD83C\\uDF3E|\
\\uD83C\\uDF3F|\
\\uD83C\\uDF40|\
\\uD83C\\uDF41|\
\\uD83C\\uDF42|\
\\uD83C\\uDF43|\
\\uD83C\\uDF44|\
\\uD83C\\uDF45|\
\\uD83C\\uDF46|\
\\uD83C\\uDF47|\
\\uD83C\\uDF48|\
\\uD83C\\uDF49|\
\\uD83C\\uDF4A|\
\\uD83C\\uDF4C|\
\\uD83C\\uDF4D|\
\\uD83C\\uDF4E|\
\\uD83C\\uDF4F|\
\\uD83C\\uDF51|\
\\uD83C\\uDF52|\
\\uD83C\\uDF53|\
\\uD83C\\uDF54|\
\\uD83C\\uDF55|\
\\uD83C\\uDF56|\
\\uD83C\\uDF57|\
\\uD83C\\uDF58|\
\\uD83C\\uDF59|\
\\uD83C\\uDF5A|\
\\uD83C\\uDF5B|\
\\uD83C\\uDF5C|\
\\uD83C\\uDF5D|\
\\uD83C\\uDF5E|\
\\uD83C\\uDF5F|\
\\uD83C\\uDF60|\
\\uD83C\\uDF61|\
\\uD83C\\uDF62|\
\\uD83C\\uDF63|\
\\uD83C\\uDF64|\
\\uD83C\\uDF65|\
\\uD83C\\uDF66|\
\\uD83C\\uDF67|\
\\uD83C\\uDF68|\
\\uD83C\\uDF69|\
\\uD83C\\uDF6A|\
\\uD83C\\uDF6B|\
\\uD83C\\uDF6C|\
\\uD83C\\uDF6D|\
\\uD83C\\uDF6E|\
\\uD83C\\uDF6F|\
\\uD83C\\uDF70|\
\\uD83C\\uDF71|\
\\uD83C\\uDF72|\
\\uD83C\\uDF73|\
\\uD83C\\uDF74|\
\\uD83C\\uDF75|\
\\uD83C\\uDF76|\
\\uD83C\\uDF77|\
\\uD83C\\uDF78|\
\\uD83C\\uDF79|\
\\uD83C\\uDF7A|\
\\uD83C\\uDF7B|\
\\uD83C\\uDF80|\
\\uD83C\\uDF81|\
\\uD83C\\uDF82|\
\\uD83C\\uDF83|\
\\uD83C\\uDF84|\
\\uD83C\\uDF85|\
\\uD83C\\uDF86|\
\\uD83C\\uDF87|\
\\uD83C\\uDF88|\
\\uD83C\\uDF89|\
\\uD83C\\uDF8A|\
\\uD83C\\uDF8B|\
\\uD83C\\uDF8C|\
\\uD83C\\uDF8D|\
\\uD83C\\uDF8E|\
\\uD83C\\uDF8F|\
\\uD83C\\uDF90|\
\\uD83C\\uDF91|\
\\uD83C\\uDF92|\
\\uD83C\\uDF93|\
\\uD83C\\uDFA0|\
\\uD83C\\uDFA1|\
\\uD83C\\uDFA2|\
\\uD83C\\uDFA3|\
\\uD83C\\uDFA4|\
\\uD83C\\uDFA5|\
\\uD83C\\uDFA6|\
\\uD83C\\uDFA7|\
\\uD83C\\uDFA8|\
\\uD83C\\uDFA9|\
\\uD83C\\uDFAA|\
\\uD83C\\uDFAB|\
\\uD83C\\uDFAC|\
\\uD83C\\uDFAD|\
\\uD83C\\uDFAE|\
\\uD83C\\uDFAF|\
\\uD83C\\uDFB0|\
\\uD83C\\uDFB1|\
\\uD83C\\uDFB2|\
\\uD83C\\uDFB3|\
\\uD83C\\uDFB4|\
\\uD83C\\uDFB5|\
\\uD83C\\uDFB6|\
\\uD83C\\uDFB7|\
\\uD83C\\uDFB8|\
\\uD83C\\uDFB9|\
\\uD83C\\uDFBA|\
\\uD83C\\uDFBB|\
\\uD83C\\uDFBC|\
\\uD83C\\uDFBD|\
\\uD83C\\uDFBE|\
\\uD83C\\uDFBF|\
\\uD83C\\uDFC0|\
\\uD83C\\uDFC1|\
\\uD83C\\uDFC2|\
\\uD83C\\uDFC3|\
\\uD83C\\uDFC4|\
\\uD83C\\uDFC6|\
\\uD83C\\uDFC8|\
\\uD83C\\uDFCA|\
\\uD83C\\uDFE0|\
\\uD83D\\uDDB1|\
\\uD83C\\uDFE2|\
\\uD83C\\uDFE3|\
\\uD83C\\uDFE5|\
\\uD83C\\uDFE6|\
\\uD83C\\uDFE7|\
\\uD83C\\uDFE8|\
\\uD83C\\uDFE9|\
\\uD83C\\uDFEA|\
\\uD83C\\uDFEB|\
\\uD83C\\uDFEC|\
\\uD83C\\uDFED|\
\\uD83C\\uDFEE|\
\\uD83C\\uDFEF|\
\\uD83C\\uDFF0|\
\\uD83D\\uDC0C|\
\\uD83D\\uDC0D|\
\\uD83D\\uDC0E|\
\\uD83D\\uDC11|\
\\uD83D\\uDC12|\
\\uD83D\\uDC14|\
\\uD83D\\uDC17|\
\\uD83D\\uDC18|\
\\uD83D\\uDC19|\
\\uD83D\\uDC1A|\
\\uD83D\\uDC1B|\
\\uD83D\\uDC1C|\
\\uD83D\\uDC1D|\
\\uD83D\\uDC1E|\
\\uD83D\\uDC1F|\
\\uD83D\\uDC20|\
\\uD83D\\uDC21|\
\\uD83D\\uDC22|\
\\uD83D\\uDC23|\
\\uD83D\\uDC24|\
\\uD83D\\uDC25|\
\\uD83D\\uDC26|\
\\uD83D\\uDC27|\
\\uD83D\\uDC28|\
\\uD83D\\uDC29|\
\\uD83D\\uDC2B|\
\\uD83D\\uDC2C|\
\\uD83D\\uDC2D|\
\\uD83D\\uDC2E|\
\\uD83D\\uDC2F|\
\\uD83D\\uDC30|\
\\uD83D\\uDC31|\
\\uD83D\\uDC32|\
\\uD83D\\uDC33|\
\\uD83D\\uDC34|\
\\uD83D\\uDC35|\
\\uD83D\\uDC36|\
\\uD83D\\uDC37|\
\\uD83D\\uDC38|\
\\uD83D\\uDC39|\
\\uD83D\\uDC3A|\
\\uD83D\\uDC3B|\
\\uD83D\\uDC3C|\
\\uD83D\\uDC3D|\
\\uD83D\\uDC3E|\
\\uD83D\\uDC40|\
\\uD83D\\uDC42|\
\\uD83D\\uDC43|\
\\uD83D\\uDC44|\
\\uD83D\\uDC45|\
\\uD83D\\uDC46|\
\\uD83D\\uDC47|\
\\uD83D\\uDC48|\
\\uD83D\\uDC49|\
\\uD83D\\uDC4A|\
\\uD83D\\uDC4B|\
\\uD83D\\uDC4C|\
\\uD83D\\uDC4D|\
\\uD83D\\uDC4E|\
\\uD83D\\uDC4F|\
\\uD83D\\uDC50|\
\\uD83D\\uDC51|\
\\uD83D\\uDC52|\
\\uD83D\\uDC53|\
\\uD83D\\uDC54|\
\\uD83D\\uDC55|\
\\uD83D\\uDC56|\
\\uD83D\\uDC57|\
\\uD83D\\uDC58|\
\\uD83D\\uDC59|\
\\uD83D\\uDC5A|\
\\uD83D\\uDC5B|\
\\uD83D\\uDC5C|\
\\uD83D\\uDC5D|\
\\uD83D\\uDC5E|\
\\uD83D\\uDC5F|\
\\uD83D\\uDC60|\
\\uD83D\\uDC61|\
\\uD83D\\uDC62|\
\\uD83D\\uDC63|\
\\uD83D\\uDC64|\
\\uD83D\\uDC66|\
\\uD83D\\uDC67|\
\\uD83D\\uDC68|\
\\uD83D\\uDC69|\
\\uD83D\\uDC6A|\
\\uD83D\\uDC6B|\
\\uD83D\\uDC6E|\
\\uD83D\\uDC6F|\
\\uD83D\\uDC70|\
\\uD83D\\uDC71|\
\\uD83D\\uDC72|\
\\uD83D\\uDC73|\
\\uD83D\\uDC74|\
\\uD83D\\uDC75|\
\\uD83D\\uDC76|\
\\uD83D\\uDC77|\
\\uD83D\\uDC78|\
\\uD83D\\uDC79|\
\\uD83D\\uDC7A|\
\\uD83D\\uDC7B|\
\\uD83D\\uDC7C|\
\\uD83D\\uDC7D|\
\\uD83D\\uDC7E|\
\\uD83D\\uDC7F|\
\\uD83D\\uDC80|\
\\uD83D\\uDCC7|\
\\uD83D\\uDC81|\
\\uD83D\\uDC82|\
\\uD83D\\uDC83|\
\\uD83D\\uDC84|\
\\uD83D\\uDC85|\
\\uD83D\\uDCD2|\
\\uD83D\\uDC86|\
\\uD83D\\uDCD3|\
\\uD83D\\uDC87|\
\\uD83D\\uDCD4|\
\\uD83D\\uDC88|\
\\uD83D\\uDCD5|\
\\uD83D\\uDC89|\
\\uD83D\\uDCD6|\
\\uD83D\\uDC8A|\
\\uD83D\\uDCD7|\
\\uD83D\\uDC8B|\
\\uD83D\\uDCD8|\
\\uD83D\\uDC8C|\
\\uD83D\\uDCD9|\
\\uD83D\\uDC8D|\
\\uD83D\\uDCDA|\
\\uD83D\\uDC8E|\
\\uD83D\\uDCDB|\
\\uD83D\\uDC8F|\
\\uD83D\\uDCDC|\
\\uD83D\\uDC90|\
\\uD83D\\uDCDD|\
\\uD83D\\uDC91|\
\\uD83D\\uDCDE|\
\\uD83D\\uDC92|\
\\uD83D\\uDCDF|\
\\uD83D\\uDCE0|\
\\uD83D\\uDC93|\
\\uD83D\\uDCE1|\
\\uD83D\\uDCE2|\
\\uD83D\\uDC94|\
\\uD83D\\uDCE3|\
\\uD83D\\uDCE4|\
\\uD83D\\uDC95|\
\\uD83D\\uDCE5|\
\\uD83D\\uDCE6|\
\\uD83D\\uDC96|\
\\uD83D\\uDCE7|\
\\uD83D\\uDCE8|\
\\uD83D\\uDC97|\
\\uD83D\\uDCE9|\
\\uD83D\\uDCEA|\
\\uD83D\\uDC98|\
\\uD83D\\uDCEB|\
\\uD83D\\uDCEE|\
\\uD83D\\uDC99|\
\\uD83D\\uDCF0|\
\\uD83D\\uDCF1|\
\\uD83D\\uDC9A|\
\\uD83D\\uDCF2|\
\\uD83D\\uDCF3|\
\\uD83D\\uDC9B|\
\\uD83D\\uDCF4|\
\\uD83D\\uDCF6|\
\\uD83D\\uDC9C|\
\\uD83D\\uDCF7|\
\\uD83D\\uDCF9|\
\\uD83D\\uDC9D|\
\\uD83D\\uDCFA|\
\\uD83D\\uDCFB|\
\\uD83D\\uDC9E|\
\\uD83D\\uDCFC|\
\\uD83D\\uDD03|\
\\uD83D\\uDC9F|\
\\uD83D\\uDD0A|\
\\uD83D\\uDD0B|\
\\uD83D\\uDCA0|\
\\uD83D\\uDD0C|\
\\uD83D\\uDD0D|\
\\uD83D\\uDCA1|\
\\uD83D\\uDD0E|\
\\uD83D\\uDD0F|\
\\uD83D\\uDCA2|\
\\uD83D\\uDD10|\
\\uD83D\\uDD11|\
\\uD83D\\uDCA3|\
\\uD83D\\uDD12|\
\\uD83D\\uDD13|\
\\uD83D\\uDCA4|\
\\uD83D\\uDD14|\
\\uD83D\\uDD16|\
\\uD83D\\uDCA5|\
\\uD83D\\uDD17|\
\\uD83D\\uDD18|\
\\uD83D\\uDCA6|\
\\uD83D\\uDD19|\
\\uD83D\\uDD1A|\
\\uD83D\\uDCA7|\
\\uD83D\\uDD1B|\
\\uD83D\\uDD1C|\
\\uD83D\\uDCA8|\
\\uD83D\\uDD1D|\
\\uD83D\\uDD1E|\
\\uD83D\\uDCA9|\
\\uD83D\\uDD1F|\
\\uD83D\\uDCAA|\
\\uD83D\\uDD20|\
\\uD83D\\uDD21|\
\\uD83D\\uDCAB|\
\\uD83D\\uDD22|\
\\uD83D\\uDD23|\
\\uD83D\\uDCAC|\
\\uD83D\\uDD24|\
\\uD83D\\uDD25|\
\\uD83D\\uDCAE|\
\\uD83D\\uDD26|\
\\uD83D\\uDD27|\
\\uD83D\\uDCAF|\
\\uD83D\\uDD28|\
\\uD83D\\uDD29|\
\\uD83D\\uDCB0|\
\\uD83D\\uDD2A|\
\\uD83D\\uDD2B|\
\\uD83D\\uDCB1|\
\\uD83D\\uDD2E|\
\\uD83D\\uDCB2|\
\\uD83D\\uDD2F|\
\\uD83D\\uDCB3|\
\\uD83D\\uDD30|\
\\uD83D\\uDD31|\
\\uD83D\\uDCB4|\
\\uD83D\\uDD32|\
\\uD83D\\uDD33|\
\\uD83D\\uDCB5|\
\\uD83D\\uDD34|\
\\uD83D\\uDD35|\
\\uD83D\\uDCB8|\
\\uD83D\\uDD36|\
\\uD83D\\uDD37|\
\\uD83D\\uDCB9|\
\\uD83D\\uDD38|\
\\uD83D\\uDD39|\
\\uD83D\\uDCBA|\
\\uD83D\\uDD3A|\
\\uD83D\\uDD3B|\
\\uD83D\\uDCBB|\
\\uD83D\\uDD3C|\
\\uD83D\\uDCBC|\
\\uD83D\\uDD3D|\
\\uD83D\\uDD50|\
\\uD83D\\uDCBD|\
\\uD83D\\uDD51|\
\\uD83D\\uDCBE|\
\\uD83D\\uDD52|\
\\uD83D\\uDCBF|\
\\uD83D\\uDD53|\
\\uD83D\\uDCC0|\
\\uD83D\\uDD54|\
\\uD83D\\uDD55|\
\\uD83D\\uDCC1|\
\\uD83D\\uDD56|\
\\uD83D\\uDD57|\
\\uD83D\\uDCC2|\
\\uD83D\\uDD58|\
\\uD83D\\uDD59|\
\\uD83D\\uDCC3|\
\\uD83D\\uDD5A|\
\\uD83D\\uDD5B|\
\\uD83D\\uDCC4|\
\\uD83D\\uDDFB|\
\\uD83D\\uDDFC|\
\\uD83D\\uDCC5|\
\\uD83D\\uDDFD|\
\\uD83D\\uDDFE|\
\\uD83D\\uDCC6|\
\\uD83D\\uDDFF|\
\\uD83D\\uDE01|\
\\uD83D\\uDE02|\
\\uD83D\\uDE03|\
\\uD83D\\uDCC8|\
\\uD83D\\uDE04|\
\\uD83D\\uDE05|\
\\uD83D\\uDCC9|\
\\uD83D\\uDE06|\
\\uD83D\\uDE09|\
\\uD83D\\uDCCA|\
\\uD83D\\uDE0A|\
\\uD83D\\uDE0B|\
\\uD83D\\uDCCB|\
\\uD83D\\uDE0C|\
\\uD83D\\uDE0D|\
\\uD83D\\uDCCC|\
\\uD83D\\uDE0F|\
\\uD83D\\uDE12|\
\\uD83D\\uDCCD|\
\\uD83D\\uDE13|\
\\uD83D\\uDE14|\
\\uD83D\\uDCCE|\
\\uD83D\\uDE16|\
\\uD83D\\uDE18|\
\\uD83D\\uDCCF|\
\\uD83D\\uDE1A|\
\\uD83D\\uDE1C|\
\\uD83D\\uDCD0|\
\\uD83D\\uDE1D|\
\\uD83D\\uDE1E|\
\\uD83D\\uDCD1|\
\\uD83D\\uDE20|\
\\uD83D\\uDE21|\
\\uD83D\\uDE22|\
\\uD83D\\uDE23|\
\\uD83D\\uDE24|\
\\uD83D\\uDE25|\
\\uD83D\\uDE28|\
\\uD83D\\uDE29|\
\\uD83D\\uDE2A|\
\\uD83D\\uDE2B|\
\\uD83D\\uDE2D|\
\\uD83D\\uDE30|\
\\uD83D\\uDE31|\
\\uD83D\\uDE32|\
\\uD83D\\uDE33|\
\\uD83D\\uDE35|\
\\uD83D\\uDE37|\
\\uD83D\\uDE38|\
\\uD83D\\uDE39|\
\\uD83D\\uDE3A|\
\\uD83D\\uDE3B|\
\\uD83D\\uDE3C|\
\\uD83D\\uDE3D|\
\\uD83D\\uDE3E|\
\\uD83D\\uDE3F|\
\\uD83D\\uDE40|\
\\uD83D\\uDE45|\
\\uD83D\\uDE46|\
\\uD83D\\uDE47|\
\\uD83D\\uDE48|\
\\uD83D\\uDE49|\
\\uD83D\\uDE4A|\
\\uD83D\\uDE4B|\
\\uD83D\\uDE4C|\
\\uD83D\\uDE4D|\
\\uD83D\\uDE4E|\
\\uD83D\\uDE4F|\
\\uD83D\\uDE80|\
\\uD83D\\uDE83|\
\\uD83D\\uDE84|\
\\uD83D\\uDE85|\
\\uD83D\\uDE87|\
\\uD83D\\uDE89|\
\\uD83D\\uDE8C|\
\\uD83D\\uDE8F|\
\\uD83D\\uDE91|\
\\uD83D\\uDE92|\
\\uD83D\\uDE93|\
\\uD83D\\uDE95|\
\\uD83D\\uDE97|\
\\uD83D\\uDE99|\
\\uD83D\\uDE9A|\
\\uD83D\\uDEA2|\
\\uD83D\\uDEA4|\
\\uD83D\\uDEA5|\
\\uD83D\\uDEA7|\
\\uD83D\\uDEA8|\
\\uD83D\\uDEA9|\
\\uD83D\\uDEAA|\
\\uD83D\\uDEAB|\
\\uD83D\\uDEAC|\
\\uD83D\\uDEAD|\
\\uD83D\\uDEB2|\
\\uD83D\\uDEB6|\
\\uD83D\\uDEB9|\
\\uD83D\\uDEBA|\
\\uD83D\\uDEBB|\
\\uD83D\\uDEBC|\
\\uD83D\\uDEBD|\
\\uD83D\\uDEBE|\
\\uD83D\\uDEC0|\
\\uD83E\\uDD18|\
\\uD83D\\uDE00|\
\\uD83D\\uDE07|\
\\uD83D\\uDE08|\
\\uD83D\\uDE0E|\
\\uD83D\\uDE10|\
\\uD83D\\uDE11|\
\\uD83D\\uDE15|\
\\uD83D\\uDE17|\
\\uD83D\\uDE19|\
\\uD83D\\uDE1B|\
\\uD83D\\uDE1F|\
\\uD83D\\uDE26|\
\\uD83D\\uDE27|\
\\uD83D\\uDE2C|\
\\uD83D\\uDE2E|\
\\uD83D\\uDE2F|\
\\uD83D\\uDE34|\
\\uD83D\\uDE36|\
\\uD83D\\uDE81|\
\\uD83D\\uDE82|\
\\uD83D\\uDE86|\
\\uD83D\\uDE88|\
\\uD83D\\uDE8A|\
\\uD83D\\uDE8D|\
\\uD83D\\uDE8E|\
\\uD83D\\uDE90|\
\\uD83D\\uDE94|\
\\uD83D\\uDE96|\
\\uD83D\\uDE98|\
\\uD83D\\uDE9B|\
\\uD83D\\uDE9C|\
\\uD83D\\uDE9D|\
\\uD83D\\uDE9E|\
\\uD83D\\uDE9F|\
\\uD83D\\uDEA0|\
\\uD83D\\uDEA1|\
\\uD83D\\uDEA3|\
\\uD83D\\uDEA6|\
\\uD83D\\uDEAE|\
\\uD83D\\uDEAF|\
\\uD83D\\uDEB0|\
\\uD83D\\uDEB1|\
\\uD83D\\uDEB3|\
\\uD83D\\uDEB4|\
\\uD83D\\uDEB5|\
\\uD83D\\uDEB7|\
\\uD83D\\uDEB8|\
\\uD83D\\uDEBF|\
\\uD83D\\uDEC1|\
\\uD83D\\uDEC2|\
\\uD83D\\uDEC3|\
\\uD83D\\uDEC4|\
\\uD83D\\uDEC5|\
\\uD83C\\uDF0D|\
\\uD83C\\uDF0E|\
\\uD83C\\uDF10|\
\\uD83C\\uDF12|\
\\uD83C\\uDF16|\
\\uD83C\\uDF17|\
\\uD83C\\uDF18|\
\\uD83C\\uDF1A|\
\\uD83C\\uDF1C|\
\\uD83C\\uDF1D|\
\\uD83C\\uDF1E|\
\\uD83C\\uDF32|\
\\uD83C\\uDF33|\
\\uD83C\\uDF4B|\
\\uD83C\\uDF50|\
\\uD83C\\uDF7C|\
\\uD83C\\uDFC7|\
\\uD83C\\uDFC9|\
\\uD83C\\uDFE4|\
\\uD83D\\uDC00|\
\\uD83D\\uDC01|\
\\uD83D\\uDC02|\
\\uD83D\\uDC03|\
\\uD83D\\uDC04|\
\\uD83D\\uDC05|\
\\uD83D\\uDC06|\
\\uD83D\\uDC07|\
\\uD83D\\uDC08|\
\\uD83D\\uDC09|\
\\uD83D\\uDC0A|\
\\uD83D\\uDC0B|\
\\uD83D\\uDC0F|\
\\uD83D\\uDC10|\
\\uD83D\\uDC13|\
\\uD83D\\uDC15|\
\\uD83D\\uDC16|\
\\uD83D\\uDC2A|\
\\uD83D\\uDC65|\
\\uD83D\\uDC6C|\
\\uD83D\\uDC6D|\
\\uD83D\\uDCAD|\
\\uD83D\\uDCB6|\
\\uD83D\\uDCB7|\
\\uD83D\\uDCEC|\
\\uD83D\\uDCED|\
\\uD83D\\uDCEF|\
\\uD83D\\uDCF5|\
\\uD83D\\uDD00|\
\\uD83D\\uDD01|\
\\uD83D\\uDD02|\
\\uD83D\\uDD04|\
\\uD83D\\uDD05|\
\\uD83D\\uDD06|\
\\uD83D\\uDD07|\
\\uD83D\\uDD09|\
\\uD83D\\uDD15|\
\\uD83D\\uDD2C|\
\\uD83D\\uDD2D|\
\\uD83D\\uDD5C|\
\\uD83D\\uDD5D|\
\\uD83D\\uDD5E|\
\\uD83D\\uDD5F|\
\\uD83D\\uDD60|\
\\uD83D\\uDD61|\
\\uD83D\\uDD62|\
\\uD83D\\uDD63|\
\\uD83D\\uDD64|\
\\uD83D\\uDD65|\
\\uD83D\\uDD66|\
\\uD83D\\uDD67|\
\\uD83D\\uDD08|\
\\uD83D\\uDE8B|\
\\uD83C\\uDFC5|\
\\uD83C\\uDFF4|\
\\uD83D\\uDCF8|\
\\uD83D\\uDECC|\
\\uD83D\\uDD95|\
\\uD83D\\uDD96|\
\\uD83D\\uDE41|\
\\uD83D\\uDE42|\
\\uD83D\\uDEEB|\
\\uD83D\\uDEEC|\
\\uD83C\\uDFFB|\
\\uD83C\\uDFFC|\
\\uD83C\\uDFFD|\
\\uD83C\\uDFFE|\
\\uD83C\\uDFFF|\
\\uD83D\\uDE43|\
\\uD83E\\uDD11|\
\\uD83E\\uDD13|\
\\uD83E\\uDD17|\
\\uD83D\\uDE44|\
\\uD83E\\uDD14|\
\\uD83E\\uDD10|\
\\uD83E\\uDD12|\
\\uD83E\\uDD15|\
\\uD83E\\uDD16|\
\\uD83E\\uDD81|\
\\uD83E\\uDD84|\
\\uD83E\\uDD82|\
\\uD83E\\uDD80|\
\\uD83E\\uDD83|\
\\uD83E\\uDDC0|\
\\uD83C\\uDF2D|\
\\uD83C\\uDF2E|\
\\uD83C\\uDF2F|\
\\uD83C\\uDF7F|\
\\uD83C\\uDF7E|\
\\uD83C\\uDFF9|\
\\uD83C\\uDFFA|\
\\uD83D\\uDED0|\
\\uD83D\\uDD4B|\
\\uD83D\\uDD4C|\
\\uD83D\\uDD4D|\
\\uD83D\\uDD4E|\
\\uD83D\\uDCFF|\
\\uD83C\\uDFCF|\
\\uD83C\\uDFD0|\
\\uD83C\\uDFD1|\
\\uD83C\\uDFD2|\
\\uD83C\\uDFD3|\
\\uD83C\\uDFF8|\
\\uD83C\\uDF26|\
\\uD83C\\uDF25|\
\\uD83C\\uDF24|\
\\uD83D\\uDEF3|\
\\uD83D\\uDEE9|\
\\uD83D\\uDEE5|\
\\uD83D\\uDEE4|\
\\uD83D\\uDEE3|\
\\uD83D\\uDECF|\
\\uD83D\\uDECE|\
\\uD83D\\uDECD|\
\\uD83D\\uDECB|\
\\uD83C\\uDFDF|\
\\uD83C\\uDFDE|\
\\uD83C\\uDFDD|\
\\uD83C\\uDFDC|\
\\uD83C\\uDFDB|\
\\uD83C\\uDFDA|\
\\uD83C\\uDFD9|\
\\uD83C\\uDFD8|\
\\uD83C\\uDFD7|\
\\uD83C\\uDFD6|\
\\uD83C\\uDFD5|\
\\uD83C\\uDFD4|\
\\uD83D\\uDD90|\
\\uD83D\\uDD75|\
\\uD83D\\uDD74|\
\\uD83D\\uDC41|\
\\uD83C\\uDF7D|\
\\uD83D\\uDEF0|\
\\uD83D\\uDEE2|\
\\uD83D\\uDEE1|\
\\uD83D\\uDEE0|\
\\uD83D\\uDDFA|\
\\uD83D\\uDDF3|\
\\uD83D\\uDDEF|\
\\uD83D\\uDDE3|\
\\uD83D\\uDDE1|\
\\uD83D\\uDDDE|\
\\uD83D\\uDDDD|\
\\uD83D\\uDDDC|\
\\uD83D\\uDDD3|\
\\uD83D\\uDDD2|\
\\uD83D\\uDDD1|\
\\uD83D\\uDDC4|\
\\uD83D\\uDDC3|\
\\uD83D\\uDDC2|\
\\uD83D\\uDDBC|\
\\uD83D\\uDDB2|\
\\uD83D\\uDDA8|\
\\uD83D\\uDDA5|\
\\uD83D\\uDD8D|\
\\uD83D\\uDD8C|\
\\uD83D\\uDD8B|\
\\uD83D\\uDD8A|\
\\uD83D\\uDD87|\
\\uD83D\\uDD79|\
\\uD83D\\uDD76|\
\\uD83D\\uDD73|\
\\uD83D\\uDD70|\
\\uD83D\\uDD6F|\
\\uD83D\\uDD4A|\
\\uD83D\\uDD49|\
\\uD83D\\uDCFD|\
\\uD83C\\uDFF7|\
\\uD83C\\uDFF5|\
\\uD83C\\uDFF3|\
\\uD83C\\uDF9B|\
\\uD83C\\uDF9A|\
\\uD83C\\uDF99|\
\\uD83C\\uDF21|\
\\uD83D\\uDD78|\
\\uD83D\\uDD77|\
\\uD83D\\uDC3F|\
\\uD83C\\uDF2C|\
\\uD83C\\uDF2B|\
\\uD83C\\uDF2A|\
\\uD83C\\uDF29|\
\\uD83C\\uDF28|\
\\uD83C\\uDF27|\
\\uD83C\\uDF36|\
\\uD83C\\uDF97|\
\\uD83C\\uDF96|\
\\uD83C\\uDFCE|\
\\uD83C\\uDFCD|\
\\uD83C\\uDFCC|\
\\uD83C\\uDFCB|\
\\uD83C\\uDF9F|\
\\uD83C\\uDF9E|\
\\uD83C\\uDE37|\
\\uD83C\\uDE2F|\
\\uD83C\\uDE1A|\
\\uD83C\\uDE02|\
\\uD83C\\uDD7F|\
\\uD83C\\uDC04|\
\\uD83C\\uDFE1|\
\\u2714|\
\\u2733|\
\\u2734|\
\\u2744|\
\\u2747|\
\\u2757|\
\\u2764|\
\\u27A1|\
\\u2934|\
\\u2935|\
\\u2B05|\
\\u2B06|\
\\u2B07|\
\\u2B1B|\
\\u2B1C|\
\\u2B50|\
\\u2B55|\
\\u3030|\
\\u303D|\
\\u3297|\
\\u3299|\
\\u2712|\
\\u270F|\
\\u270C|\
\\u2709|\
\\u2708|\
\\u2702|\
\\u26FD|\
\\u26FA|\
\\u26F5|\
\\u26F3|\
\\u26F2|\
\\u26EA|\
\\u26D4|\
\\u26C5|\
\\u26C4|\
\\u26BE|\
\\u26BD|\
\\u26AB|\
\\u26AA|\
\\u26A1|\
\\u26A0|\
\\u2693|\
\\u267F|\
\\u267B|\
\\u2668|\
\\u2666|\
\\u2665|\
\\u2663|\
\\u2660|\
\\u2653|\
\\u2652|\
\\u2651|\
\\u271D|\
\\u2650|\
\\u264F|\
\\u264E|\
\\u264D|\
\\u264C|\
\\u264B|\
\\u264A|\
\\u2649|\
\\u2648|\
\\u263A|\
\\u261D|\
\\u2615|\
\\u2614|\
\\u2611|\
\\u2328|\
\\u260E|\
\\u2601|\
\\u2600|\
\\u25FE|\
\\u25FD|\
\\u25FC|\
\\u25FB|\
\\u25C0|\
\\u25B6|\
\\u25AB|\
\\u25AA|\
\\u24C2|\
\\u2716|\
\\u231A|\
\\u21AA|\
\\u21A9|\
\\u2199|\
\\u2198|\
\\u2197|\
\\u2196|\
\\u2195|\
\\u2194|\
\\u2139|\
\\u2122|\
\\u270D|\
\\u2049|\
\\u203C|\
\\u00AE|\
\\u00A9|\
\\u27BF|\
\\u27B0|\
\\u2797|\
\\u2796|\
\\u2795|\
\\u2755|\
\\u2754|\
\\u2753|\
\\u274E|\
\\u274C|\
\\u2728|\
\\u270B|\
\\u270A|\
\\u2705|\
\\u26CE|\
\\u23F3|\
\\u23F0|\
\\u23EC|\
\\u23ED|\
\\u23EE|\
\\u23EF|\
\\u23F1|\
\\u23F2|\
\\u23F8|\
\\u23F9|\
\\u23FA|\
\\u2602|\
\\u2603|\
\\u2604|\
\\u2618|\
\\u2620|\
\\u2622|\
\\u2623|\
\\u2626|\
\\u262A|\
\\u262E|\
\\u262F|\
\\u2638|\
\\u2639|\
\\u2692|\
\\u2694|\
\\u2696|\
\\u2697|\
\\u2699|\
\\u269B|\
\\u269C|\
\\u26B0|\
\\u26B1|\
\\u26C8|\
\\u26CF|\
\\u26D1|\
\\u26D3|\
\\u26E9|\
\\u26F0|\
\\u26F1|\
\\u26F4|\
\\u26F7|\
\\u26F8|\
\\u26F9|\
\\u2721|\
\\u2763|\
\\u23EB|\
\\u23EA|\
\\u23E9|\
\\u231B|\
\\uD83E\\uDD19\\uD83C\\uDFFE|\
\\uD83E\\uDD34\\uD83C\\uDFFB|\
\\uD83E\\uDD34\\uD83C\\uDFFE|\
\\uD83E\\uDD34\\uD83C\\uDFFF|\
\\uD83E\\uDD36\\uD83C\\uDFFB|\
\\uD83E\\uDD36\\uD83C\\uDFFC|\
\\uD83E\\uDD36\\uD83C\\uDFFD|\
\\uD83E\\uDD36\\uD83C\\uDFFE|\
\\uD83E\\uDD36\\uD83C\\uDFFF|\
\\uD83E\\uDD35\\uD83C\\uDFFB|\
\\uD83E\\uDD35\\uD83C\\uDFFC|\
\\uD83E\\uDD35\\uD83C\\uDFFD|\
\\uD83E\\uDD35\\uD83C\\uDFFE|\
\\uD83E\\uDD35\\uD83C\\uDFFF|\
\\uD83E\\uDD37\\uD83C\\uDFFB|\
\\uD83E\\uDD37\\uD83C\\uDFFC|\
\\uD83E\\uDD37\\uD83C\\uDFFD|\
\\uD83E\\uDD37\\uD83C\\uDFFE|\
\\uD83E\\uDD37\\uD83C\\uDFFF|\
\\uD83E\\uDD26\\uD83C\\uDFFB|\
\\uD83E\\uDD26\\uD83C\\uDFFC|\
\\uD83E\\uDD26\\uD83C\\uDFFD|\
\\uD83E\\uDD26\\uD83C\\uDFFE|\
\\uD83E\\uDD26\\uD83C\\uDFFF|\
\\uD83E\\uDD30\\uD83C\\uDFFB|\
\\uD83E\\uDD30\\uD83C\\uDFFC|\
\\uD83E\\uDD30\\uD83C\\uDFFD|\
\\uD83E\\uDD30\\uD83C\\uDFFE|\
\\uD83E\\uDD30\\uD83C\\uDFFF|\
\\uD83D\\uDD7A\\uD83C\\uDFFB|\
\\uD83D\\uDD7A\\uD83C\\uDFFC|\
\\uD83D\\uDD7A\\uD83C\\uDFFD|\
\\uD83D\\uDD7A\\uD83C\\uDFFE|\
\\uD83D\\uDD7A\\uD83C\\uDFFF|\
\\uD83E\\uDD33\\uD83C\\uDFFB|\
\\uD83E\\uDD33\\uD83C\\uDFFC|\
\\uD83E\\uDD33\\uD83C\\uDFFD|\
\\uD83E\\uDD33\\uD83C\\uDFFE|\
\\uD83E\\uDD33\\uD83C\\uDFFF|\
\\uD83E\\uDD1E\\uD83C\\uDFFB|\
\\uD83E\\uDD1E\\uD83C\\uDFFC|\
\\uD83E\\uDD1E\\uD83C\\uDFFD|\
\\uD83E\\uDD1E\\uD83C\\uDFFE|\
\\uD83E\\uDD1E\\uD83C\\uDFFF|\
\\uD83E\\uDD19\\uD83C\\uDFFB|\
\\uD83E\\uDD19\\uD83C\\uDFFC|\
\\uD83E\\uDD19\\uD83C\\uDFFD|\
\\uD83E\\uDD34\\uD83C\\uDFFD|\
\\uD83E\\uDD19\\uD83C\\uDFFF|\
\\uD83E\\uDD1B\\uD83C\\uDFFB|\
\\uD83E\\uDD1B\\uD83C\\uDFFC|\
\\uD83E\\uDD1B\\uD83C\\uDFFD|\
\\uD83E\\uDD1B\\uD83C\\uDFFE|\
\\uD83E\\uDD1B\\uD83C\\uDFFF|\
\\uD83E\\uDD1C\\uD83C\\uDFFB|\
\\uD83E\\uDD1C\\uD83C\\uDFFC|\
\\uD83E\\uDD1C\\uD83C\\uDFFD|\
\\uD83E\\uDD1C\\uD83C\\uDFFE|\
\\uD83E\\uDD1C\\uD83C\\uDFFF|\
\\uD83E\\uDD1A\\uD83C\\uDFFB|\
\\uD83E\\uDD1A\\uD83C\\uDFFC|\
\\uD83E\\uDD1A\\uD83C\\uDFFD|\
\\uD83E\\uDD1A\\uD83C\\uDFFE|\
\\uD83E\\uDD1A\\uD83C\\uDFFF|\
\\uD83E\\uDD1D\\uD83C\\uDFFB|\
\\uD83E\\uDD1D\\uD83C\\uDFFC|\
\\uD83E\\uDD1D\\uD83C\\uDFFD|\
\\uD83E\\uDD1D\\uD83C\\uDFFE|\
\\uD83E\\uDD1D\\uD83C\\uDFFF|\
\\uD83E\\uDD38\\uD83C\\uDFFB|\
\\uD83E\\uDD38\\uD83C\\uDFFC|\
\\uD83E\\uDD38\\uD83C\\uDFFD|\
\\uD83E\\uDD38\\uD83C\\uDFFE|\
\\uD83E\\uDD38\\uD83C\\uDFFF|\
\\uD83E\\uDD3C\\uD83C\\uDFFC|\
\\uD83E\\uDD3C\\uD83C\\uDFFB|\
\\uD83E\\uDD3C\\uD83C\\uDFFD|\
\\uD83E\\uDD3C\\uD83C\\uDFFE|\
\\uD83E\\uDD3C\\uD83C\\uDFFF|\
\\uD83E\\uDD3D\\uD83C\\uDFFB|\
\\uD83E\\uDD3D\\uD83C\\uDFFC|\
\\uD83E\\uDD3D\\uD83C\\uDFFD|\
\\uD83E\\uDD3D\\uD83C\\uDFFE|\
\\uD83E\\uDD3D\\uD83C\\uDFFF|\
\\uD83E\\uDD3E\\uD83C\\uDFFB|\
\\uD83E\\uDD3E\\uD83C\\uDFFC|\
\\uD83E\\uDD3E\\uD83C\\uDFFD|\
\\uD83E\\uDD3E\\uD83C\\uDFFE|\
\\uD83E\\uDD3E\\uD83C\\uDFFF|\
\\uD83E\\uDD39\\uD83C\\uDFFB|\
\\uD83E\\uDD39\\uD83C\\uDFFC|\
\\uD83E\\uDD39\\uD83C\\uDFFD|\
\\uD83E\\uDD39\\uD83C\\uDFFE|\
\\uD83E\\uDD39\\uD83C\\uDFFF|\
\\uD83E\\uDD34\\uD83C\\uDFFC|\
\\uD83E\\uDD49|\
\\uD83E\\uDD48|\
\\uD83E\\uDD47|\
\\uD83E\\uDD3A|\
\\uD83E\\uDD45|\
\\uD83E\\uDD3E|\
\\uD83C\\uDDFF|\
\\uD83E\\uDD3D|\
\\uD83E\\uDD4B|\
\\uD83E\\uDD4A|\
\\uD83E\\uDD3C|\
\\uD83E\\uDD39|\
\\uD83E\\uDD38|\
\\uD83D\\uDEF6|\
\\uD83D\\uDEF5|\
\\uD83D\\uDEF4|\
\\uD83D\\uDED2|\
\\uD83D\\uDED1|\
\\uD83C\\uDDFE|\
\\uD83E\\uDD44|\
\\uD83E\\uDD42|\
\\uD83E\\uDD43|\
\\uD83E\\uDD59|\
\\uD83E\\uDD58|\
\\uD83E\\uDD57|\
\\uD83E\\uDD56|\
\\uD83E\\uDD55|\
\\uD83E\\uDD54|\
\\uD83E\\uDD53|\
\\uD83E\\uDD52|\
\\uD83E\\uDD51|\
\\uD83E\\uDD50|\
\\uD83E\\uDD40|\
\\uD83E\\uDD8F|\
\\uD83E\\uDD8E|\
\\uD83E\\uDD8D|\
\\uD83E\\uDD8C|\
\\uD83E\\uDD8B|\
\\uD83E\\uDD8A|\
\\uD83E\\uDD89|\
\\uD83E\\uDD88|\
\\uD83E\\uDD87|\
\\uD83C\\uDDFD|\
\\uD83E\\uDD86|\
\\uD83E\\uDD85|\
\\uD83D\\uDDA4|\
\\uD83E\\uDD1E|\
\\uD83E\\uDD1D|\
\\uD83E\\uDD1B|\
\\uD83E\\uDD1C|\
\\uD83E\\uDD1A|\
\\uD83E\\uDD19|\
\\uD83D\\uDD7A|\
\\uD83E\\uDD33|\
\\uD83E\\uDD30|\
\\uD83E\\uDD26|\
\\uD83E\\uDD37|\
\\uD83E\\uDD36|\
\\uD83E\\uDD35|\
\\uD83E\\uDD34|\
\\uD83E\\uDD27|\
\\uD83E\\uDD25|\
\\uD83E\\uDD24|\
\\uD83E\\uDD23|\
\\uD83E\\uDD22|\
\\uD83E\\uDD21|\
\\uD83E\\uDD20|\
\\uD83E\\uDD41|\
\\uD83E\\uDD90|\
\\uD83E\\uDD91|\
\\uD83E\\uDD5A|\
\\uD83E\\uDD5B|\
\\uD83E\\uDD5C|\
\\uD83E\\uDD5D|\
\\uD83E\\uDD5E|\
\\uD83C\\uDDFC|\
\\uD83C\\uDDFB|\
\\uD83C\\uDDFA|\
\\uD83C\\uDDF9|\
\\uD83C\\uDDF8|\
\\uD83C\\uDDF7|\
\\uD83C\\uDDF6|\
\\uD83C\\uDDF5|\
\\uD83C\\uDDF4|\
\\uD83C\\uDDF3|\
\\uD83C\\uDDF2|\
\\uD83C\\uDDF1|\
\\uD83C\\uDDF0|\
\\uD83C\\uDDEF|\
\\uD83C\\uDDEE|\
\\uD83C\\uDDED|\
\\uD83C\\uDDEC|\
\\uD83C\\uDDEB|\
\\uD83C\\uDDEA|\
\\uD83C\\uDDE9|\
\\uD83C\\uDDE8|\
\\uD83C\\uDDE7|\
\\uD83C\\uDDE6|\
\\uD83C\\uDF26|\
\\uD83C\\uDF25|\
\\uD83C\\uDF24|\
\\uD83D\\uDEF3|\
\\uD83D\\uDEE9|\
\\uD83D\\uDEE5|\
\\uD83D\\uDEE4|\
\\uD83D\\uDEE3|\
\\uD83D\\uDECF|\
\\uD83D\\uDECE|\
\\uD83D\\uDECD|\
\\uD83D\\uDECB|\
\\uD83C\\uDFDF|\
\\uD83C\\uDFDE|\
\\uD83C\\uDFDD|\
\\uD83C\\uDFDC|\
\\uD83C\\uDFDB|\
\\uD83C\\uDFDA|\
\\uD83C\\uDFD9|\
\\uD83C\\uDFD8|\
\\uD83C\\uDFD7|\
\\uD83C\\uDFD6|\
\\uD83C\\uDFD5|\
\\uD83C\\uDFD4|\
\\uD83D\\uDD90|\
\\uD83D\\uDD75|\
\\uD83D\\uDD74|\
\\uD83D\\uDC41|\
\\uD83C\\uDF7D|\
\\uD83D\\uDDB1|\
\\uD83D\\uDEF0|\
\\uD83D\\uDEE2|\
\\uD83D\\uDEE1|\
\\uD83D\\uDEE0|\
\\uD83D\\uDDFA|\
\\uD83D\\uDDF3|\
\\uD83D\\uDDEF|\
\\uD83D\\uDDE8|\
\\uD83D\\uDDE3|\
\\uD83D\\uDDE1|\
\\uD83D\\uDDDE|\
\\uD83D\\uDDDD|\
\\uD83D\\uDDDC|\
\\uD83D\\uDDD3|\
\\uD83D\\uDDD2|\
\\uD83D\\uDDD1|\
\\uD83D\\uDDC4|\
\\uD83D\\uDDC3|\
\\uD83D\\uDDC2|\
\\uD83D\\uDDBC|\
\\uD83D\\uDDB2|\
\\uD83D\\uDDA8|\
\\uD83D\\uDDA5|\
\\uD83D\\uDD8D|\
\\uD83D\\uDD8C|\
\\uD83D\\uDD8B|\
\\uD83D\\uDD8A|\
\\uD83D\\uDD87|\
\\uD83D\\uDD79|\
\\uD83D\\uDD76|\
\\uD83D\\uDD73|\
\\uD83D\\uDD70|\
\\uD83D\\uDD6F|\
\\uD83D\\uDD4A|\
\\uD83D\\uDD49|\
\\uD83D\\uDCFD|\
\\uD83C\\uDFF7|\
\\uD83C\\uDFF5|\
\\uD83C\\uDFF3|\
\\uD83C\\uDF9B|\
\\uD83C\\uDF9A|\
\\uD83C\\uDF99|\
\\uD83C\\uDF21|\
\\uD83D\\uDD78|\
\\uD83D\\uDD77|\
\\uD83D\\uDC3F|\
\\uD83C\\uDF2C|\
\\uD83C\\uDF2B|\
\\uD83C\\uDF2A|\
\\uD83C\\uDF29|\
\\uD83C\\uDF28|\
\\uD83C\\uDF27|\
\\uD83C\\uDF36|\
\\uD83C\\uDF97|\
\\uD83C\\uDF96|\
\\uD83C\\uDFCE|\
\\uD83C\\uDFCD|\
\\uD83C\\uDFCC|\
\\uD83C\\uDFCB|\
\\uD83C\\uDF9F|\
\\uD83C\\uDF9E|\
\\uD83C\\uDE37|\
\\uD83C\\uDE2F|\
\\uD83C\\uDE1A|\
\\uD83C\\uDE02|\
\\uD83C\\uDD7F|\
\\uD83C\\uDC04|\
\\u25C0|\
\\u2B05|\
\\u2B07|\
\\u2B1B|\
\\u2B1C|\
\\u2B50|\
\\u2B55|\
\\u3030|\
\\u303D|\
\\u3297|\
\\u3299|\
\\u2935|\
\\u2934|\
\\u27A1|\
\\u2764|\
\\u2757|\
\\u2747|\
\\u2744|\
\\u2734|\
\\u2733|\
\\u2716|\
\\u2714|\
\\u2712|\
\\u270F|\
\\u270C|\
\\u2709|\
\\u2708|\
\\u2702|\
\\u26FD|\
\\u26FA|\
\\u26F5|\
\\u26F3|\
\\u26F2|\
\\u26EA|\
\\u26D4|\
\\u26C5|\
\\u26C4|\
\\u26BE|\
\\u26BD|\
\\u26AB|\
\\u26AA|\
\\u26A1|\
\\u26A0|\
\\u271D|\
\\u2693|\
\\u267F|\
\\u267B|\
\\u2668|\
\\u2666|\
\\u2665|\
\\u2663|\
\\u2660|\
\\u2653|\
\\u2652|\
\\u2651|\
\\u2650|\
\\u264F|\
\\u264E|\
\\u2328|\
\\u264D|\
\\u264C|\
\\u264B|\
\\u264A|\
\\u2649|\
\\u2648|\
\\u263A|\
\\u261D|\
\\u2615|\
\\u2614|\
\\u2611|\
\\u260E|\
\\u2601|\
\\u2600|\
\\u25FE|\
\\u25FD|\
\\u25FC|\
\\u25FB|\
\\u2B06|\
\\u25B6|\
\\u25AB|\
\\u24C2|\
\\u231B|\
\\u231A|\
\\u21AA|\
\\u270D|\
\\u21A9|\
\\u2199|\
\\u2198|\
\\u2197|\
\\u2196|\
\\u2195|\
\\u2194|\
\\u2139|\
\\u2122|\
\\u2049|\
\\u203C|\
\\u00AE|\
\\u00A9|\
\\u2763|\
\\u2721|\
\\u26F9|\
\\u26F8|\
\\u26F7|\
\\u26F4|\
\\u26F1|\
\\u26F0|\
\\u26E9|\
\\u23CF|\
\\u23ED|\
\\u23EE|\
\\u23EF|\
\\u23F1|\
\\u23F2|\
\\u23F8|\
\\u23F9|\
\\u23FA|\
\\u2602|\
\\u2603|\
\\u2604|\
\\u2618|\
\\u2620|\
\\u2622|\
\\u2623|\
\\u2626|\
\\u262A|\
\\u262E|\
\\u262F|\
\\u2638|\
\\u2639|\
\\u2692|\
\\u2694|\
\\u2696|\
\\u2697|\
\\u2699|\
\\u269B|\
\\u269C|\
\\u26B0|\
\\u26B1|\
\\u26C8|\
\\u26CF|\
\\u26D1|\
\\u26D3|\
\\u25AA';

const map = {
	'\uD83D\uDC69\u2764\uD83D\uDC8B\uD83D\uDC69': '1f469-2764-1f48b-1f469',
	'\uD83D\uDC68\u2764\uD83D\uDC8B\uD83D\uDC68': '1f468-2764-1f48b-1f468',
	'\uD83D\uDC68\uD83D\uDC68\uD83D\uDC66\uD83D\uDC66': '1f468-1f468-1f466-1f466',
	'\uD83D\uDC68\uD83D\uDC68\uD83D\uDC67\uD83D\uDC66': '1f468-1f468-1f467-1f466',
	'\uD83D\uDC68\uD83D\uDC68\uD83D\uDC67\uD83D\uDC67': '1f468-1f468-1f467-1f467',
	'\uD83D\uDC68\uD83D\uDC69\uD83D\uDC66\uD83D\uDC66': '1f468-1f469-1f466-1f466',
	'\uD83D\uDC68\uD83D\uDC69\uD83D\uDC67\uD83D\uDC66': '1f468-1f469-1f467-1f466',
	'\uD83D\uDC68\uD83D\uDC69\uD83D\uDC67\uD83D\uDC67': '1f468-1f469-1f467-1f467',
	'\uD83D\uDC69\uD83D\uDC69\uD83D\uDC66\uD83D\uDC66': '1f469-1f469-1f466-1f466',
	'\uD83D\uDC69\uD83D\uDC69\uD83D\uDC67\uD83D\uDC66': '1f469-1f469-1f467-1f466',
	'\uD83D\uDC69\uD83D\uDC69\uD83D\uDC67\uD83D\uDC67': '1f469-1f469-1f467-1f467',
	'\uD83D\uDC69\u2764\uD83D\uDC69': '1f469-2764-1f469',
	'\uD83D\uDC68\u2764\uD83D\uDC68': '1f468-2764-1f468',
	'\uD83D\uDC68\uD83D\uDC68\uD83D\uDC66': '1f468-1f468-1f466',
	'\uD83D\uDC68\uD83D\uDC68\uD83D\uDC67': '1f468-1f468-1f467',
	'\uD83D\uDC68\uD83D\uDC69\uD83D\uDC67': '1f468-1f469-1f467',
	'\uD83D\uDC69\uD83D\uDC69\uD83D\uDC66': '1f469-1f469-1f466',
	'\uD83D\uDC69\uD83D\uDC69\uD83D\uDC67': '1f469-1f469-1f467',
	'\uD83D\uDC41\uD83D\uDDE8': '1f441-1f5e8',
	'#\u20E3': '0023-20e3',
	'0\u20E3': '0030-20e3',
	'1\u20E3': '0031-20e3',
	'2\u20E3': '0032-20e3',
	'3\u20E3': '0033-20e3',
	'4\u20E3': '0034-20e3',
	'5\u20E3': '0035-20e3',
	'6\u20E3': '0036-20e3',
	'7\u20E3': '0037-20e3',
	'8\u20E3': '0038-20e3',
	'9\u20E3': '0039-20e3',
	'*\u20E3': '002a-20e3',
	'\uD83E\uDD3E\uD83C\uDFFF': '1f93e-1f3ff',
	'\uD83E\uDD3E\uD83C\uDFFE': '1f93e-1f3fe',
	'\uD83E\uDD3E\uD83C\uDFFD': '1f93e-1f3fd',
	'\uD83E\uDD3E\uD83C\uDFFC': '1f93e-1f3fc',
	'\uD83E\uDD3E\uD83C\uDFFB': '1f93e-1f3fb',
	'\uD83E\uDD3D\uD83C\uDFFF': '1f93d-1f3ff',
	'\uD83E\uDD3D\uD83C\uDFFE': '1f93d-1f3fe',
	'\uD83E\uDD3D\uD83C\uDFFD': '1f93d-1f3fd',
	'\uD83E\uDD3D\uD83C\uDFFC': '1f93d-1f3fc',
	'\uD83E\uDD3D\uD83C\uDFFB': '1f93d-1f3fb',
	'\uD83E\uDD3C\uD83C\uDFFF': '1f93c-1f3ff',
	'\uD83E\uDD3C\uD83C\uDFFE': '1f93c-1f3fe',
	'\uD83E\uDD3C\uD83C\uDFFD': '1f93c-1f3fd',
	'\uD83E\uDD3C\uD83C\uDFFC': '1f93c-1f3fc',
	'\uD83E\uDD3C\uD83C\uDFFB': '1f93c-1f3fb',
	'\uD83E\uDD39\uD83C\uDFFF': '1f939-1f3ff',
	'\uD83E\uDD39\uD83C\uDFFE': '1f939-1f3fe',
	'\uD83E\uDD39\uD83C\uDFFD': '1f939-1f3fd',
	'\uD83E\uDD39\uD83C\uDFFC': '1f939-1f3fc',
	'\uD83E\uDD39\uD83C\uDFFB': '1f939-1f3fb',
	'\uD83E\uDD38\uD83C\uDFFF': '1f938-1f3ff',
	'\uD83E\uDD38\uD83C\uDFFE': '1f938-1f3fe',
	'\uD83E\uDD38\uD83C\uDFFD': '1f938-1f3fd',
	'\uD83E\uDD38\uD83C\uDFFC': '1f938-1f3fc',
	'\uD83E\uDD38\uD83C\uDFFB': '1f938-1f3fb',
	'\uD83E\uDD37\uD83C\uDFFF': '1f937-1f3ff',
	'\uD83E\uDD37\uD83C\uDFFE': '1f937-1f3fe',
	'\uD83E\uDD37\uD83C\uDFFD': '1f937-1f3fd',
	'\uD83E\uDD37\uD83C\uDFFC': '1f937-1f3fc',
	'\uD83E\uDD37\uD83C\uDFFB': '1f937-1f3fb',
	'\uD83E\uDD36\uD83C\uDFFF': '1f936-1f3ff',
	'\uD83E\uDD36\uD83C\uDFFE': '1f936-1f3fe',
	'\uD83E\uDD36\uD83C\uDFFD': '1f936-1f3fd',
	'\uD83E\uDD36\uD83C\uDFFC': '1f936-1f3fc',
	'\uD83E\uDD36\uD83C\uDFFB': '1f936-1f3fb',
	'\uD83E\uDD35\uD83C\uDFFF': '1f935-1f3ff',
	'\uD83E\uDD35\uD83C\uDFFE': '1f935-1f3fe',
	'\uD83E\uDD35\uD83C\uDFFD': '1f935-1f3fd',
	'\uD83E\uDD35\uD83C\uDFFC': '1f935-1f3fc',
	'\uD83E\uDD35\uD83C\uDFFB': '1f935-1f3fb',
	'\uD83E\uDD34\uD83C\uDFFF': '1f934-1f3ff',
	'\uD83E\uDD34\uD83C\uDFFE': '1f934-1f3fe',
	'\uD83E\uDD34\uD83C\uDFFD': '1f934-1f3fd',
	'\uD83E\uDD34\uD83C\uDFFC': '1f934-1f3fc',
	'\uD83E\uDD34\uD83C\uDFFB': '1f934-1f3fb',
	'\uD83E\uDD33\uD83C\uDFFF': '1f933-1f3ff',
	'\uD83E\uDD33\uD83C\uDFFE': '1f933-1f3fe',
	'\uD83E\uDD33\uD83C\uDFFD': '1f933-1f3fd',
	'\uD83E\uDD33\uD83C\uDFFC': '1f933-1f3fc',
	'\uD83E\uDD33\uD83C\uDFFB': '1f933-1f3fb',
	'\uD83E\uDD30\uD83C\uDFFF': '1f930-1f3ff',
	'\uD83E\uDD30\uD83C\uDFFE': '1f930-1f3fe',
	'\uD83E\uDD30\uD83C\uDFFD': '1f930-1f3fd',
	'\uD83E\uDD30\uD83C\uDFFC': '1f930-1f3fc',
	'\uD83E\uDD30\uD83C\uDFFB': '1f930-1f3fb',
	'\uD83E\uDD26\uD83C\uDFFF': '1f926-1f3ff',
	'\uD83E\uDD26\uD83C\uDFFE': '1f926-1f3fe',
	'\uD83E\uDD26\uD83C\uDFFD': '1f926-1f3fd',
	'\uD83E\uDD26\uD83C\uDFFC': '1f926-1f3fc',
	'\uD83E\uDD26\uD83C\uDFFB': '1f926-1f3fb',
	'\uD83E\uDD1E\uD83C\uDFFF': '1f91e-1f3ff',
	'\uD83E\uDD1E\uD83C\uDFFE': '1f91e-1f3fe',
	'\uD83E\uDD1E\uD83C\uDFFD': '1f91e-1f3fd',
	'\uD83E\uDD1E\uD83C\uDFFC': '1f91e-1f3fc',
	'\uD83E\uDD1E\uD83C\uDFFB': '1f91e-1f3fb',
	'\uD83E\uDD1D\uD83C\uDFFF': '1f91d-1f3ff',
	'\uD83E\uDD1D\uD83C\uDFFE': '1f91d-1f3fe',
	'\uD83E\uDD1D\uD83C\uDFFD': '1f91d-1f3fd',
	'\uD83E\uDD1D\uD83C\uDFFC': '1f91d-1f3fc',
	'\uD83E\uDD1D\uD83C\uDFFB': '1f91d-1f3fb',
	'\uD83E\uDD1C\uD83C\uDFFF': '1f91c-1f3ff',
	'\uD83E\uDD1C\uD83C\uDFFE': '1f91c-1f3fe',
	'\uD83E\uDD1C\uD83C\uDFFD': '1f91c-1f3fd',
	'\uD83E\uDD1C\uD83C\uDFFC': '1f91c-1f3fc',
	'\uD83E\uDD1C\uD83C\uDFFB': '1f91c-1f3fb',
	'\uD83E\uDD1B\uD83C\uDFFF': '1f91b-1f3ff',
	'\uD83E\uDD1B\uD83C\uDFFE': '1f91b-1f3fe',
	'\uD83E\uDD1B\uD83C\uDFFD': '1f91b-1f3fd',
	'\uD83E\uDD1B\uD83C\uDFFC': '1f91b-1f3fc',
	'\uD83E\uDD1B\uD83C\uDFFB': '1f91b-1f3fb',
	'\uD83E\uDD1A\uD83C\uDFFF': '1f91a-1f3ff',
	'\uD83E\uDD1A\uD83C\uDFFE': '1f91a-1f3fe',
	'\uD83E\uDD1A\uD83C\uDFFD': '1f91a-1f3fd',
	'\uD83E\uDD1A\uD83C\uDFFC': '1f91a-1f3fc',
	'\uD83E\uDD1A\uD83C\uDFFB': '1f91a-1f3fb',
	'\uD83E\uDD19\uD83C\uDFFF': '1f919-1f3ff',
	'\uD83E\uDD19\uD83C\uDFFE': '1f919-1f3fe',
	'\uD83E\uDD19\uD83C\uDFFD': '1f919-1f3fd',
	'\uD83E\uDD19\uD83C\uDFFC': '1f919-1f3fc',
	'\uD83E\uDD19\uD83C\uDFFB': '1f919-1f3fb',
	'\uD83E\uDD18\uD83C\uDFFF': '1f918-1f3ff',
	'\uD83E\uDD18\uD83C\uDFFE': '1f918-1f3fe',
	'\uD83E\uDD18\uD83C\uDFFD': '1f918-1f3fd',
	'\uD83E\uDD18\uD83C\uDFFC': '1f918-1f3fc',
	'\uD83E\uDD18\uD83C\uDFFB': '1f918-1f3fb',
	'\uD83D\uDEC0\uD83C\uDFFF': '1f6c0-1f3ff',
	'\uD83D\uDEC0\uD83C\uDFFE': '1f6c0-1f3fe',
	'\uD83D\uDEC0\uD83C\uDFFD': '1f6c0-1f3fd',
	'\uD83D\uDEC0\uD83C\uDFFC': '1f6c0-1f3fc',
	'\uD83D\uDEC0\uD83C\uDFFB': '1f6c0-1f3fb',
	'\uD83D\uDEB6\uD83C\uDFFF': '1f6b6-1f3ff',
	'\uD83D\uDEB6\uD83C\uDFFE': '1f6b6-1f3fe',
	'\uD83D\uDEB6\uD83C\uDFFD': '1f6b6-1f3fd',
	'\uD83D\uDEB6\uD83C\uDFFC': '1f6b6-1f3fc',
	'\uD83D\uDEB6\uD83C\uDFFB': '1f6b6-1f3fb',
	'\uD83D\uDEB5\uD83C\uDFFF': '1f6b5-1f3ff',
	'\uD83D\uDEB5\uD83C\uDFFE': '1f6b5-1f3fe',
	'\uD83D\uDEB5\uD83C\uDFFD': '1f6b5-1f3fd',
	'\uD83D\uDEB5\uD83C\uDFFC': '1f6b5-1f3fc',
	'\uD83D\uDEB5\uD83C\uDFFB': '1f6b5-1f3fb',
	'\uD83D\uDEB4\uD83C\uDFFF': '1f6b4-1f3ff',
	'\uD83D\uDEB4\uD83C\uDFFE': '1f6b4-1f3fe',
	'\uD83D\uDEB4\uD83C\uDFFD': '1f6b4-1f3fd',
	'\uD83D\uDEB4\uD83C\uDFFC': '1f6b4-1f3fc',
	'\uD83D\uDEB4\uD83C\uDFFB': '1f6b4-1f3fb',
	'\uD83D\uDEA3\uD83C\uDFFF': '1f6a3-1f3ff',
	'\uD83D\uDEA3\uD83C\uDFFE': '1f6a3-1f3fe',
	'\uD83D\uDEA3\uD83C\uDFFD': '1f6a3-1f3fd',
	'\uD83D\uDEA3\uD83C\uDFFC': '1f6a3-1f3fc',
	'\uD83D\uDEA3\uD83C\uDFFB': '1f6a3-1f3fb',
	'\uD83D\uDE4F\uD83C\uDFFF': '1f64f-1f3ff',
	'\uD83D\uDE4F\uD83C\uDFFE': '1f64f-1f3fe',
	'\uD83D\uDE4F\uD83C\uDFFD': '1f64f-1f3fd',
	'\uD83D\uDE4F\uD83C\uDFFC': '1f64f-1f3fc',
	'\uD83D\uDE4F\uD83C\uDFFB': '1f64f-1f3fb',
	'\uD83D\uDE4E\uD83C\uDFFF': '1f64e-1f3ff',
	'\uD83D\uDE4E\uD83C\uDFFE': '1f64e-1f3fe',
	'\uD83D\uDE4E\uD83C\uDFFD': '1f64e-1f3fd',
	'\uD83D\uDE4E\uD83C\uDFFC': '1f64e-1f3fc',
	'\uD83D\uDE4E\uD83C\uDFFB': '1f64e-1f3fb',
	'\uD83D\uDE4D\uD83C\uDFFF': '1f64d-1f3ff',
	'\uD83D\uDE4D\uD83C\uDFFE': '1f64d-1f3fe',
	'\uD83D\uDE4D\uD83C\uDFFD': '1f64d-1f3fd',
	'\uD83D\uDE4D\uD83C\uDFFC': '1f64d-1f3fc',
	'\uD83D\uDE4D\uD83C\uDFFB': '1f64d-1f3fb',
	'\uD83D\uDE4C\uD83C\uDFFF': '1f64c-1f3ff',
	'\uD83D\uDE4C\uD83C\uDFFE': '1f64c-1f3fe',
	'\uD83D\uDE4C\uD83C\uDFFD': '1f64c-1f3fd',
	'\uD83D\uDE4C\uD83C\uDFFC': '1f64c-1f3fc',
	'\uD83D\uDE4C\uD83C\uDFFB': '1f64c-1f3fb',
	'\uD83D\uDE4B\uD83C\uDFFF': '1f64b-1f3ff',
	'\uD83D\uDE4B\uD83C\uDFFE': '1f64b-1f3fe',
	'\uD83D\uDE4B\uD83C\uDFFD': '1f64b-1f3fd',
	'\uD83D\uDE4B\uD83C\uDFFC': '1f64b-1f3fc',
	'\uD83D\uDE4B\uD83C\uDFFB': '1f64b-1f3fb',
	'\uD83D\uDE47\uD83C\uDFFF': '1f647-1f3ff',
	'\uD83D\uDE47\uD83C\uDFFE': '1f647-1f3fe',
	'\uD83D\uDE47\uD83C\uDFFD': '1f647-1f3fd',
	'\uD83D\uDE47\uD83C\uDFFC': '1f647-1f3fc',
	'\uD83D\uDE47\uD83C\uDFFB': '1f647-1f3fb',
	'\uD83D\uDE46\uD83C\uDFFF': '1f646-1f3ff',
	'\uD83D\uDE46\uD83C\uDFFE': '1f646-1f3fe',
	'\uD83D\uDE46\uD83C\uDFFD': '1f646-1f3fd',
	'\uD83D\uDE46\uD83C\uDFFC': '1f646-1f3fc',
	'\uD83D\uDE46\uD83C\uDFFB': '1f646-1f3fb',
	'\uD83D\uDE45\uD83C\uDFFF': '1f645-1f3ff',
	'\uD83D\uDE45\uD83C\uDFFE': '1f645-1f3fe',
	'\uD83D\uDE45\uD83C\uDFFD': '1f645-1f3fd',
	'\uD83D\uDE45\uD83C\uDFFC': '1f645-1f3fc',
	'\uD83D\uDE45\uD83C\uDFFB': '1f645-1f3fb',
	'\uD83D\uDD96\uD83C\uDFFF': '1f596-1f3ff',
	'\uD83D\uDD96\uD83C\uDFFE': '1f596-1f3fe',
	'\uD83D\uDD96\uD83C\uDFFD': '1f596-1f3fd',
	'\uD83D\uDD96\uD83C\uDFFC': '1f596-1f3fc',
	'\uD83D\uDD96\uD83C\uDFFB': '1f596-1f3fb',
	'\uD83D\uDD95\uD83C\uDFFF': '1f595-1f3ff',
	'\uD83D\uDD95\uD83C\uDFFE': '1f595-1f3fe',
	'\uD83D\uDD95\uD83C\uDFFD': '1f595-1f3fd',
	'\uD83D\uDD95\uD83C\uDFFC': '1f595-1f3fc',
	'\uD83D\uDD95\uD83C\uDFFB': '1f595-1f3fb',
	'\uD83D\uDD90\uD83C\uDFFF': '1f590-1f3ff',
	'\uD83D\uDD90\uD83C\uDFFE': '1f590-1f3fe',
	'\uD83D\uDD90\uD83C\uDFFD': '1f590-1f3fd',
	'\uD83D\uDD90\uD83C\uDFFC': '1f590-1f3fc',
	'\uD83D\uDD90\uD83C\uDFFB': '1f590-1f3fb',
	'\uD83D\uDD7A\uD83C\uDFFF': '1f57a-1f3ff',
	'\uD83D\uDD7A\uD83C\uDFFE': '1f57a-1f3fe',
	'\uD83D\uDD7A\uD83C\uDFFD': '1f57a-1f3fd',
	'\uD83D\uDD7A\uD83C\uDFFC': '1f57a-1f3fc',
	'\uD83D\uDD7A\uD83C\uDFFB': '1f57a-1f3fb',
	'\uD83D\uDD75\uD83C\uDFFF': '1f575-1f3ff',
	'\uD83D\uDD75\uD83C\uDFFE': '1f575-1f3fe',
	'\uD83D\uDD75\uD83C\uDFFD': '1f575-1f3fd',
	'\uD83D\uDD75\uD83C\uDFFC': '1f575-1f3fc',
	'\uD83D\uDD75\uD83C\uDFFB': '1f575-1f3fb',
	'\uD83D\uDCAA\uD83C\uDFFF': '1f4aa-1f3ff',
	'\uD83D\uDCAA\uD83C\uDFFE': '1f4aa-1f3fe',
	'\uD83D\uDCAA\uD83C\uDFFD': '1f4aa-1f3fd',
	'\uD83D\uDCAA\uD83C\uDFFC': '1f4aa-1f3fc',
	'\uD83D\uDCAA\uD83C\uDFFB': '1f4aa-1f3fb',
	'\uD83D\uDC87\uD83C\uDFFF': '1f487-1f3ff',
	'\uD83D\uDC87\uD83C\uDFFE': '1f487-1f3fe',
	'\uD83D\uDC87\uD83C\uDFFD': '1f487-1f3fd',
	'\uD83D\uDC87\uD83C\uDFFC': '1f487-1f3fc',
	'\uD83D\uDC87\uD83C\uDFFB': '1f487-1f3fb',
	'\uD83D\uDC86\uD83C\uDFFF': '1f486-1f3ff',
	'\uD83D\uDC86\uD83C\uDFFE': '1f486-1f3fe',
	'\uD83D\uDC86\uD83C\uDFFD': '1f486-1f3fd',
	'\uD83D\uDC86\uD83C\uDFFC': '1f486-1f3fc',
	'\uD83D\uDC86\uD83C\uDFFB': '1f486-1f3fb',
	'\uD83D\uDC85\uD83C\uDFFF': '1f485-1f3ff',
	'\uD83D\uDC85\uD83C\uDFFE': '1f485-1f3fe',
	'\uD83D\uDC85\uD83C\uDFFD': '1f485-1f3fd',
	'\uD83D\uDC85\uD83C\uDFFC': '1f485-1f3fc',
	'\uD83D\uDC85\uD83C\uDFFB': '1f485-1f3fb',
	'\uD83D\uDC83\uD83C\uDFFF': '1f483-1f3ff',
	'\uD83D\uDC83\uD83C\uDFFE': '1f483-1f3fe',
	'\uD83D\uDC83\uD83C\uDFFD': '1f483-1f3fd',
	'\uD83D\uDC83\uD83C\uDFFC': '1f483-1f3fc',
	'\uD83D\uDC83\uD83C\uDFFB': '1f483-1f3fb',
	'\uD83D\uDC82\uD83C\uDFFF': '1f482-1f3ff',
	'\uD83D\uDC82\uD83C\uDFFE': '1f482-1f3fe',
	'\uD83D\uDC82\uD83C\uDFFD': '1f482-1f3fd',
	'\uD83D\uDC82\uD83C\uDFFC': '1f482-1f3fc',
	'\uD83D\uDC82\uD83C\uDFFB': '1f482-1f3fb',
	'\uD83D\uDC81\uD83C\uDFFF': '1f481-1f3ff',
	'\uD83D\uDC81\uD83C\uDFFE': '1f481-1f3fe',
	'\uD83D\uDC81\uD83C\uDFFD': '1f481-1f3fd',
	'\uD83D\uDC81\uD83C\uDFFC': '1f481-1f3fc',
	'\uD83D\uDC81\uD83C\uDFFB': '1f481-1f3fb',
	'\uD83D\uDC7C\uD83C\uDFFF': '1f47c-1f3ff',
	'\uD83D\uDC7C\uD83C\uDFFE': '1f47c-1f3fe',
	'\uD83D\uDC7C\uD83C\uDFFD': '1f47c-1f3fd',
	'\uD83D\uDC7C\uD83C\uDFFC': '1f47c-1f3fc',
	'\uD83D\uDC7C\uD83C\uDFFB': '1f47c-1f3fb',
	'\uD83D\uDC78\uD83C\uDFFF': '1f478-1f3ff',
	'\uD83D\uDC78\uD83C\uDFFE': '1f478-1f3fe',
	'\uD83D\uDC78\uD83C\uDFFD': '1f478-1f3fd',
	'\uD83D\uDC78\uD83C\uDFFC': '1f478-1f3fc',
	'\uD83D\uDC78\uD83C\uDFFB': '1f478-1f3fb',
	'\uD83D\uDC77\uD83C\uDFFF': '1f477-1f3ff',
	'\uD83D\uDC77\uD83C\uDFFE': '1f477-1f3fe',
	'\uD83D\uDC77\uD83C\uDFFD': '1f477-1f3fd',
	'\uD83D\uDC77\uD83C\uDFFC': '1f477-1f3fc',
	'\uD83D\uDC77\uD83C\uDFFB': '1f477-1f3fb',
	'\uD83D\uDC76\uD83C\uDFFF': '1f476-1f3ff',
	'\uD83D\uDC76\uD83C\uDFFE': '1f476-1f3fe',
	'\uD83D\uDC76\uD83C\uDFFD': '1f476-1f3fd',
	'\uD83D\uDC76\uD83C\uDFFC': '1f476-1f3fc',
	'\uD83D\uDC76\uD83C\uDFFB': '1f476-1f3fb',
	'\uD83D\uDC75\uD83C\uDFFF': '1f475-1f3ff',
	'\uD83D\uDC75\uD83C\uDFFE': '1f475-1f3fe',
	'\uD83D\uDC75\uD83C\uDFFD': '1f475-1f3fd',
	'\uD83D\uDC75\uD83C\uDFFC': '1f475-1f3fc',
	'\uD83D\uDC75\uD83C\uDFFB': '1f475-1f3fb',
	'\uD83D\uDC74\uD83C\uDFFF': '1f474-1f3ff',
	'\uD83D\uDC74\uD83C\uDFFE': '1f474-1f3fe',
	'\uD83D\uDC74\uD83C\uDFFD': '1f474-1f3fd',
	'\uD83D\uDC74\uD83C\uDFFC': '1f474-1f3fc',
	'\uD83D\uDC74\uD83C\uDFFB': '1f474-1f3fb',
	'\uD83D\uDC73\uD83C\uDFFF': '1f473-1f3ff',
	'\uD83D\uDC73\uD83C\uDFFE': '1f473-1f3fe',
	'\uD83D\uDC73\uD83C\uDFFD': '1f473-1f3fd',
	'\uD83D\uDC73\uD83C\uDFFC': '1f473-1f3fc',
	'\uD83D\uDC73\uD83C\uDFFB': '1f473-1f3fb',
	'\uD83D\uDC72\uD83C\uDFFF': '1f472-1f3ff',
	'\uD83D\uDC72\uD83C\uDFFE': '1f472-1f3fe',
	'\uD83D\uDC72\uD83C\uDFFD': '1f472-1f3fd',
	'\uD83D\uDC72\uD83C\uDFFC': '1f472-1f3fc',
	'\uD83D\uDC72\uD83C\uDFFB': '1f472-1f3fb',
	'\uD83D\uDC71\uD83C\uDFFF': '1f471-1f3ff',
	'\uD83D\uDC71\uD83C\uDFFE': '1f471-1f3fe',
	'\uD83D\uDC71\uD83C\uDFFD': '1f471-1f3fd',
	'\uD83D\uDC71\uD83C\uDFFC': '1f471-1f3fc',
	'\uD83D\uDC71\uD83C\uDFFB': '1f471-1f3fb',
	'\uD83D\uDC70\uD83C\uDFFF': '1f470-1f3ff',
	'\uD83D\uDC70\uD83C\uDFFE': '1f470-1f3fe',
	'\uD83D\uDC70\uD83C\uDFFD': '1f470-1f3fd',
	'\uD83D\uDC70\uD83C\uDFFC': '1f470-1f3fc',
	'\uD83D\uDC70\uD83C\uDFFB': '1f470-1f3fb',
	'\uD83D\uDC6E\uD83C\uDFFF': '1f46e-1f3ff',
	'\uD83D\uDC6E\uD83C\uDFFE': '1f46e-1f3fe',
	'\uD83D\uDC6E\uD83C\uDFFD': '1f46e-1f3fd',
	'\uD83D\uDC6E\uD83C\uDFFC': '1f46e-1f3fc',
	'\uD83D\uDC6E\uD83C\uDFFB': '1f46e-1f3fb',
	'\uD83D\uDC69\uD83C\uDFFF': '1f469-1f3ff',
	'\uD83D\uDC69\uD83C\uDFFE': '1f469-1f3fe',
	'\uD83D\uDC69\uD83C\uDFFD': '1f469-1f3fd',
	'\uD83D\uDC69\uD83C\uDFFC': '1f469-1f3fc',
	'\uD83D\uDC69\uD83C\uDFFB': '1f469-1f3fb',
	'\uD83D\uDC68\uD83C\uDFFF': '1f468-1f3ff',
	'\uD83D\uDC68\uD83C\uDFFE': '1f468-1f3fe',
	'\uD83D\uDC68\uD83C\uDFFD': '1f468-1f3fd',
	'\uD83D\uDC68\uD83C\uDFFC': '1f468-1f3fc',
	'\uD83D\uDC68\uD83C\uDFFB': '1f468-1f3fb',
	'\uD83D\uDC67\uD83C\uDFFF': '1f467-1f3ff',
	'\uD83D\uDC67\uD83C\uDFFE': '1f467-1f3fe',
	'\uD83D\uDC67\uD83C\uDFFD': '1f467-1f3fd',
	'\uD83D\uDC67\uD83C\uDFFC': '1f467-1f3fc',
	'\uD83D\uDC67\uD83C\uDFFB': '1f467-1f3fb',
	'\uD83D\uDC66\uD83C\uDFFF': '1f466-1f3ff',
	'\uD83D\uDC66\uD83C\uDFFE': '1f466-1f3fe',
	'\uD83D\uDC66\uD83C\uDFFD': '1f466-1f3fd',
	'\uD83D\uDC66\uD83C\uDFFC': '1f466-1f3fc',
	'\uD83D\uDC66\uD83C\uDFFB': '1f466-1f3fb',
	'\uD83D\uDC50\uD83C\uDFFF': '1f450-1f3ff',
	'\uD83D\uDC50\uD83C\uDFFE': '1f450-1f3fe',
	'\uD83D\uDC50\uD83C\uDFFD': '1f450-1f3fd',
	'\uD83D\uDC50\uD83C\uDFFC': '1f450-1f3fc',
	'\uD83D\uDC50\uD83C\uDFFB': '1f450-1f3fb',
	'\uD83D\uDC4F\uD83C\uDFFF': '1f44f-1f3ff',
	'\uD83D\uDC4F\uD83C\uDFFE': '1f44f-1f3fe',
	'\uD83D\uDC4F\uD83C\uDFFD': '1f44f-1f3fd',
	'\uD83D\uDC4F\uD83C\uDFFC': '1f44f-1f3fc',
	'\uD83D\uDC4F\uD83C\uDFFB': '1f44f-1f3fb',
	'\uD83D\uDC4E\uD83C\uDFFF': '1f44e-1f3ff',
	'\uD83D\uDC4E\uD83C\uDFFE': '1f44e-1f3fe',
	'\uD83D\uDC4E\uD83C\uDFFD': '1f44e-1f3fd',
	'\uD83D\uDC4E\uD83C\uDFFC': '1f44e-1f3fc',
	'\uD83D\uDC4E\uD83C\uDFFB': '1f44e-1f3fb',
	'\uD83D\uDC4D\uD83C\uDFFF': '1f44d-1f3ff',
	'\uD83D\uDC4D\uD83C\uDFFE': '1f44d-1f3fe',
	'\uD83D\uDC4D\uD83C\uDFFD': '1f44d-1f3fd',
	'\uD83D\uDC4D\uD83C\uDFFC': '1f44d-1f3fc',
	'\uD83D\uDC4D\uD83C\uDFFB': '1f44d-1f3fb',
	'\uD83D\uDC4C\uD83C\uDFFF': '1f44c-1f3ff',
	'\uD83D\uDC4C\uD83C\uDFFE': '1f44c-1f3fe',
	'\uD83D\uDC4C\uD83C\uDFFD': '1f44c-1f3fd',
	'\uD83D\uDC4C\uD83C\uDFFC': '1f44c-1f3fc',
	'\uD83D\uDC4C\uD83C\uDFFB': '1f44c-1f3fb',
	'\uD83D\uDC4B\uD83C\uDFFF': '1f44b-1f3ff',
	'\uD83D\uDC4B\uD83C\uDFFE': '1f44b-1f3fe',
	'\uD83D\uDC4B\uD83C\uDFFD': '1f44b-1f3fd',
	'\uD83D\uDC4B\uD83C\uDFFC': '1f44b-1f3fc',
	'\uD83D\uDC4B\uD83C\uDFFB': '1f44b-1f3fb',
	'\uD83D\uDC4A\uD83C\uDFFF': '1f44a-1f3ff',
	'\uD83D\uDC4A\uD83C\uDFFE': '1f44a-1f3fe',
	'\uD83D\uDC4A\uD83C\uDFFD': '1f44a-1f3fd',
	'\uD83D\uDC4A\uD83C\uDFFC': '1f44a-1f3fc',
	'\uD83D\uDC4A\uD83C\uDFFB': '1f44a-1f3fb',
	'\uD83D\uDC49\uD83C\uDFFF': '1f449-1f3ff',
	'\uD83D\uDC49\uD83C\uDFFE': '1f449-1f3fe',
	'\uD83D\uDC49\uD83C\uDFFD': '1f449-1f3fd',
	'\uD83D\uDC49\uD83C\uDFFC': '1f449-1f3fc',
	'\uD83D\uDC49\uD83C\uDFFB': '1f449-1f3fb',
	'\uD83D\uDC48\uD83C\uDFFF': '1f448-1f3ff',
	'\uD83D\uDC48\uD83C\uDFFE': '1f448-1f3fe',
	'\uD83D\uDC48\uD83C\uDFFD': '1f448-1f3fd',
	'\uD83D\uDC48\uD83C\uDFFC': '1f448-1f3fc',
	'\uD83D\uDC48\uD83C\uDFFB': '1f448-1f3fb',
	'\uD83D\uDC47\uD83C\uDFFF': '1f447-1f3ff',
	'\uD83D\uDC47\uD83C\uDFFE': '1f447-1f3fe',
	'\uD83D\uDC47\uD83C\uDFFD': '1f447-1f3fd',
	'\uD83D\uDC47\uD83C\uDFFC': '1f447-1f3fc',
	'\uD83D\uDC47\uD83C\uDFFB': '1f447-1f3fb',
	'\uD83D\uDC46\uD83C\uDFFF': '1f446-1f3ff',
	'\uD83D\uDC46\uD83C\uDFFE': '1f446-1f3fe',
	'\uD83D\uDC46\uD83C\uDFFD': '1f446-1f3fd',
	'\uD83D\uDC46\uD83C\uDFFC': '1f446-1f3fc',
	'\uD83D\uDC46\uD83C\uDFFB': '1f446-1f3fb',
	'\uD83D\uDC43\uD83C\uDFFF': '1f443-1f3ff',
	'\uD83D\uDC43\uD83C\uDFFE': '1f443-1f3fe',
	'\uD83D\uDC43\uD83C\uDFFD': '1f443-1f3fd',
	'\uD83D\uDC43\uD83C\uDFFC': '1f443-1f3fc',
	'\uD83D\uDC43\uD83C\uDFFB': '1f443-1f3fb',
	'\uD83D\uDC42\uD83C\uDFFF': '1f442-1f3ff',
	'\uD83D\uDC42\uD83C\uDFFE': '1f442-1f3fe',
	'\uD83D\uDC42\uD83C\uDFFD': '1f442-1f3fd',
	'\uD83D\uDC42\uD83C\uDFFC': '1f442-1f3fc',
	'\uD83D\uDC42\uD83C\uDFFB': '1f442-1f3fb',
	'\uD83C\uDFF3\uD83C\uDF08': '1f3f3-1f308',
	'\uD83C\uDFCB\uD83C\uDFFF': '1f3cb-1f3ff',
	'\uD83C\uDFCB\uD83C\uDFFE': '1f3cb-1f3fe',
	'\uD83C\uDFCB\uD83C\uDFFD': '1f3cb-1f3fd',
	'\uD83C\uDFCB\uD83C\uDFFC': '1f3cb-1f3fc',
	'\uD83C\uDFCB\uD83C\uDFFB': '1f3cb-1f3fb',
	'\uD83C\uDFCA\uD83C\uDFFF': '1f3ca-1f3ff',
	'\uD83C\uDFCA\uD83C\uDFFE': '1f3ca-1f3fe',
	'\uD83C\uDFCA\uD83C\uDFFD': '1f3ca-1f3fd',
	'\uD83C\uDFCA\uD83C\uDFFC': '1f3ca-1f3fc',
	'\uD83C\uDFCA\uD83C\uDFFB': '1f3ca-1f3fb',
	'\uD83C\uDFC7\uD83C\uDFFF': '1f3c7-1f3ff',
	'\uD83C\uDFC7\uD83C\uDFFE': '1f3c7-1f3fe',
	'\uD83C\uDFC7\uD83C\uDFFD': '1f3c7-1f3fd',
	'\uD83C\uDFC7\uD83C\uDFFC': '1f3c7-1f3fc',
	'\uD83C\uDFC7\uD83C\uDFFB': '1f3c7-1f3fb',
	'\uD83C\uDFC4\uD83C\uDFFF': '1f3c4-1f3ff',
	'\uD83C\uDFC4\uD83C\uDFFE': '1f3c4-1f3fe',
	'\uD83C\uDFC4\uD83C\uDFFD': '1f3c4-1f3fd',
	'\uD83C\uDFC4\uD83C\uDFFC': '1f3c4-1f3fc',
	'\uD83C\uDFC4\uD83C\uDFFB': '1f3c4-1f3fb',
	'\uD83C\uDFC3\uD83C\uDFFF': '1f3c3-1f3ff',
	'\uD83C\uDFC3\uD83C\uDFFE': '1f3c3-1f3fe',
	'\uD83C\uDFC3\uD83C\uDFFD': '1f3c3-1f3fd',
	'\uD83C\uDFC3\uD83C\uDFFC': '1f3c3-1f3fc',
	'\uD83C\uDFC3\uD83C\uDFFB': '1f3c3-1f3fb',
	'\uD83C\uDF85\uD83C\uDFFF': '1f385-1f3ff',
	'\uD83C\uDF85\uD83C\uDFFE': '1f385-1f3fe',
	'\uD83C\uDF85\uD83C\uDFFD': '1f385-1f3fd',
	'\uD83C\uDF85\uD83C\uDFFC': '1f385-1f3fc',
	'\uD83C\uDF85\uD83C\uDFFB': '1f385-1f3fb',
	'\uD83C\uDDFF\uD83C\uDDFC': '1f1ff-1f1fc',
	'\uD83C\uDDFF\uD83C\uDDF2': '1f1ff-1f1f2',
	'\uD83C\uDDFF\uD83C\uDDE6': '1f1ff-1f1e6',
	'\uD83C\uDDFE\uD83C\uDDF9': '1f1fe-1f1f9',
	'\uD83C\uDDFE\uD83C\uDDEA': '1f1fe-1f1ea',
	'\uD83C\uDDFD\uD83C\uDDF0': '1f1fd-1f1f0',
	'\uD83C\uDDFC\uD83C\uDDF8': '1f1fc-1f1f8',
	'\uD83C\uDDFC\uD83C\uDDEB': '1f1fc-1f1eb',
	'\uD83C\uDDFB\uD83C\uDDFA': '1f1fb-1f1fa',
	'\uD83C\uDDFB\uD83C\uDDF3': '1f1fb-1f1f3',
	'\uD83C\uDDFB\uD83C\uDDEE': '1f1fb-1f1ee',
	'\uD83C\uDDFB\uD83C\uDDEC': '1f1fb-1f1ec',
	'\uD83C\uDDFB\uD83C\uDDEA': '1f1fb-1f1ea',
	'\uD83C\uDDFB\uD83C\uDDE8': '1f1fb-1f1e8',
	'\uD83C\uDDFB\uD83C\uDDE6': '1f1fb-1f1e6',
	'\uD83C\uDDFA\uD83C\uDDFF': '1f1fa-1f1ff',
	'\uD83C\uDDFA\uD83C\uDDFE': '1f1fa-1f1fe',
	'\uD83C\uDDFA\uD83C\uDDF8': '1f1fa-1f1f8',
	'\uD83C\uDDFA\uD83C\uDDF2': '1f1fa-1f1f2',
	'\uD83C\uDDFA\uD83C\uDDEC': '1f1fa-1f1ec',
	'\uD83C\uDDFA\uD83C\uDDE6': '1f1fa-1f1e6',
	'\uD83C\uDDF9\uD83C\uDDFF': '1f1f9-1f1ff',
	'\uD83C\uDDF9\uD83C\uDDFC': '1f1f9-1f1fc',
	'\uD83C\uDDF9\uD83C\uDDFB': '1f1f9-1f1fb',
	'\uD83C\uDDF9\uD83C\uDDF9': '1f1f9-1f1f9',
	'\uD83C\uDDF9\uD83C\uDDF7': '1f1f9-1f1f7',
	'\uD83C\uDDF9\uD83C\uDDF4': '1f1f9-1f1f4',
	'\uD83C\uDDF9\uD83C\uDDF3': '1f1f9-1f1f3',
	'\uD83C\uDDF9\uD83C\uDDF2': '1f1f9-1f1f2',
	'\uD83C\uDDF9\uD83C\uDDF1': '1f1f9-1f1f1',
	'\uD83C\uDDF9\uD83C\uDDF0': '1f1f9-1f1f0',
	'\uD83C\uDDF9\uD83C\uDDEF': '1f1f9-1f1ef',
	'\uD83C\uDDF9\uD83C\uDDED': '1f1f9-1f1ed',
	'\uD83C\uDDF9\uD83C\uDDEC': '1f1f9-1f1ec',
	'\uD83C\uDDF9\uD83C\uDDEB': '1f1f9-1f1eb',
	'\uD83C\uDDF9\uD83C\uDDE9': '1f1f9-1f1e9',
	'\uD83C\uDDF9\uD83C\uDDE8': '1f1f9-1f1e8',
	'\uD83C\uDDF9\uD83C\uDDE6': '1f1f9-1f1e6',
	'\uD83C\uDDF8\uD83C\uDDFF': '1f1f8-1f1ff',
	'\uD83C\uDDF8\uD83C\uDDFE': '1f1f8-1f1fe',
	'\uD83C\uDDF8\uD83C\uDDFD': '1f1f8-1f1fd',
	'\uD83C\uDDF8\uD83C\uDDFB': '1f1f8-1f1fb',
	'\uD83C\uDDF8\uD83C\uDDF9': '1f1f8-1f1f9',
	'\uD83C\uDDF8\uD83C\uDDF8': '1f1f8-1f1f8',
	'\uD83C\uDDF8\uD83C\uDDF7': '1f1f8-1f1f7',
	'\uD83C\uDDF8\uD83C\uDDF4': '1f1f8-1f1f4',
	'\uD83C\uDDF8\uD83C\uDDF3': '1f1f8-1f1f3',
	'\uD83C\uDDF8\uD83C\uDDF2': '1f1f8-1f1f2',
	'\uD83C\uDDF8\uD83C\uDDF1': '1f1f8-1f1f1',
	'\uD83C\uDDF8\uD83C\uDDF0': '1f1f8-1f1f0',
	'\uD83C\uDDF8\uD83C\uDDEF': '1f1f8-1f1ef',
	'\uD83C\uDDF8\uD83C\uDDEE': '1f1f8-1f1ee',
	'\uD83C\uDDF8\uD83C\uDDED': '1f1f8-1f1ed',
	'\uD83C\uDDF8\uD83C\uDDEC': '1f1f8-1f1ec',
	'\uD83C\uDDF8\uD83C\uDDEA': '1f1f8-1f1ea',
	'\uD83C\uDDF8\uD83C\uDDE9': '1f1f8-1f1e9',
	'\uD83C\uDDF8\uD83C\uDDE8': '1f1f8-1f1e8',
	'\uD83C\uDDF8\uD83C\uDDE7': '1f1f8-1f1e7',
	'\uD83C\uDDF8\uD83C\uDDE6': '1f1f8-1f1e6',
	'\uD83C\uDDF7\uD83C\uDDFC': '1f1f7-1f1fc',
	'\uD83C\uDDF7\uD83C\uDDFA': '1f1f7-1f1fa',
	'\uD83C\uDDF7\uD83C\uDDF8': '1f1f7-1f1f8',
	'\uD83C\uDDF7\uD83C\uDDF4': '1f1f7-1f1f4',
	'\uD83C\uDDF7\uD83C\uDDEA': '1f1f7-1f1ea',
	'\uD83C\uDDF6\uD83C\uDDE6': '1f1f6-1f1e6',
	'\uD83C\uDDF5\uD83C\uDDFE': '1f1f5-1f1fe',
	'\uD83C\uDDF5\uD83C\uDDFC': '1f1f5-1f1fc',
	'\uD83C\uDDF5\uD83C\uDDF9': '1f1f5-1f1f9',
	'\uD83C\uDDF5\uD83C\uDDF8': '1f1f5-1f1f8',
	'\uD83C\uDDF5\uD83C\uDDF7': '1f1f5-1f1f7',
	'\uD83C\uDDF5\uD83C\uDDF3': '1f1f5-1f1f3',
	'\uD83C\uDDF5\uD83C\uDDF2': '1f1f5-1f1f2',
	'\uD83C\uDDF5\uD83C\uDDF1': '1f1f5-1f1f1',
	'\uD83C\uDDF5\uD83C\uDDF0': '1f1f5-1f1f0',
	'\uD83C\uDDF5\uD83C\uDDED': '1f1f5-1f1ed',
	'\uD83C\uDDF5\uD83C\uDDEC': '1f1f5-1f1ec',
	'\uD83C\uDDF5\uD83C\uDDEB': '1f1f5-1f1eb',
	'\uD83C\uDDF5\uD83C\uDDEA': '1f1f5-1f1ea',
	'\uD83C\uDDF5\uD83C\uDDE6': '1f1f5-1f1e6',
	'\uD83C\uDDF4\uD83C\uDDF2': '1f1f4-1f1f2',
	'\uD83C\uDDF3\uD83C\uDDFF': '1f1f3-1f1ff',
	'\uD83C\uDDF3\uD83C\uDDFA': '1f1f3-1f1fa',
	'\uD83C\uDDF3\uD83C\uDDF7': '1f1f3-1f1f7',
	'\uD83C\uDDF3\uD83C\uDDF5': '1f1f3-1f1f5',
	'\uD83C\uDDF3\uD83C\uDDF4': '1f1f3-1f1f4',
	'\uD83C\uDDF3\uD83C\uDDF1': '1f1f3-1f1f1',
	'\uD83C\uDDF3\uD83C\uDDEE': '1f1f3-1f1ee',
	'\uD83C\uDDF3\uD83C\uDDEC': '1f1f3-1f1ec',
	'\uD83C\uDDF3\uD83C\uDDEB': '1f1f3-1f1eb',
	'\uD83C\uDDF3\uD83C\uDDEA': '1f1f3-1f1ea',
	'\uD83C\uDDF3\uD83C\uDDE8': '1f1f3-1f1e8',
	'\uD83C\uDDF3\uD83C\uDDE6': '1f1f3-1f1e6',
	'\uD83C\uDDF2\uD83C\uDDFF': '1f1f2-1f1ff',
	'\uD83C\uDDF2\uD83C\uDDFE': '1f1f2-1f1fe',
	'\uD83C\uDDF2\uD83C\uDDFD': '1f1f2-1f1fd',
	'\uD83C\uDDF2\uD83C\uDDFC': '1f1f2-1f1fc',
	'\uD83C\uDDF2\uD83C\uDDFB': '1f1f2-1f1fb',
	'\uD83C\uDDF2\uD83C\uDDFA': '1f1f2-1f1fa',
	'\uD83C\uDDF2\uD83C\uDDF9': '1f1f2-1f1f9',
	'\uD83C\uDDF2\uD83C\uDDF8': '1f1f2-1f1f8',
	'\uD83C\uDDF2\uD83C\uDDF7': '1f1f2-1f1f7',
	'\uD83C\uDDF2\uD83C\uDDF6': '1f1f2-1f1f6',
	'\uD83C\uDDF2\uD83C\uDDF5': '1f1f2-1f1f5',
	'\uD83C\uDDF2\uD83C\uDDF4': '1f1f2-1f1f4',
	'\uD83C\uDDF2\uD83C\uDDF3': '1f1f2-1f1f3',
	'\uD83C\uDDF2\uD83C\uDDF2': '1f1f2-1f1f2',
	'\uD83C\uDDF2\uD83C\uDDF1': '1f1f2-1f1f1',
	'\uD83C\uDDF2\uD83C\uDDF0': '1f1f2-1f1f0',
	'\uD83C\uDDF2\uD83C\uDDED': '1f1f2-1f1ed',
	'\uD83C\uDDF2\uD83C\uDDEC': '1f1f2-1f1ec',
	'\uD83C\uDDF2\uD83C\uDDEB': '1f1f2-1f1eb',
	'\uD83C\uDDF2\uD83C\uDDEA': '1f1f2-1f1ea',
	'\uD83C\uDDF2\uD83C\uDDE9': '1f1f2-1f1e9',
	'\uD83C\uDDF2\uD83C\uDDE8': '1f1f2-1f1e8',
	'\uD83C\uDDF2\uD83C\uDDE6': '1f1f2-1f1e6',
	'\uD83C\uDDF1\uD83C\uDDFE': '1f1f1-1f1fe',
	'\uD83C\uDDF1\uD83C\uDDFB': '1f1f1-1f1fb',
	'\uD83C\uDDF1\uD83C\uDDFA': '1f1f1-1f1fa',
	'\uD83C\uDDF1\uD83C\uDDF9': '1f1f1-1f1f9',
	'\uD83C\uDDF1\uD83C\uDDF8': '1f1f1-1f1f8',
	'\uD83C\uDDF1\uD83C\uDDF7': '1f1f1-1f1f7',
	'\uD83C\uDDF1\uD83C\uDDF0': '1f1f1-1f1f0',
	'\uD83C\uDDF1\uD83C\uDDEE': '1f1f1-1f1ee',
	'\uD83C\uDDF1\uD83C\uDDE8': '1f1f1-1f1e8',
	'\uD83C\uDDF1\uD83C\uDDE7': '1f1f1-1f1e7',
	'\uD83C\uDDF1\uD83C\uDDE6': '1f1f1-1f1e6',
	'\uD83C\uDDF0\uD83C\uDDFF': '1f1f0-1f1ff',
	'\uD83C\uDDF0\uD83C\uDDFE': '1f1f0-1f1fe',
	'\uD83C\uDDF0\uD83C\uDDFC': '1f1f0-1f1fc',
	'\uD83C\uDDF0\uD83C\uDDF7': '1f1f0-1f1f7',
	'\uD83C\uDDF0\uD83C\uDDF5': '1f1f0-1f1f5',
	'\uD83C\uDDF0\uD83C\uDDF3': '1f1f0-1f1f3',
	'\uD83C\uDDF0\uD83C\uDDF2': '1f1f0-1f1f2',
	'\uD83C\uDDF0\uD83C\uDDEE': '1f1f0-1f1ee',
	'\uD83C\uDDF0\uD83C\uDDED': '1f1f0-1f1ed',
	'\uD83C\uDDF0\uD83C\uDDEC': '1f1f0-1f1ec',
	'\uD83C\uDDF0\uD83C\uDDEA': '1f1f0-1f1ea',
	'\uD83C\uDDEF\uD83C\uDDF5': '1f1ef-1f1f5',
	'\uD83C\uDDEF\uD83C\uDDF4': '1f1ef-1f1f4',
	'\uD83C\uDDEF\uD83C\uDDF2': '1f1ef-1f1f2',
	'\uD83C\uDDEF\uD83C\uDDEA': '1f1ef-1f1ea',
	'\uD83C\uDDEE\uD83C\uDDF9': '1f1ee-1f1f9',
	'\uD83C\uDDEE\uD83C\uDDF8': '1f1ee-1f1f8',
	'\uD83C\uDDEE\uD83C\uDDF7': '1f1ee-1f1f7',
	'\uD83C\uDDEE\uD83C\uDDF6': '1f1ee-1f1f6',
	'\uD83C\uDDEE\uD83C\uDDF4': '1f1ee-1f1f4',
	'\uD83C\uDDEE\uD83C\uDDF3': '1f1ee-1f1f3',
	'\uD83C\uDDEE\uD83C\uDDF2': '1f1ee-1f1f2',
	'\uD83C\uDDEE\uD83C\uDDF1': '1f1ee-1f1f1',
	'\uD83C\uDDEE\uD83C\uDDEA': '1f1ee-1f1ea',
	'\uD83C\uDDEE\uD83C\uDDE9': '1f1ee-1f1e9',
	'\uD83C\uDDEE\uD83C\uDDE8': '1f1ee-1f1e8',
	'\uD83C\uDDED\uD83C\uDDFA': '1f1ed-1f1fa',
	'\uD83C\uDDED\uD83C\uDDF9': '1f1ed-1f1f9',
	'\uD83C\uDDED\uD83C\uDDF7': '1f1ed-1f1f7',
	'\uD83C\uDDED\uD83C\uDDF3': '1f1ed-1f1f3',
	'\uD83C\uDDED\uD83C\uDDF2': '1f1ed-1f1f2',
	'\uD83C\uDDED\uD83C\uDDF0': '1f1ed-1f1f0',
	'\uD83C\uDDEC\uD83C\uDDFE': '1f1ec-1f1fe',
	'\uD83C\uDDEC\uD83C\uDDFC': '1f1ec-1f1fc',
	'\uD83C\uDDEC\uD83C\uDDFA': '1f1ec-1f1fa',
	'\uD83C\uDDEC\uD83C\uDDF9': '1f1ec-1f1f9',
	'\uD83C\uDDEC\uD83C\uDDF8': '1f1ec-1f1f8',
	'\uD83C\uDDEC\uD83C\uDDF7': '1f1ec-1f1f7',
	'\uD83C\uDDEC\uD83C\uDDF6': '1f1ec-1f1f6',
	'\uD83C\uDDEC\uD83C\uDDF5': '1f1ec-1f1f5',
	'\uD83C\uDDEC\uD83C\uDDF3': '1f1ec-1f1f3',
	'\uD83C\uDDEC\uD83C\uDDF2': '1f1ec-1f1f2',
	'\uD83C\uDDEC\uD83C\uDDF1': '1f1ec-1f1f1',
	'\uD83C\uDDEC\uD83C\uDDEE': '1f1ec-1f1ee',
	'\uD83C\uDDEC\uD83C\uDDED': '1f1ec-1f1ed',
	'\uD83C\uDDEC\uD83C\uDDEC': '1f1ec-1f1ec',
	'\uD83C\uDDEC\uD83C\uDDEB': '1f1ec-1f1eb',
	'\uD83C\uDDEC\uD83C\uDDEA': '1f1ec-1f1ea',
	'\uD83C\uDDEC\uD83C\uDDE9': '1f1ec-1f1e9',
	'\uD83C\uDDEC\uD83C\uDDE7': '1f1ec-1f1e7',
	'\uD83C\uDDEC\uD83C\uDDE6': '1f1ec-1f1e6',
	'\uD83C\uDDEB\uD83C\uDDF7': '1f1eb-1f1f7',
	'\uD83C\uDDEB\uD83C\uDDF4': '1f1eb-1f1f4',
	'\uD83C\uDDEB\uD83C\uDDF2': '1f1eb-1f1f2',
	'\uD83C\uDDEB\uD83C\uDDF0': '1f1eb-1f1f0',
	'\uD83C\uDDEB\uD83C\uDDEF': '1f1eb-1f1ef',
	'\uD83C\uDDEB\uD83C\uDDEE': '1f1eb-1f1ee',
	'\uD83C\uDDEA\uD83C\uDDFA': '1f1ea-1f1fa',
	'\uD83C\uDDEA\uD83C\uDDF9': '1f1ea-1f1f9',
	'\uD83C\uDDEA\uD83C\uDDF8': '1f1ea-1f1f8',
	'\uD83C\uDDEA\uD83C\uDDF7': '1f1ea-1f1f7',
	'\uD83C\uDDEA\uD83C\uDDED': '1f1ea-1f1ed',
	'\uD83C\uDDEA\uD83C\uDDEC': '1f1ea-1f1ec',
	'\uD83C\uDDEA\uD83C\uDDEA': '1f1ea-1f1ea',
	'\uD83C\uDDEA\uD83C\uDDE8': '1f1ea-1f1e8',
	'\uD83C\uDDEA\uD83C\uDDE6': '1f1ea-1f1e6',
	'\uD83C\uDDE9\uD83C\uDDFF': '1f1e9-1f1ff',
	'\uD83C\uDDE9\uD83C\uDDF4': '1f1e9-1f1f4',
	'\uD83C\uDDE9\uD83C\uDDF2': '1f1e9-1f1f2',
	'\uD83C\uDDE9\uD83C\uDDF0': '1f1e9-1f1f0',
	'\uD83C\uDDE9\uD83C\uDDEF': '1f1e9-1f1ef',
	'\uD83C\uDDE9\uD83C\uDDEC': '1f1e9-1f1ec',
	'\uD83C\uDDE9\uD83C\uDDEA': '1f1e9-1f1ea',
	'\uD83C\uDDE8\uD83C\uDDFF': '1f1e8-1f1ff',
	'\uD83C\uDDE8\uD83C\uDDFE': '1f1e8-1f1fe',
	'\uD83C\uDDE8\uD83C\uDDFD': '1f1e8-1f1fd',
	'\uD83C\uDDE8\uD83C\uDDFC': '1f1e8-1f1fc',
	'\uD83C\uDDE8\uD83C\uDDFB': '1f1e8-1f1fb',
	'\uD83C\uDDE8\uD83C\uDDFA': '1f1e8-1f1fa',
	'\uD83C\uDDE8\uD83C\uDDF7': '1f1e8-1f1f7',
	'\uD83C\uDDE8\uD83C\uDDF5': '1f1e8-1f1f5',
	'\uD83C\uDDE8\uD83C\uDDF4': '1f1e8-1f1f4',
	'\uD83C\uDDE8\uD83C\uDDF3': '1f1e8-1f1f3',
	'\uD83C\uDDE8\uD83C\uDDF2': '1f1e8-1f1f2',
	'\uD83C\uDDE8\uD83C\uDDF1': '1f1e8-1f1f1',
	'\uD83C\uDDE8\uD83C\uDDF0': '1f1e8-1f1f0',
	'\uD83C\uDDE8\uD83C\uDDEE': '1f1e8-1f1ee',
	'\uD83C\uDDE8\uD83C\uDDED': '1f1e8-1f1ed',
	'\uD83C\uDDE8\uD83C\uDDEC': '1f1e8-1f1ec',
	'\uD83C\uDDE8\uD83C\uDDEB': '1f1e8-1f1eb',
	'\uD83C\uDDE8\uD83C\uDDE9': '1f1e8-1f1e9',
	'\uD83C\uDDE8\uD83C\uDDE8': '1f1e8-1f1e8',
	'\uD83C\uDDE8\uD83C\uDDE6': '1f1e8-1f1e6',
	'\uD83C\uDDE7\uD83C\uDDFF': '1f1e7-1f1ff',
	'\uD83C\uDDE7\uD83C\uDDFE': '1f1e7-1f1fe',
	'\uD83C\uDDE7\uD83C\uDDFC': '1f1e7-1f1fc',
	'\uD83C\uDDE7\uD83C\uDDFB': '1f1e7-1f1fb',
	'\uD83C\uDDE7\uD83C\uDDF9': '1f1e7-1f1f9',
	'\uD83C\uDDE7\uD83C\uDDF8': '1f1e7-1f1f8',
	'\uD83C\uDDE7\uD83C\uDDF7': '1f1e7-1f1f7',
	'\uD83C\uDDE7\uD83C\uDDF6': '1f1e7-1f1f6',
	'\uD83C\uDDE7\uD83C\uDDF4': '1f1e7-1f1f4',
	'\uD83C\uDDE7\uD83C\uDDF3': '1f1e7-1f1f3',
	'\uD83C\uDDE7\uD83C\uDDF2': '1f1e7-1f1f2',
	'\uD83C\uDDE7\uD83C\uDDF1': '1f1e7-1f1f1',
	'\uD83C\uDDE7\uD83C\uDDEF': '1f1e7-1f1ef',
	'\uD83C\uDDE7\uD83C\uDDEE': '1f1e7-1f1ee',
	'\uD83C\uDDE7\uD83C\uDDED': '1f1e7-1f1ed',
	'\uD83C\uDDE7\uD83C\uDDEC': '1f1e7-1f1ec',
	'\uD83C\uDDE7\uD83C\uDDEB': '1f1e7-1f1eb',
	'\uD83C\uDDE7\uD83C\uDDEA': '1f1e7-1f1ea',
	'\uD83C\uDDE7\uD83C\uDDE9': '1f1e7-1f1e9',
	'\uD83C\uDDE7\uD83C\uDDE7': '1f1e7-1f1e7',
	'\uD83C\uDDE7\uD83C\uDDE6': '1f1e7-1f1e6',
	'\uD83C\uDDE6\uD83C\uDDFF': '1f1e6-1f1ff',
	'\uD83C\uDDE6\uD83C\uDDFD': '1f1e6-1f1fd',
	'\uD83C\uDDE6\uD83C\uDDFC': '1f1e6-1f1fc',
	'\uD83C\uDDE6\uD83C\uDDFA': '1f1e6-1f1fa',
	'\uD83C\uDDE6\uD83C\uDDF9': '1f1e6-1f1f9',
	'\uD83C\uDDE6\uD83C\uDDF8': '1f1e6-1f1f8',
	'\uD83C\uDDE6\uD83C\uDDF7': '1f1e6-1f1f7',
	'\uD83C\uDDE6\uD83C\uDDF6': '1f1e6-1f1f6',
	'\uD83C\uDDE6\uD83C\uDDF4': '1f1e6-1f1f4',
	'\uD83C\uDDE6\uD83C\uDDF2': '1f1e6-1f1f2',
	'\uD83C\uDDE6\uD83C\uDDF1': '1f1e6-1f1f1',
	'\uD83C\uDDE6\uD83C\uDDEE': '1f1e6-1f1ee',
	'\uD83C\uDDE6\uD83C\uDDEC': '1f1e6-1f1ec',
	'\uD83C\uDDE6\uD83C\uDDEB': '1f1e6-1f1eb',
	'\uD83C\uDDE6\uD83C\uDDEA': '1f1e6-1f1ea',
	'\uD83C\uDDE6\uD83C\uDDE9': '1f1e6-1f1e9',
	'\uD83C\uDDE6\uD83C\uDDE8': '1f1e6-1f1e8',
	'\uD83C\uDC04': '1f004',
	'\uD83C\uDD7F': '1f17f',
	'\uD83C\uDE02': '1f202',
	'\uD83C\uDE1A': '1f21a',
	'\uD83C\uDE2F': '1f22f',
	'\uD83C\uDE37': '1f237',
	'\uD83C\uDF9E': '1f39e',
	'\uD83C\uDF9F': '1f39f',
	'\uD83C\uDFCB': '1f3cb',
	'\uD83C\uDFCC': '1f3cc',
	'\uD83C\uDFCD': '1f3cd',
	'\uD83C\uDFCE': '1f3ce',
	'\uD83C\uDF96': '1f396',
	'\uD83C\uDF97': '1f397',
	'\uD83C\uDF36': '1f336',
	'\uD83C\uDF27': '1f327',
	'\uD83C\uDF28': '1f328',
	'\uD83C\uDF29': '1f329',
	'\uD83C\uDF2A': '1f32a',
	'\uD83C\uDF2B': '1f32b',
	'\uD83C\uDF2C': '1f32c',
	'\uD83D\uDC3F': '1f43f',
	'\uD83D\uDD77': '1f577',
	'\uD83D\uDD78': '1f578',
	'\uD83C\uDF21': '1f321',
	'\uD83C\uDF99': '1f399',
	'\uD83C\uDF9A': '1f39a',
	'\uD83C\uDF9B': '1f39b',
	'\uD83C\uDFF3': '1f3f3',
	'\uD83C\uDFF5': '1f3f5',
	'\uD83C\uDFF7': '1f3f7',
	'\uD83D\uDCFD': '1f4fd',
	'\uD83D\uDD49': '1f549',
	'\uD83D\uDD4A': '1f54a',
	'\uD83D\uDD6F': '1f56f',
	'\uD83D\uDD70': '1f570',
	'\uD83D\uDD73': '1f573',
	'\uD83D\uDD76': '1f576',
	'\uD83D\uDD79': '1f579',
	'\uD83D\uDD87': '1f587',
	'\uD83D\uDD8A': '1f58a',
	'\uD83D\uDD8B': '1f58b',
	'\uD83D\uDD8C': '1f58c',
	'\uD83D\uDD8D': '1f58d',
	'\uD83D\uDDA5': '1f5a5',
	'\uD83D\uDDA8': '1f5a8',
	'\uD83D\uDDB2': '1f5b2',
	'\uD83D\uDDBC': '1f5bc',
	'\uD83D\uDDC2': '1f5c2',
	'\uD83D\uDDC3': '1f5c3',
	'\uD83D\uDDC4': '1f5c4',
	'\uD83D\uDDD1': '1f5d1',
	'\uD83D\uDDD2': '1f5d2',
	'\uD83D\uDDD3': '1f5d3',
	'\uD83D\uDDDC': '1f5dc',
	'\uD83D\uDDDD': '1f5dd',
	'\uD83D\uDDDE': '1f5de',
	'\uD83D\uDDE1': '1f5e1',
	'\uD83D\uDDE3': '1f5e3',
	'\uD83D\uDDE8': '1f5e8',
	'\uD83D\uDDEF': '1f5ef',
	'\uD83D\uDDF3': '1f5f3',
	'\uD83D\uDDFA': '1f5fa',
	'\uD83D\uDEE0': '1f6e0',
	'\uD83D\uDEE1': '1f6e1',
	'\uD83D\uDEE2': '1f6e2',
	'\uD83D\uDEF0': '1f6f0',
	'\uD83C\uDF7D': '1f37d',
	'\uD83D\uDC41': '1f441',
	'\uD83D\uDD74': '1f574',
	'\uD83D\uDD75': '1f575',
	'\uD83D\uDD90': '1f590',
	'\uD83C\uDFD4': '1f3d4',
	'\uD83C\uDFD5': '1f3d5',
	'\uD83C\uDFD6': '1f3d6',
	'\uD83C\uDFD7': '1f3d7',
	'\uD83C\uDFD8': '1f3d8',
	'\uD83C\uDFD9': '1f3d9',
	'\uD83C\uDFDA': '1f3da',
	'\uD83C\uDFDB': '1f3db',
	'\uD83C\uDFDC': '1f3dc',
	'\uD83C\uDFDD': '1f3dd',
	'\uD83C\uDFDE': '1f3de',
	'\uD83C\uDFDF': '1f3df',
	'\uD83D\uDECB': '1f6cb',
	'\uD83D\uDECD': '1f6cd',
	'\uD83D\uDECE': '1f6ce',
	'\uD83D\uDECF': '1f6cf',
	'\uD83D\uDEE3': '1f6e3',
	'\uD83D\uDEE4': '1f6e4',
	'\uD83D\uDEE5': '1f6e5',
	'\uD83D\uDEE9': '1f6e9',
	'\uD83D\uDEF3': '1f6f3',
	'\uD83C\uDF24': '1f324',
	'\uD83C\uDF25': '1f325',
	'\uD83C\uDF26': '1f326',
	'\uD83D\uDDB1': '1f5b1',
	'\u261D\uD83C\uDFFB': '261d-1f3fb',
	'\u261D\uD83C\uDFFC': '261d-1f3fc',
	'\u261D\uD83C\uDFFD': '261d-1f3fd',
	'\u261D\uD83C\uDFFE': '261d-1f3fe',
	'\u261D\uD83C\uDFFF': '261d-1f3ff',
	'\u270C\uD83C\uDFFB': '270c-1f3fb',
	'\u270C\uD83C\uDFFC': '270c-1f3fc',
	'\u270C\uD83C\uDFFD': '270c-1f3fd',
	'\u270C\uD83C\uDFFE': '270c-1f3fe',
	'\u270C\uD83C\uDFFF': '270c-1f3ff',
	'\u270A\uD83C\uDFFB': '270a-1f3fb',
	'\u270A\uD83C\uDFFC': '270a-1f3fc',
	'\u270A\uD83C\uDFFD': '270a-1f3fd',
	'\u270A\uD83C\uDFFE': '270a-1f3fe',
	'\u270A\uD83C\uDFFF': '270a-1f3ff',
	'\u270B\uD83C\uDFFB': '270b-1f3fb',
	'\u270B\uD83C\uDFFC': '270b-1f3fc',
	'\u270B\uD83C\uDFFD': '270b-1f3fd',
	'\u270B\uD83C\uDFFE': '270b-1f3fe',
	'\u270B\uD83C\uDFFF': '270b-1f3ff',
	'\u270D\uD83C\uDFFB': '270d-1f3fb',
	'\u270D\uD83C\uDFFC': '270d-1f3fc',
	'\u270D\uD83C\uDFFD': '270d-1f3fd',
	'\u270D\uD83C\uDFFE': '270d-1f3fe',
	'\u270D\uD83C\uDFFF': '270d-1f3ff',
	'\u26F9\uD83C\uDFFB': '26f9-1f3fb',
	'\u26F9\uD83C\uDFFC': '26f9-1f3fc',
	'\u26F9\uD83C\uDFFD': '26f9-1f3fd',
	'\u26F9\uD83C\uDFFE': '26f9-1f3fe',
	'\u26F9\uD83C\uDFFF': '26f9-1f3ff',
	'\u00A9': '00a9',
	'\u00AE': '00ae',
	'\u203C': '203c',
	'\u2049': '2049',
	'\u2122': '2122',
	'\u2139': '2139',
	'\u2194': '2194',
	'\u2195': '2195',
	'\u2196': '2196',
	'\u2197': '2197',
	'\u2198': '2198',
	'\u2199': '2199',
	'\u21A9': '21a9',
	'\u21AA': '21aa',
	'\u231A': '231a',
	'\u231B': '231b',
	'\u24C2': '24c2',
	'\u25AA': '25aa',
	'\u25AB': '25ab',
	'\u25B6': '25b6',
	'\u25C0': '25c0',
	'\u25FB': '25fb',
	'\u25FC': '25fc',
	'\u25FD': '25fd',
	'\u25FE': '25fe',
	'\u2600': '2600',
	'\u2601': '2601',
	'\u260E': '260e',
	'\u2611': '2611',
	'\u2614': '2614',
	'\u2615': '2615',
	'\u261D': '261d',
	'\u263A': '263a',
	'\u2648': '2648',
	'\u2649': '2649',
	'\u264A': '264a',
	'\u264B': '264b',
	'\u264C': '264c',
	'\u264D': '264d',
	'\u264E': '264e',
	'\u264F': '264f',
	'\u2650': '2650',
	'\u2651': '2651',
	'\u2652': '2652',
	'\u2653': '2653',
	'\u2660': '2660',
	'\u2663': '2663',
	'\u2665': '2665',
	'\u2666': '2666',
	'\u2668': '2668',
	'\u267B': '267b',
	'\u267F': '267f',
	'\u2693': '2693',
	'\u26A0': '26a0',
	'\u26A1': '26a1',
	'\u26AA': '26aa',
	'\u26AB': '26ab',
	'\u26BD': '26bd',
	'\u26BE': '26be',
	'\u26C4': '26c4',
	'\u26C5': '26c5',
	'\u26D4': '26d4',
	'\u26EA': '26ea',
	'\u26F2': '26f2',
	'\u26F3': '26f3',
	'\u26F5': '26f5',
	'\u26FA': '26fa',
	'\u26FD': '26fd',
	'\u2702': '2702',
	'\u2708': '2708',
	'\u2709': '2709',
	'\u270C': '270c',
	'\u270F': '270f',
	'\u2712': '2712',
	'\u2714': '2714',
	'\u2716': '2716',
	'\u2733': '2733',
	'\u2734': '2734',
	'\u2744': '2744',
	'\u2747': '2747',
	'\u2757': '2757',
	'\u2764': '2764',
	'\u27A1': '27a1',
	'\u2934': '2934',
	'\u2935': '2935',
	'\u2B05': '2b05',
	'\u2B06': '2b06',
	'\u2B07': '2b07',
	'\u2B1B': '2b1b',
	'\u2B1C': '2b1c',
	'\u2B50': '2b50',
	'\u2B55': '2b55',
	'\u3030': '3030',
	'\u303D': '303d',
	'\u3297': '3297',
	'\u3299': '3299',
	'\u271D': '271d',
	'\u2328': '2328',
	'\u270D': '270d',
	'\u23CF': '23cf',
	'\u23ED': '23ed',
	'\u23EE': '23ee',
	'\u23EF': '23ef',
	'\u23F1': '23f1',
	'\u23F2': '23f2',
	'\u23F8': '23f8',
	'\u23F9': '23f9',
	'\u23FA': '23fa',
	'\u2602': '2602',
	'\u2603': '2603',
	'\u2604': '2604',
	'\u2618': '2618',
	'\u2620': '2620',
	'\u2622': '2622',
	'\u2623': '2623',
	'\u2626': '2626',
	'\u262A': '262a',
	'\u262E': '262e',
	'\u262F': '262f',
	'\u2638': '2638',
	'\u2639': '2639',
	'\u2692': '2692',
	'\u2694': '2694',
	'\u2696': '2696',
	'\u2697': '2697',
	'\u2699': '2699',
	'\u269B': '269b',
	'\u269C': '269c',
	'\u26B0': '26b0',
	'\u26B1': '26b1',
	'\u26C8': '26c8',
	'\u26CF': '26cf',
	'\u26D1': '26d1',
	'\u26D3': '26d3',
	'\u26E9': '26e9',
	'\u26F0': '26f0',
	'\u26F1': '26f1',
	'\u26F4': '26f4',
	'\u26F7': '26f7',
	'\u26F8': '26f8',
	'\u26F9': '26f9',
	'\u2721': '2721',
	'\u2763': '2763',
	'\uD83E\uDD49': '1f949',
	'\uD83E\uDD48': '1f948',
	'\uD83E\uDD47': '1f947',
	'\uD83E\uDD3A': '1f93a',
	'\uD83E\uDD45': '1f945',
	'\uD83E\uDD3E': '1f93e',
	'\uD83C\uDDFF': '1f1ff',
	'\uD83E\uDD3D': '1f93d',
	'\uD83E\uDD4B': '1f94b',
	'\uD83E\uDD4A': '1f94a',
	'\uD83E\uDD3C': '1f93c',
	'\uD83E\uDD39': '1f939',
	'\uD83E\uDD38': '1f938',
	'\uD83D\uDEF6': '1f6f6',
	'\uD83D\uDEF5': '1f6f5',
	'\uD83D\uDEF4': '1f6f4',
	'\uD83D\uDED2': '1f6d2',
	'\uD83C\uDCCF': '1f0cf',
	'\uD83C\uDD70': '1f170',
	'\uD83C\uDD71': '1f171',
	'\uD83C\uDD7E': '1f17e',
	'\uD83D\uDED1': '1f6d1',
	'\uD83C\uDD8E': '1f18e',
	'\uD83C\uDD91': '1f191',
	'\uD83C\uDDFE': '1f1fe',
	'\uD83C\uDD92': '1f192',
	'\uD83C\uDD93': '1f193',
	'\uD83C\uDD94': '1f194',
	'\uD83C\uDD95': '1f195',
	'\uD83C\uDD96': '1f196',
	'\uD83C\uDD97': '1f197',
	'\uD83C\uDD98': '1f198',
	'\uD83E\uDD44': '1f944',
	'\uD83C\uDD99': '1f199',
	'\uD83C\uDD9A': '1f19a',
	'\uD83E\uDD42': '1f942',
	'\uD83E\uDD43': '1f943',
	'\uD83C\uDE01': '1f201',
	'\uD83E\uDD59': '1f959',
	'\uD83C\uDE32': '1f232',
	'\uD83C\uDE33': '1f233',
	'\uD83C\uDE34': '1f234',
	'\uD83C\uDE35': '1f235',
	'\uD83C\uDE36': '1f236',
	'\uD83E\uDD58': '1f958',
	'\uD83C\uDE38': '1f238',
	'\uD83C\uDE39': '1f239',
	'\uD83E\uDD57': '1f957',
	'\uD83C\uDE3A': '1f23a',
	'\uD83C\uDE50': '1f250',
	'\uD83C\uDE51': '1f251',
	'\uD83C\uDF00': '1f300',
	'\uD83E\uDD56': '1f956',
	'\uD83C\uDF01': '1f301',
	'\uD83C\uDF02': '1f302',
	'\uD83C\uDF03': '1f303',
	'\uD83C\uDF04': '1f304',
	'\uD83C\uDF05': '1f305',
	'\uD83C\uDF06': '1f306',
	'\uD83E\uDD55': '1f955',
	'\uD83C\uDF07': '1f307',
	'\uD83C\uDF08': '1f308',
	'\uD83E\uDD54': '1f954',
	'\uD83C\uDF09': '1f309',
	'\uD83C\uDF0A': '1f30a',
	'\uD83C\uDF0B': '1f30b',
	'\uD83C\uDF0C': '1f30c',
	'\uD83C\uDF0F': '1f30f',
	'\uD83C\uDF11': '1f311',
	'\uD83E\uDD53': '1f953',
	'\uD83C\uDF13': '1f313',
	'\uD83C\uDF14': '1f314',
	'\uD83C\uDF15': '1f315',
	'\uD83C\uDF19': '1f319',
	'\uD83C\uDF1B': '1f31b',
	'\uD83C\uDF1F': '1f31f',
	'\uD83E\uDD52': '1f952',
	'\uD83C\uDF20': '1f320',
	'\uD83C\uDF30': '1f330',
	'\uD83E\uDD51': '1f951',
	'\uD83C\uDF31': '1f331',
	'\uD83C\uDF34': '1f334',
	'\uD83C\uDF35': '1f335',
	'\uD83C\uDF37': '1f337',
	'\uD83C\uDF38': '1f338',
	'\uD83C\uDF39': '1f339',
	'\uD83C\uDF3A': '1f33a',
	'\uD83C\uDF3B': '1f33b',
	'\uD83C\uDF3C': '1f33c',
	'\uD83C\uDF3D': '1f33d',
	'\uD83E\uDD50': '1f950',
	'\uD83C\uDF3E': '1f33e',
	'\uD83C\uDF3F': '1f33f',
	'\uD83C\uDF40': '1f340',
	'\uD83C\uDF41': '1f341',
	'\uD83C\uDF42': '1f342',
	'\uD83C\uDF43': '1f343',
	'\uD83C\uDF44': '1f344',
	'\uD83C\uDF45': '1f345',
	'\uD83C\uDF46': '1f346',
	'\uD83C\uDF47': '1f347',
	'\uD83C\uDF48': '1f348',
	'\uD83C\uDF49': '1f349',
	'\uD83C\uDF4A': '1f34a',
	'\uD83E\uDD40': '1f940',
	'\uD83C\uDF4C': '1f34c',
	'\uD83C\uDF4D': '1f34d',
	'\uD83C\uDF4E': '1f34e',
	'\uD83C\uDF4F': '1f34f',
	'\uD83C\uDF51': '1f351',
	'\uD83C\uDF52': '1f352',
	'\uD83C\uDF53': '1f353',
	'\uD83E\uDD8F': '1f98f',
	'\uD83C\uDF54': '1f354',
	'\uD83C\uDF55': '1f355',
	'\uD83C\uDF56': '1f356',
	'\uD83E\uDD8E': '1f98e',
	'\uD83C\uDF57': '1f357',
	'\uD83C\uDF58': '1f358',
	'\uD83C\uDF59': '1f359',
	'\uD83E\uDD8D': '1f98d',
	'\uD83C\uDF5A': '1f35a',
	'\uD83C\uDF5B': '1f35b',
	'\uD83E\uDD8C': '1f98c',
	'\uD83C\uDF5C': '1f35c',
	'\uD83C\uDF5D': '1f35d',
	'\uD83C\uDF5E': '1f35e',
	'\uD83C\uDF5F': '1f35f',
	'\uD83E\uDD8B': '1f98b',
	'\uD83C\uDF60': '1f360',
	'\uD83C\uDF61': '1f361',
	'\uD83E\uDD8A': '1f98a',
	'\uD83C\uDF62': '1f362',
	'\uD83C\uDF63': '1f363',
	'\uD83E\uDD89': '1f989',
	'\uD83C\uDF64': '1f364',
	'\uD83C\uDF65': '1f365',
	'\uD83E\uDD88': '1f988',
	'\uD83C\uDF66': '1f366',
	'\uD83E\uDD87': '1f987',
	'\uD83C\uDF67': '1f367',
	'\uD83C\uDDFD': '1f1fd',
	'\uD83C\uDF68': '1f368',
	'\uD83E\uDD86': '1f986',
	'\uD83C\uDF69': '1f369',
	'\uD83E\uDD85': '1f985',
	'\uD83C\uDF6A': '1f36a',
	'\uD83D\uDDA4': '1f5a4',
	'\uD83C\uDF6B': '1f36b',
	'\uD83C\uDF6C': '1f36c',
	'\uD83C\uDF6D': '1f36d',
	'\uD83C\uDF6E': '1f36e',
	'\uD83C\uDF6F': '1f36f',
	'\uD83E\uDD1E': '1f91e',
	'\uD83C\uDF70': '1f370',
	'\uD83C\uDF71': '1f371',
	'\uD83C\uDF72': '1f372',
	'\uD83E\uDD1D': '1f91d',
	'\uD83C\uDF73': '1f373',
	'\uD83C\uDF74': '1f374',
	'\uD83C\uDF75': '1f375',
	'\uD83C\uDF76': '1f376',
	'\uD83C\uDF77': '1f377',
	'\uD83C\uDF78': '1f378',
	'\uD83C\uDF79': '1f379',
	'\uD83C\uDF7A': '1f37a',
	'\uD83C\uDF7B': '1f37b',
	'\uD83C\uDF80': '1f380',
	'\uD83C\uDF81': '1f381',
	'\uD83C\uDF82': '1f382',
	'\uD83C\uDF83': '1f383',
	'\uD83E\uDD1B': '1f91b',
	'\uD83E\uDD1C': '1f91c',
	'\uD83C\uDF84': '1f384',
	'\uD83C\uDF85': '1f385',
	'\uD83C\uDF86': '1f386',
	'\uD83E\uDD1A': '1f91a',
	'\uD83C\uDF87': '1f387',
	'\uD83C\uDF88': '1f388',
	'\uD83C\uDF89': '1f389',
	'\uD83C\uDF8A': '1f38a',
	'\uD83C\uDF8B': '1f38b',
	'\uD83C\uDF8C': '1f38c',
	'\uD83E\uDD19': '1f919',
	'\uD83C\uDF8D': '1f38d',
	'\uD83D\uDD7A': '1f57a',
	'\uD83C\uDF8E': '1f38e',
	'\uD83E\uDD33': '1f933',
	'\uD83C\uDF8F': '1f38f',
	'\uD83E\uDD30': '1f930',
	'\uD83C\uDF90': '1f390',
	'\uD83E\uDD26': '1f926',
	'\uD83E\uDD37': '1f937',
	'\uD83C\uDF91': '1f391',
	'\uD83C\uDF92': '1f392',
	'\uD83C\uDF93': '1f393',
	'\uD83C\uDFA0': '1f3a0',
	'\uD83C\uDFA1': '1f3a1',
	'\uD83C\uDFA2': '1f3a2',
	'\uD83C\uDFA3': '1f3a3',
	'\uD83C\uDFA4': '1f3a4',
	'\uD83C\uDFA5': '1f3a5',
	'\uD83C\uDFA6': '1f3a6',
	'\uD83C\uDFA7': '1f3a7',
	'\uD83E\uDD36': '1f936',
	'\uD83C\uDFA8': '1f3a8',
	'\uD83E\uDD35': '1f935',
	'\uD83C\uDFA9': '1f3a9',
	'\uD83C\uDFAA': '1f3aa',
	'\uD83E\uDD34': '1f934',
	'\uD83C\uDFAB': '1f3ab',
	'\uD83C\uDFAC': '1f3ac',
	'\uD83C\uDFAD': '1f3ad',
	'\uD83E\uDD27': '1f927',
	'\uD83C\uDFAE': '1f3ae',
	'\uD83C\uDFAF': '1f3af',
	'\uD83C\uDFB0': '1f3b0',
	'\uD83C\uDFB1': '1f3b1',
	'\uD83C\uDFB2': '1f3b2',
	'\uD83C\uDFB3': '1f3b3',
	'\uD83C\uDFB4': '1f3b4',
	'\uD83E\uDD25': '1f925',
	'\uD83C\uDFB5': '1f3b5',
	'\uD83C\uDFB6': '1f3b6',
	'\uD83C\uDFB7': '1f3b7',
	'\uD83E\uDD24': '1f924',
	'\uD83C\uDFB8': '1f3b8',
	'\uD83C\uDFB9': '1f3b9',
	'\uD83C\uDFBA': '1f3ba',
	'\uD83E\uDD23': '1f923',
	'\uD83C\uDFBB': '1f3bb',
	'\uD83C\uDFBC': '1f3bc',
	'\uD83C\uDFBD': '1f3bd',
	'\uD83E\uDD22': '1f922',
	'\uD83C\uDFBE': '1f3be',
	'\uD83C\uDFBF': '1f3bf',
	'\uD83C\uDFC0': '1f3c0',
	'\uD83C\uDFC1': '1f3c1',
	'\uD83E\uDD21': '1f921',
	'\uD83C\uDFC2': '1f3c2',
	'\uD83C\uDFC3': '1f3c3',
	'\uD83C\uDFC4': '1f3c4',
	'\uD83C\uDFC6': '1f3c6',
	'\uD83C\uDFC8': '1f3c8',
	'\uD83C\uDFCA': '1f3ca',
	'\uD83C\uDFE0': '1f3e0',
	'\uD83C\uDFE1': '1f3e1',
	'\uD83C\uDFE2': '1f3e2',
	'\uD83C\uDFE3': '1f3e3',
	'\uD83C\uDFE5': '1f3e5',
	'\uD83C\uDFE6': '1f3e6',
	'\uD83C\uDFE7': '1f3e7',
	'\uD83C\uDFE8': '1f3e8',
	'\uD83C\uDFE9': '1f3e9',
	'\uD83C\uDFEA': '1f3ea',
	'\uD83C\uDFEB': '1f3eb',
	'\uD83C\uDFEC': '1f3ec',
	'\uD83E\uDD20': '1f920',
	'\uD83C\uDFED': '1f3ed',
	'\uD83C\uDFEE': '1f3ee',
	'\uD83C\uDFEF': '1f3ef',
	'\uD83C\uDFF0': '1f3f0',
	'\uD83D\uDC0C': '1f40c',
	'\uD83D\uDC0D': '1f40d',
	'\uD83D\uDC0E': '1f40e',
	'\uD83D\uDC11': '1f411',
	'\uD83D\uDC12': '1f412',
	'\uD83D\uDC14': '1f414',
	'\uD83D\uDC17': '1f417',
	'\uD83D\uDC18': '1f418',
	'\uD83D\uDC19': '1f419',
	'\uD83D\uDC1A': '1f41a',
	'\uD83D\uDC1B': '1f41b',
	'\uD83D\uDC1C': '1f41c',
	'\uD83D\uDC1D': '1f41d',
	'\uD83D\uDC1E': '1f41e',
	'\uD83D\uDC1F': '1f41f',
	'\uD83D\uDC20': '1f420',
	'\uD83D\uDC21': '1f421',
	'\uD83D\uDC22': '1f422',
	'\uD83D\uDC23': '1f423',
	'\uD83D\uDC24': '1f424',
	'\uD83D\uDC25': '1f425',
	'\uD83D\uDC26': '1f426',
	'\uD83D\uDC27': '1f427',
	'\uD83D\uDC28': '1f428',
	'\uD83D\uDC29': '1f429',
	'\uD83D\uDC2B': '1f42b',
	'\uD83D\uDC2C': '1f42c',
	'\uD83D\uDC2D': '1f42d',
	'\uD83D\uDC2E': '1f42e',
	'\uD83D\uDC2F': '1f42f',
	'\uD83D\uDC30': '1f430',
	'\uD83D\uDC31': '1f431',
	'\uD83D\uDC32': '1f432',
	'\uD83D\uDC33': '1f433',
	'\uD83D\uDC34': '1f434',
	'\uD83D\uDC35': '1f435',
	'\uD83D\uDC36': '1f436',
	'\uD83D\uDC37': '1f437',
	'\uD83D\uDC38': '1f438',
	'\uD83D\uDC39': '1f439',
	'\uD83D\uDC3A': '1f43a',
	'\uD83D\uDC3B': '1f43b',
	'\uD83D\uDC3C': '1f43c',
	'\uD83D\uDC3D': '1f43d',
	'\uD83D\uDC3E': '1f43e',
	'\uD83D\uDC40': '1f440',
	'\uD83D\uDC42': '1f442',
	'\uD83D\uDC43': '1f443',
	'\uD83D\uDC44': '1f444',
	'\uD83D\uDC45': '1f445',
	'\uD83D\uDC46': '1f446',
	'\uD83D\uDC47': '1f447',
	'\uD83D\uDC48': '1f448',
	'\uD83D\uDC49': '1f449',
	'\uD83D\uDC4A': '1f44a',
	'\uD83D\uDC4B': '1f44b',
	'\uD83D\uDC4C': '1f44c',
	'\uD83D\uDC4D': '1f44d',
	'\uD83D\uDC4E': '1f44e',
	'\uD83D\uDC4F': '1f44f',
	'\uD83D\uDC50': '1f450',
	'\uD83D\uDC51': '1f451',
	'\uD83D\uDC52': '1f452',
	'\uD83D\uDC53': '1f453',
	'\uD83D\uDC54': '1f454',
	'\uD83D\uDC55': '1f455',
	'\uD83D\uDC56': '1f456',
	'\uD83D\uDC57': '1f457',
	'\uD83D\uDC58': '1f458',
	'\uD83D\uDC59': '1f459',
	'\uD83D\uDC5A': '1f45a',
	'\uD83D\uDC5B': '1f45b',
	'\uD83D\uDC5C': '1f45c',
	'\uD83D\uDC5D': '1f45d',
	'\uD83D\uDC5E': '1f45e',
	'\uD83D\uDC5F': '1f45f',
	'\uD83D\uDC60': '1f460',
	'\uD83D\uDC61': '1f461',
	'\uD83D\uDC62': '1f462',
	'\uD83D\uDC63': '1f463',
	'\uD83D\uDC64': '1f464',
	'\uD83D\uDC66': '1f466',
	'\uD83D\uDC67': '1f467',
	'\uD83D\uDC68': '1f468',
	'\uD83D\uDC69': '1f469',
	'\uD83D\uDC6A': '1f46a',
	'\uD83D\uDC6B': '1f46b',
	'\uD83D\uDC6E': '1f46e',
	'\uD83D\uDC6F': '1f46f',
	'\uD83D\uDC70': '1f470',
	'\uD83D\uDC71': '1f471',
	'\uD83D\uDC72': '1f472',
	'\uD83D\uDC73': '1f473',
	'\uD83D\uDC74': '1f474',
	'\uD83D\uDC75': '1f475',
	'\uD83D\uDC76': '1f476',
	'\uD83D\uDC77': '1f477',
	'\uD83D\uDC78': '1f478',
	'\uD83D\uDC79': '1f479',
	'\uD83D\uDC7A': '1f47a',
	'\uD83D\uDC7B': '1f47b',
	'\uD83D\uDC7C': '1f47c',
	'\uD83D\uDC7D': '1f47d',
	'\uD83D\uDC7E': '1f47e',
	'\uD83D\uDC7F': '1f47f',
	'\uD83D\uDC80': '1f480',
	'\uD83D\uDCC7': '1f4c7',
	'\uD83D\uDC81': '1f481',
	'\uD83D\uDC82': '1f482',
	'\uD83D\uDC83': '1f483',
	'\uD83D\uDC84': '1f484',
	'\uD83D\uDC85': '1f485',
	'\uD83D\uDCD2': '1f4d2',
	'\uD83D\uDC86': '1f486',
	'\uD83D\uDCD3': '1f4d3',
	'\uD83D\uDC87': '1f487',
	'\uD83D\uDCD4': '1f4d4',
	'\uD83D\uDC88': '1f488',
	'\uD83D\uDCD5': '1f4d5',
	'\uD83D\uDC89': '1f489',
	'\uD83D\uDCD6': '1f4d6',
	'\uD83D\uDC8A': '1f48a',
	'\uD83D\uDCD7': '1f4d7',
	'\uD83D\uDC8B': '1f48b',
	'\uD83D\uDCD8': '1f4d8',
	'\uD83D\uDC8C': '1f48c',
	'\uD83D\uDCD9': '1f4d9',
	'\uD83D\uDC8D': '1f48d',
	'\uD83D\uDCDA': '1f4da',
	'\uD83D\uDC8E': '1f48e',
	'\uD83D\uDCDB': '1f4db',
	'\uD83D\uDC8F': '1f48f',
	'\uD83D\uDCDC': '1f4dc',
	'\uD83D\uDC90': '1f490',
	'\uD83D\uDCDD': '1f4dd',
	'\uD83D\uDC91': '1f491',
	'\uD83D\uDCDE': '1f4de',
	'\uD83D\uDC92': '1f492',
	'\uD83D\uDCDF': '1f4df',
	'\uD83D\uDCE0': '1f4e0',
	'\uD83D\uDC93': '1f493',
	'\uD83D\uDCE1': '1f4e1',
	'\uD83D\uDCE2': '1f4e2',
	'\uD83D\uDC94': '1f494',
	'\uD83D\uDCE3': '1f4e3',
	'\uD83D\uDCE4': '1f4e4',
	'\uD83D\uDC95': '1f495',
	'\uD83D\uDCE5': '1f4e5',
	'\uD83D\uDCE6': '1f4e6',
	'\uD83D\uDC96': '1f496',
	'\uD83D\uDCE7': '1f4e7',
	'\uD83D\uDCE8': '1f4e8',
	'\uD83D\uDC97': '1f497',
	'\uD83D\uDCE9': '1f4e9',
	'\uD83D\uDCEA': '1f4ea',
	'\uD83D\uDC98': '1f498',
	'\uD83D\uDCEB': '1f4eb',
	'\uD83D\uDCEE': '1f4ee',
	'\uD83D\uDC99': '1f499',
	'\uD83D\uDCF0': '1f4f0',
	'\uD83D\uDCF1': '1f4f1',
	'\uD83D\uDC9A': '1f49a',
	'\uD83D\uDCF2': '1f4f2',
	'\uD83D\uDCF3': '1f4f3',
	'\uD83D\uDC9B': '1f49b',
	'\uD83D\uDCF4': '1f4f4',
	'\uD83D\uDCF6': '1f4f6',
	'\uD83D\uDC9C': '1f49c',
	'\uD83D\uDCF7': '1f4f7',
	'\uD83D\uDCF9': '1f4f9',
	'\uD83D\uDC9D': '1f49d',
	'\uD83D\uDCFA': '1f4fa',
	'\uD83D\uDCFB': '1f4fb',
	'\uD83D\uDC9E': '1f49e',
	'\uD83D\uDCFC': '1f4fc',
	'\uD83D\uDD03': '1f503',
	'\uD83D\uDC9F': '1f49f',
	'\uD83D\uDD0A': '1f50a',
	'\uD83D\uDD0B': '1f50b',
	'\uD83D\uDCA0': '1f4a0',
	'\uD83D\uDD0C': '1f50c',
	'\uD83D\uDD0D': '1f50d',
	'\uD83D\uDCA1': '1f4a1',
	'\uD83D\uDD0E': '1f50e',
	'\uD83D\uDD0F': '1f50f',
	'\uD83D\uDCA2': '1f4a2',
	'\uD83D\uDD10': '1f510',
	'\uD83D\uDD11': '1f511',
	'\uD83D\uDCA3': '1f4a3',
	'\uD83D\uDD12': '1f512',
	'\uD83D\uDD13': '1f513',
	'\uD83D\uDCA4': '1f4a4',
	'\uD83D\uDD14': '1f514',
	'\uD83D\uDD16': '1f516',
	'\uD83D\uDCA5': '1f4a5',
	'\uD83D\uDD17': '1f517',
	'\uD83D\uDD18': '1f518',
	'\uD83D\uDCA6': '1f4a6',
	'\uD83D\uDD19': '1f519',
	'\uD83D\uDD1A': '1f51a',
	'\uD83D\uDCA7': '1f4a7',
	'\uD83D\uDD1B': '1f51b',
	'\uD83D\uDD1C': '1f51c',
	'\uD83D\uDCA8': '1f4a8',
	'\uD83D\uDD1D': '1f51d',
	'\uD83D\uDD1E': '1f51e',
	'\uD83D\uDCA9': '1f4a9',
	'\uD83D\uDD1F': '1f51f',
	'\uD83D\uDCAA': '1f4aa',
	'\uD83D\uDD20': '1f520',
	'\uD83D\uDD21': '1f521',
	'\uD83D\uDCAB': '1f4ab',
	'\uD83D\uDD22': '1f522',
	'\uD83D\uDD23': '1f523',
	'\uD83D\uDCAC': '1f4ac',
	'\uD83D\uDD24': '1f524',
	'\uD83D\uDD25': '1f525',
	'\uD83D\uDCAE': '1f4ae',
	'\uD83D\uDD26': '1f526',
	'\uD83D\uDD27': '1f527',
	'\uD83D\uDCAF': '1f4af',
	'\uD83D\uDD28': '1f528',
	'\uD83D\uDD29': '1f529',
	'\uD83D\uDCB0': '1f4b0',
	'\uD83D\uDD2A': '1f52a',
	'\uD83D\uDD2B': '1f52b',
	'\uD83D\uDCB1': '1f4b1',
	'\uD83D\uDD2E': '1f52e',
	'\uD83D\uDCB2': '1f4b2',
	'\uD83D\uDD2F': '1f52f',
	'\uD83D\uDCB3': '1f4b3',
	'\uD83D\uDD30': '1f530',
	'\uD83D\uDD31': '1f531',
	'\uD83D\uDCB4': '1f4b4',
	'\uD83D\uDD32': '1f532',
	'\uD83D\uDD33': '1f533',
	'\uD83D\uDCB5': '1f4b5',
	'\uD83D\uDD34': '1f534',
	'\uD83D\uDD35': '1f535',
	'\uD83D\uDCB8': '1f4b8',
	'\uD83D\uDD36': '1f536',
	'\uD83D\uDD37': '1f537',
	'\uD83D\uDCB9': '1f4b9',
	'\uD83D\uDD38': '1f538',
	'\uD83D\uDD39': '1f539',
	'\uD83D\uDCBA': '1f4ba',
	'\uD83D\uDD3A': '1f53a',
	'\uD83D\uDD3B': '1f53b',
	'\uD83D\uDCBB': '1f4bb',
	'\uD83D\uDD3C': '1f53c',
	'\uD83D\uDCBC': '1f4bc',
	'\uD83D\uDD3D': '1f53d',
	'\uD83D\uDD50': '1f550',
	'\uD83D\uDCBD': '1f4bd',
	'\uD83D\uDD51': '1f551',
	'\uD83D\uDCBE': '1f4be',
	'\uD83D\uDD52': '1f552',
	'\uD83D\uDCBF': '1f4bf',
	'\uD83D\uDD53': '1f553',
	'\uD83D\uDCC0': '1f4c0',
	'\uD83D\uDD54': '1f554',
	'\uD83D\uDD55': '1f555',
	'\uD83D\uDCC1': '1f4c1',
	'\uD83D\uDD56': '1f556',
	'\uD83D\uDD57': '1f557',
	'\uD83D\uDCC2': '1f4c2',
	'\uD83D\uDD58': '1f558',
	'\uD83D\uDD59': '1f559',
	'\uD83D\uDCC3': '1f4c3',
	'\uD83D\uDD5A': '1f55a',
	'\uD83D\uDD5B': '1f55b',
	'\uD83D\uDCC4': '1f4c4',
	'\uD83D\uDDFB': '1f5fb',
	'\uD83D\uDDFC': '1f5fc',
	'\uD83D\uDCC5': '1f4c5',
	'\uD83D\uDDFD': '1f5fd',
	'\uD83D\uDDFE': '1f5fe',
	'\uD83D\uDCC6': '1f4c6',
	'\uD83D\uDDFF': '1f5ff',
	'\uD83D\uDE01': '1f601',
	'\uD83D\uDE02': '1f602',
	'\uD83D\uDE03': '1f603',
	'\uD83D\uDCC8': '1f4c8',
	'\uD83D\uDE04': '1f604',
	'\uD83D\uDE05': '1f605',
	'\uD83D\uDCC9': '1f4c9',
	'\uD83D\uDE06': '1f606',
	'\uD83D\uDE09': '1f609',
	'\uD83D\uDCCA': '1f4ca',
	'\uD83D\uDE0A': '1f60a',
	'\uD83D\uDE0B': '1f60b',
	'\uD83D\uDCCB': '1f4cb',
	'\uD83D\uDE0C': '1f60c',
	'\uD83D\uDE0D': '1f60d',
	'\uD83D\uDCCC': '1f4cc',
	'\uD83D\uDE0F': '1f60f',
	'\uD83D\uDE12': '1f612',
	'\uD83D\uDCCD': '1f4cd',
	'\uD83D\uDE13': '1f613',
	'\uD83D\uDE14': '1f614',
	'\uD83D\uDCCE': '1f4ce',
	'\uD83D\uDE16': '1f616',
	'\uD83D\uDE18': '1f618',
	'\uD83D\uDCCF': '1f4cf',
	'\uD83D\uDE1A': '1f61a',
	'\uD83D\uDE1C': '1f61c',
	'\uD83D\uDCD0': '1f4d0',
	'\uD83D\uDE1D': '1f61d',
	'\uD83D\uDE1E': '1f61e',
	'\uD83D\uDCD1': '1f4d1',
	'\uD83D\uDE20': '1f620',
	'\uD83D\uDE21': '1f621',
	'\uD83D\uDE22': '1f622',
	'\uD83D\uDE23': '1f623',
	'\uD83D\uDE24': '1f624',
	'\uD83D\uDE25': '1f625',
	'\uD83D\uDE28': '1f628',
	'\uD83D\uDE29': '1f629',
	'\uD83D\uDE2A': '1f62a',
	'\uD83D\uDE2B': '1f62b',
	'\uD83D\uDE2D': '1f62d',
	'\uD83D\uDE30': '1f630',
	'\uD83D\uDE31': '1f631',
	'\uD83D\uDE32': '1f632',
	'\uD83D\uDE33': '1f633',
	'\uD83D\uDE35': '1f635',
	'\uD83D\uDE37': '1f637',
	'\uD83D\uDE38': '1f638',
	'\uD83D\uDE39': '1f639',
	'\uD83D\uDE3A': '1f63a',
	'\uD83D\uDE3B': '1f63b',
	'\uD83D\uDE3C': '1f63c',
	'\uD83D\uDE3D': '1f63d',
	'\uD83D\uDE3E': '1f63e',
	'\uD83D\uDE3F': '1f63f',
	'\uD83D\uDE40': '1f640',
	'\uD83D\uDE45': '1f645',
	'\uD83D\uDE46': '1f646',
	'\uD83D\uDE47': '1f647',
	'\uD83D\uDE48': '1f648',
	'\uD83D\uDE49': '1f649',
	'\uD83D\uDE4A': '1f64a',
	'\uD83D\uDE4B': '1f64b',
	'\uD83D\uDE4C': '1f64c',
	'\uD83D\uDE4D': '1f64d',
	'\uD83D\uDE4E': '1f64e',
	'\uD83D\uDE4F': '1f64f',
	'\uD83D\uDE80': '1f680',
	'\uD83D\uDE83': '1f683',
	'\uD83D\uDE84': '1f684',
	'\uD83D\uDE85': '1f685',
	'\uD83D\uDE87': '1f687',
	'\uD83D\uDE89': '1f689',
	'\uD83D\uDE8C': '1f68c',
	'\uD83D\uDE8F': '1f68f',
	'\uD83D\uDE91': '1f691',
	'\uD83D\uDE92': '1f692',
	'\uD83D\uDE93': '1f693',
	'\uD83D\uDE95': '1f695',
	'\uD83D\uDE97': '1f697',
	'\uD83D\uDE99': '1f699',
	'\uD83D\uDE9A': '1f69a',
	'\uD83D\uDEA2': '1f6a2',
	'\uD83D\uDEA4': '1f6a4',
	'\uD83D\uDEA5': '1f6a5',
	'\uD83D\uDEA7': '1f6a7',
	'\uD83D\uDEA8': '1f6a8',
	'\uD83D\uDEA9': '1f6a9',
	'\uD83D\uDEAA': '1f6aa',
	'\uD83D\uDEAB': '1f6ab',
	'\uD83D\uDEAC': '1f6ac',
	'\uD83D\uDEAD': '1f6ad',
	'\uD83D\uDEB2': '1f6b2',
	'\uD83D\uDEB6': '1f6b6',
	'\uD83D\uDEB9': '1f6b9',
	'\uD83D\uDEBA': '1f6ba',
	'\uD83D\uDEBB': '1f6bb',
	'\uD83D\uDEBC': '1f6bc',
	'\uD83D\uDEBD': '1f6bd',
	'\uD83D\uDEBE': '1f6be',
	'\uD83D\uDEC0': '1f6c0',
	'\uD83E\uDD18': '1f918',
	'\uD83D\uDE00': '1f600',
	'\uD83D\uDE07': '1f607',
	'\uD83D\uDE08': '1f608',
	'\uD83D\uDE0E': '1f60e',
	'\uD83D\uDE10': '1f610',
	'\uD83D\uDE11': '1f611',
	'\uD83D\uDE15': '1f615',
	'\uD83D\uDE17': '1f617',
	'\uD83D\uDE19': '1f619',
	'\uD83D\uDE1B': '1f61b',
	'\uD83D\uDE1F': '1f61f',
	'\uD83D\uDE26': '1f626',
	'\uD83D\uDE27': '1f627',
	'\uD83D\uDE2C': '1f62c',
	'\uD83D\uDE2E': '1f62e',
	'\uD83D\uDE2F': '1f62f',
	'\uD83D\uDE34': '1f634',
	'\uD83D\uDE36': '1f636',
	'\uD83D\uDE81': '1f681',
	'\uD83D\uDE82': '1f682',
	'\uD83D\uDE86': '1f686',
	'\uD83D\uDE88': '1f688',
	'\uD83D\uDE8A': '1f68a',
	'\uD83D\uDE8D': '1f68d',
	'\uD83D\uDE8E': '1f68e',
	'\uD83D\uDE90': '1f690',
	'\uD83D\uDE94': '1f694',
	'\uD83D\uDE96': '1f696',
	'\uD83D\uDE98': '1f698',
	'\uD83D\uDE9B': '1f69b',
	'\uD83D\uDE9C': '1f69c',
	'\uD83D\uDE9D': '1f69d',
	'\uD83D\uDE9E': '1f69e',
	'\uD83D\uDE9F': '1f69f',
	'\uD83D\uDEA0': '1f6a0',
	'\uD83D\uDEA1': '1f6a1',
	'\uD83D\uDEA3': '1f6a3',
	'\uD83D\uDEA6': '1f6a6',
	'\uD83D\uDEAE': '1f6ae',
	'\uD83D\uDEAF': '1f6af',
	'\uD83D\uDEB0': '1f6b0',
	'\uD83D\uDEB1': '1f6b1',
	'\uD83D\uDEB3': '1f6b3',
	'\uD83D\uDEB4': '1f6b4',
	'\uD83D\uDEB5': '1f6b5',
	'\uD83D\uDEB7': '1f6b7',
	'\uD83D\uDEB8': '1f6b8',
	'\uD83D\uDEBF': '1f6bf',
	'\uD83D\uDEC1': '1f6c1',
	'\uD83D\uDEC2': '1f6c2',
	'\uD83D\uDEC3': '1f6c3',
	'\uD83D\uDEC4': '1f6c4',
	'\uD83D\uDEC5': '1f6c5',
	'\uD83C\uDF0D': '1f30d',
	'\uD83C\uDF0E': '1f30e',
	'\uD83C\uDF10': '1f310',
	'\uD83C\uDF12': '1f312',
	'\uD83C\uDF16': '1f316',
	'\uD83C\uDF17': '1f317',
	'\uD83C\uDF18': '1f318',
	'\uD83C\uDF1A': '1f31a',
	'\uD83C\uDF1C': '1f31c',
	'\uD83C\uDF1D': '1f31d',
	'\uD83C\uDF1E': '1f31e',
	'\uD83C\uDF32': '1f332',
	'\uD83C\uDF33': '1f333',
	'\uD83C\uDF4B': '1f34b',
	'\uD83C\uDF50': '1f350',
	'\uD83C\uDF7C': '1f37c',
	'\uD83C\uDFC7': '1f3c7',
	'\uD83C\uDFC9': '1f3c9',
	'\uD83C\uDFE4': '1f3e4',
	'\uD83D\uDC00': '1f400',
	'\uD83D\uDC01': '1f401',
	'\uD83D\uDC02': '1f402',
	'\uD83D\uDC03': '1f403',
	'\uD83D\uDC04': '1f404',
	'\uD83D\uDC05': '1f405',
	'\uD83D\uDC06': '1f406',
	'\uD83D\uDC07': '1f407',
	'\uD83D\uDC08': '1f408',
	'\uD83D\uDC09': '1f409',
	'\uD83D\uDC0A': '1f40a',
	'\uD83D\uDC0B': '1f40b',
	'\uD83D\uDC0F': '1f40f',
	'\uD83D\uDC10': '1f410',
	'\uD83D\uDC13': '1f413',
	'\uD83D\uDC15': '1f415',
	'\uD83D\uDC16': '1f416',
	'\uD83D\uDC2A': '1f42a',
	'\uD83D\uDC65': '1f465',
	'\uD83D\uDC6C': '1f46c',
	'\uD83D\uDC6D': '1f46d',
	'\uD83D\uDCAD': '1f4ad',
	'\uD83D\uDCB6': '1f4b6',
	'\uD83D\uDCB7': '1f4b7',
	'\uD83D\uDCEC': '1f4ec',
	'\uD83D\uDCED': '1f4ed',
	'\uD83D\uDCEF': '1f4ef',
	'\uD83D\uDCF5': '1f4f5',
	'\uD83D\uDD00': '1f500',
	'\uD83D\uDD01': '1f501',
	'\uD83D\uDD02': '1f502',
	'\uD83D\uDD04': '1f504',
	'\uD83D\uDD05': '1f505',
	'\uD83D\uDD06': '1f506',
	'\uD83D\uDD07': '1f507',
	'\uD83D\uDD09': '1f509',
	'\uD83D\uDD15': '1f515',
	'\uD83D\uDD2C': '1f52c',
	'\uD83D\uDD2D': '1f52d',
	'\uD83D\uDD5C': '1f55c',
	'\uD83D\uDD5D': '1f55d',
	'\uD83D\uDD5E': '1f55e',
	'\uD83D\uDD5F': '1f55f',
	'\uD83D\uDD60': '1f560',
	'\uD83D\uDD61': '1f561',
	'\uD83D\uDD62': '1f562',
	'\uD83D\uDD63': '1f563',
	'\uD83D\uDD64': '1f564',
	'\uD83D\uDD65': '1f565',
	'\uD83D\uDD66': '1f566',
	'\uD83D\uDD67': '1f567',
	'\uD83D\uDD08': '1f508',
	'\uD83D\uDE8B': '1f68b',
	'\uD83C\uDFC5': '1f3c5',
	'\uD83C\uDFF4': '1f3f4',
	'\uD83D\uDCF8': '1f4f8',
	'\uD83D\uDECC': '1f6cc',
	'\uD83D\uDD95': '1f595',
	'\uD83D\uDD96': '1f596',
	'\uD83D\uDE41': '1f641',
	'\uD83D\uDE42': '1f642',
	'\uD83D\uDEEB': '1f6eb',
	'\uD83D\uDEEC': '1f6ec',
	'\uD83C\uDFFB': '1f3fb',
	'\uD83C\uDFFC': '1f3fc',
	'\uD83C\uDFFD': '1f3fd',
	'\uD83C\uDFFE': '1f3fe',
	'\uD83C\uDFFF': '1f3ff',
	'\uD83D\uDE43': '1f643',
	'\uD83E\uDD11': '1f911',
	'\uD83E\uDD13': '1f913',
	'\uD83E\uDD17': '1f917',
	'\uD83D\uDE44': '1f644',
	'\uD83E\uDD14': '1f914',
	'\uD83E\uDD10': '1f910',
	'\uD83E\uDD12': '1f912',
	'\uD83E\uDD15': '1f915',
	'\uD83E\uDD16': '1f916',
	'\uD83E\uDD81': '1f981',
	'\uD83E\uDD84': '1f984',
	'\uD83E\uDD82': '1f982',
	'\uD83E\uDD80': '1f980',
	'\uD83E\uDD83': '1f983',
	'\uD83E\uDDC0': '1f9c0',
	'\uD83C\uDF2D': '1f32d',
	'\uD83C\uDF2E': '1f32e',
	'\uD83C\uDF2F': '1f32f',
	'\uD83C\uDF7F': '1f37f',
	'\uD83C\uDF7E': '1f37e',
	'\uD83C\uDFF9': '1f3f9',
	'\uD83C\uDFFA': '1f3fa',
	'\uD83D\uDED0': '1f6d0',
	'\uD83D\uDD4B': '1f54b',
	'\uD83D\uDD4C': '1f54c',
	'\uD83D\uDD4D': '1f54d',
	'\uD83D\uDD4E': '1f54e',
	'\uD83D\uDCFF': '1f4ff',
	'\uD83C\uDFCF': '1f3cf',
	'\uD83C\uDFD0': '1f3d0',
	'\uD83C\uDFD1': '1f3d1',
	'\uD83C\uDFD2': '1f3d2',
	'\uD83C\uDFD3': '1f3d3',
	'\uD83C\uDFF8': '1f3f8',
	'\uD83E\uDD41': '1f941',
	'\uD83E\uDD90': '1f990',
	'\uD83E\uDD91': '1f991',
	'\uD83E\uDD5A': '1f95a',
	'\uD83E\uDD5B': '1f95b',
	'\uD83E\uDD5C': '1f95c',
	'\uD83E\uDD5D': '1f95d',
	'\uD83E\uDD5E': '1f95e',
	'\uD83C\uDDFC': '1f1fc',
	'\uD83C\uDDFB': '1f1fb',
	'\uD83C\uDDFA': '1f1fa',
	'\uD83C\uDDF9': '1f1f9',
	'\uD83C\uDDF8': '1f1f8',
	'\uD83C\uDDF7': '1f1f7',
	'\uD83C\uDDF6': '1f1f6',
	'\uD83C\uDDF5': '1f1f5',
	'\uD83C\uDDF4': '1f1f4',
	'\uD83C\uDDF3': '1f1f3',
	'\uD83C\uDDF2': '1f1f2',
	'\uD83C\uDDF1': '1f1f1',
	'\uD83C\uDDF0': '1f1f0',
	'\uD83C\uDDEF': '1f1ef',
	'\uD83C\uDDEE': '1f1ee',
	'\uD83C\uDDED': '1f1ed',
	'\uD83C\uDDEC': '1f1ec',
	'\uD83C\uDDEB': '1f1eb',
	'\uD83C\uDDEA': '1f1ea',
	'\uD83C\uDDE9': '1f1e9',
	'\uD83C\uDDE8': '1f1e8',
	'\uD83C\uDDE7': '1f1e7',
	'\uD83C\uDDE6': '1f1e6',
	'\u23E9': '23e9',
	'\u23EA': '23ea',
	'\u23EB': '23eb',
	'\u23EC': '23ec',
	'\u23F0': '23f0',
	'\u23F3': '23f3',
	'*': '002a',
	'\u26CE': '26ce',
	'\u2705': '2705',
	'\u270A': '270a',
	'\u270B': '270b',
	'\u2728': '2728',
	'\u274C': '274c',
	'\u274E': '274e',
	'\u2753': '2753',
	'\u2754': '2754',
	'\u2755': '2755',
	'\u2795': '2795',
	'\u2796': '2796',
	'\u2797': '2797',
	'\u27B0': '27b0',
	'#': '0023',
	'\u27BF': '27bf',
	'9': '0039',
	'8': '0038',
	'7': '0037',
	'6': '0036',
	'5': '0035',
	'4': '0034',
	'3': '0033',
	'2': '0032',
	'1': '0031',
	'0': '0030'
};

const emojiList = {
	':kiss_ww:':
		{'unicode': ['1f469-200d-2764-fe0f-200d-1f48b-200d-1f469','1f469-2764-1f48b-1f469'], 'isCanonical': true},
	':couplekiss_ww:':
		{'unicode': ['1f469-200d-2764-fe0f-200d-1f48b-200d-1f469','1f469-2764-1f48b-1f469'], 'isCanonical': false},
	':kiss_mm:':
		{'unicode': ['1f468-200d-2764-fe0f-200d-1f48b-200d-1f468','1f468-2764-1f48b-1f468'], 'isCanonical': true},
	':couplekiss_mm:':
		{'unicode': ['1f468-200d-2764-fe0f-200d-1f48b-200d-1f468','1f468-2764-1f48b-1f468'], 'isCanonical': false},
	':family_mmbb:':
		{'unicode': ['1f468-200d-1f468-200d-1f466-200d-1f466','1f468-1f468-1f466-1f466'], 'isCanonical': true},
	':family_mmgb:':
		{'unicode': ['1f468-200d-1f468-200d-1f467-200d-1f466','1f468-1f468-1f467-1f466'], 'isCanonical': true},
	':family_mmgg:':
		{'unicode': ['1f468-200d-1f468-200d-1f467-200d-1f467','1f468-1f468-1f467-1f467'], 'isCanonical': true},
	':family_mwbb:':
		{'unicode': ['1f468-200d-1f469-200d-1f466-200d-1f466','1f468-1f469-1f466-1f466'], 'isCanonical': true},
	':family_mwgb:':
		{'unicode': ['1f468-200d-1f469-200d-1f467-200d-1f466','1f468-1f469-1f467-1f466'], 'isCanonical': true},
	':family_mwgg:':
		{'unicode': ['1f468-200d-1f469-200d-1f467-200d-1f467','1f468-1f469-1f467-1f467'], 'isCanonical': true},
	':family_wwbb:':
		{'unicode': ['1f469-200d-1f469-200d-1f466-200d-1f466','1f469-1f469-1f466-1f466'], 'isCanonical': true},
	':family_wwgb:':
		{'unicode': ['1f469-200d-1f469-200d-1f467-200d-1f466','1f469-1f469-1f467-1f466'], 'isCanonical': true},
	':family_wwgg:':
		{'unicode': ['1f469-200d-1f469-200d-1f467-200d-1f467','1f469-1f469-1f467-1f467'], 'isCanonical': true},
	':couple_ww:':
		{'unicode': ['1f469-200d-2764-fe0f-200d-1f469','1f469-2764-1f469'], 'isCanonical': true},
	':couple_with_heart_ww:':
		{'unicode': ['1f469-200d-2764-fe0f-200d-1f469','1f469-2764-1f469'], 'isCanonical': false},
	':couple_mm:':
		{'unicode': ['1f468-200d-2764-fe0f-200d-1f468','1f468-2764-1f468'], 'isCanonical': true},
	':couple_with_heart_mm:':
		{'unicode': ['1f468-200d-2764-fe0f-200d-1f468','1f468-2764-1f468'], 'isCanonical': false},
	':family_mmb:':
		{'unicode': ['1f468-200d-1f468-200d-1f466','1f468-1f468-1f466'], 'isCanonical': true},
	':family_mmg:':
		{'unicode': ['1f468-200d-1f468-200d-1f467','1f468-1f468-1f467'], 'isCanonical': true},
	':family_mwg:':
		{'unicode': ['1f468-200d-1f469-200d-1f467','1f468-1f469-1f467'], 'isCanonical': true},
	':family_wwb:':
		{'unicode': ['1f469-200d-1f469-200d-1f466','1f469-1f469-1f466'], 'isCanonical': true},
	':family_wwg:':
		{'unicode': ['1f469-200d-1f469-200d-1f467','1f469-1f469-1f467'], 'isCanonical': true},
	':eye_in_speech_bubble:':
		{'unicode': ['1f441-200d-1f5e8','1f441-1f5e8'], 'isCanonical': true},
	':hash:':
		{'unicode': ['0023-fe0f-20e3','0023-20e3'], 'isCanonical': true},
	':zero:':
		{'unicode': ['0030-fe0f-20e3','0030-20e3'], 'isCanonical': true},
	':one:':
		{'unicode': ['0031-fe0f-20e3','0031-20e3'], 'isCanonical': true},
	':two:':
		{'unicode': ['0032-fe0f-20e3','0032-20e3'], 'isCanonical': true},
	':three:':
		{'unicode': ['0033-fe0f-20e3','0033-20e3'], 'isCanonical': true},
	':four:':
		{'unicode': ['0034-fe0f-20e3','0034-20e3'], 'isCanonical': true},
	':five:':
		{'unicode': ['0035-fe0f-20e3','0035-20e3'], 'isCanonical': true},
	':six:':
		{'unicode': ['0036-fe0f-20e3','0036-20e3'], 'isCanonical': true},
	':seven:':
		{'unicode': ['0037-fe0f-20e3','0037-20e3'], 'isCanonical': true},
	':eight:':
		{'unicode': ['0038-fe0f-20e3','0038-20e3'], 'isCanonical': true},
	':nine:':
		{'unicode': ['0039-fe0f-20e3','0039-20e3'], 'isCanonical': true},
	':asterisk:':
		{'unicode': ['002a-fe0f-20e3','002a-20e3'], 'isCanonical': true},
	':keycap_asterisk:':
		{'unicode': ['002a-fe0f-20e3','002a-20e3'], 'isCanonical': false},
	':handball_tone5:':
		{'unicode': ['1f93e-1f3ff'], 'isCanonical': true},
	':handball_tone4:':
		{'unicode': ['1f93e-1f3fe'], 'isCanonical': true},
	':handball_tone3:':
		{'unicode': ['1f93e-1f3fd'], 'isCanonical': true},
	':handball_tone2:':
		{'unicode': ['1f93e-1f3fc'], 'isCanonical': true},
	':handball_tone1:':
		{'unicode': ['1f93e-1f3fb'], 'isCanonical': true},
	':water_polo_tone5:':
		{'unicode': ['1f93d-1f3ff'], 'isCanonical': true},
	':water_polo_tone4:':
		{'unicode': ['1f93d-1f3fe'], 'isCanonical': true},
	':water_polo_tone3:':
		{'unicode': ['1f93d-1f3fd'], 'isCanonical': true},
	':water_polo_tone2:':
		{'unicode': ['1f93d-1f3fc'], 'isCanonical': true},
	':water_polo_tone1:':
		{'unicode': ['1f93d-1f3fb'], 'isCanonical': true},
	':wrestlers_tone5:':
		{'unicode': ['1f93c-1f3ff'], 'isCanonical': true},
	':wrestling_tone5:':
		{'unicode': ['1f93c-1f3ff'], 'isCanonical': false},
	':wrestlers_tone4:':
		{'unicode': ['1f93c-1f3fe'], 'isCanonical': true},
	':wrestling_tone4:':
		{'unicode': ['1f93c-1f3fe'], 'isCanonical': false},
	':wrestlers_tone3:':
		{'unicode': ['1f93c-1f3fd'], 'isCanonical': true},
	':wrestling_tone3:':
		{'unicode': ['1f93c-1f3fd'], 'isCanonical': false},
	':wrestlers_tone2:':
		{'unicode': ['1f93c-1f3fc'], 'isCanonical': true},
	':wrestling_tone2:':
		{'unicode': ['1f93c-1f3fc'], 'isCanonical': false},
	':wrestlers_tone1:':
		{'unicode': ['1f93c-1f3fb'], 'isCanonical': true},
	':wrestling_tone1:':
		{'unicode': ['1f93c-1f3fb'], 'isCanonical': false},
	':juggling_tone5:':
		{'unicode': ['1f939-1f3ff'], 'isCanonical': true},
	':juggler_tone5:':
		{'unicode': ['1f939-1f3ff'], 'isCanonical': false},
	':juggling_tone4:':
		{'unicode': ['1f939-1f3fe'], 'isCanonical': true},
	':juggler_tone4:':
		{'unicode': ['1f939-1f3fe'], 'isCanonical': false},
	':juggling_tone3:':
		{'unicode': ['1f939-1f3fd'], 'isCanonical': true},
	':juggler_tone3:':
		{'unicode': ['1f939-1f3fd'], 'isCanonical': false},
	':juggling_tone2:':
		{'unicode': ['1f939-1f3fc'], 'isCanonical': true},
	':juggler_tone2:':
		{'unicode': ['1f939-1f3fc'], 'isCanonical': false},
	':juggling_tone1:':
		{'unicode': ['1f939-1f3fb'], 'isCanonical': true},
	':juggler_tone1:':
		{'unicode': ['1f939-1f3fb'], 'isCanonical': false},
	':cartwheel_tone5:':
		{'unicode': ['1f938-1f3ff'], 'isCanonical': true},
	':person_doing_cartwheel_tone5:':
		{'unicode': ['1f938-1f3ff'], 'isCanonical': false},
	':cartwheel_tone4:':
		{'unicode': ['1f938-1f3fe'], 'isCanonical': true},
	':person_doing_cartwheel_tone4:':
		{'unicode': ['1f938-1f3fe'], 'isCanonical': false},
	':cartwheel_tone3:':
		{'unicode': ['1f938-1f3fd'], 'isCanonical': true},
	':person_doing_cartwheel_tone3:':
		{'unicode': ['1f938-1f3fd'], 'isCanonical': false},
	':cartwheel_tone2:':
		{'unicode': ['1f938-1f3fc'], 'isCanonical': true},
	':person_doing_cartwheel_tone2:':
		{'unicode': ['1f938-1f3fc'], 'isCanonical': false},
	':cartwheel_tone1:':
		{'unicode': ['1f938-1f3fb'], 'isCanonical': true},
	':person_doing_cartwheel_tone1:':
		{'unicode': ['1f938-1f3fb'], 'isCanonical': false},
	':shrug_tone5:':
		{'unicode': ['1f937-1f3ff'], 'isCanonical': true},
	':shrug_tone4:':
		{'unicode': ['1f937-1f3fe'], 'isCanonical': true},
	':shrug_tone3:':
		{'unicode': ['1f937-1f3fd'], 'isCanonical': true},
	':shrug_tone2:':
		{'unicode': ['1f937-1f3fc'], 'isCanonical': true},
	':shrug_tone1:':
		{'unicode': ['1f937-1f3fb'], 'isCanonical': true},
	':mrs_claus_tone5:':
		{'unicode': ['1f936-1f3ff'], 'isCanonical': true},
	':mother_christmas_tone5:':
		{'unicode': ['1f936-1f3ff'], 'isCanonical': false},
	':mrs_claus_tone4:':
		{'unicode': ['1f936-1f3fe'], 'isCanonical': true},
	':mother_christmas_tone4:':
		{'unicode': ['1f936-1f3fe'], 'isCanonical': false},
	':mrs_claus_tone3:':
		{'unicode': ['1f936-1f3fd'], 'isCanonical': true},
	':mother_christmas_tone3:':
		{'unicode': ['1f936-1f3fd'], 'isCanonical': false},
	':mrs_claus_tone2:':
		{'unicode': ['1f936-1f3fc'], 'isCanonical': true},
	':mother_christmas_tone2:':
		{'unicode': ['1f936-1f3fc'], 'isCanonical': false},
	':mrs_claus_tone1:':
		{'unicode': ['1f936-1f3fb'], 'isCanonical': true},
	':mother_christmas_tone1:':
		{'unicode': ['1f936-1f3fb'], 'isCanonical': false},
	':man_in_tuxedo_tone5:':
		{'unicode': ['1f935-1f3ff'], 'isCanonical': true},
	':tuxedo_tone5:':
		{'unicode': ['1f935-1f3ff'], 'isCanonical': false},
	':man_in_tuxedo_tone4:':
		{'unicode': ['1f935-1f3fe'], 'isCanonical': true},
	':tuxedo_tone4:':
		{'unicode': ['1f935-1f3fe'], 'isCanonical': false},
	':man_in_tuxedo_tone3:':
		{'unicode': ['1f935-1f3fd'], 'isCanonical': true},
	':tuxedo_tone3:':
		{'unicode': ['1f935-1f3fd'], 'isCanonical': false},
	':man_in_tuxedo_tone2:':
		{'unicode': ['1f935-1f3fc'], 'isCanonical': true},
	':tuxedo_tone2:':
		{'unicode': ['1f935-1f3fc'], 'isCanonical': false},
	':man_in_tuxedo_tone1:':
		{'unicode': ['1f935-1f3fb'], 'isCanonical': true},
	':tuxedo_tone1:':
		{'unicode': ['1f935-1f3fb'], 'isCanonical': false},
	':prince_tone5:':
		{'unicode': ['1f934-1f3ff'], 'isCanonical': true},
	':prince_tone4:':
		{'unicode': ['1f934-1f3fe'], 'isCanonical': true},
	':prince_tone3:':
		{'unicode': ['1f934-1f3fd'], 'isCanonical': true},
	':prince_tone2:':
		{'unicode': ['1f934-1f3fc'], 'isCanonical': true},
	':prince_tone1:':
		{'unicode': ['1f934-1f3fb'], 'isCanonical': true},
	':selfie_tone5:':
		{'unicode': ['1f933-1f3ff'], 'isCanonical': true},
	':selfie_tone4:':
		{'unicode': ['1f933-1f3fe'], 'isCanonical': true},
	':selfie_tone3:':
		{'unicode': ['1f933-1f3fd'], 'isCanonical': true},
	':selfie_tone2:':
		{'unicode': ['1f933-1f3fc'], 'isCanonical': true},
	':selfie_tone1:':
		{'unicode': ['1f933-1f3fb'], 'isCanonical': true},
	':pregnant_woman_tone5:':
		{'unicode': ['1f930-1f3ff'], 'isCanonical': true},
	':expecting_woman_tone5:':
		{'unicode': ['1f930-1f3ff'], 'isCanonical': false},
	':pregnant_woman_tone4:':
		{'unicode': ['1f930-1f3fe'], 'isCanonical': true},
	':expecting_woman_tone4:':
		{'unicode': ['1f930-1f3fe'], 'isCanonical': false},
	':pregnant_woman_tone3:':
		{'unicode': ['1f930-1f3fd'], 'isCanonical': true},
	':expecting_woman_tone3:':
		{'unicode': ['1f930-1f3fd'], 'isCanonical': false},
	':pregnant_woman_tone2:':
		{'unicode': ['1f930-1f3fc'], 'isCanonical': true},
	':expecting_woman_tone2:':
		{'unicode': ['1f930-1f3fc'], 'isCanonical': false},
	':pregnant_woman_tone1:':
		{'unicode': ['1f930-1f3fb'], 'isCanonical': true},
	':expecting_woman_tone1:':
		{'unicode': ['1f930-1f3fb'], 'isCanonical': false},
	':face_palm_tone5:':
		{'unicode': ['1f926-1f3ff'], 'isCanonical': true},
	':facepalm_tone5:':
		{'unicode': ['1f926-1f3ff'], 'isCanonical': false},
	':face_palm_tone4:':
		{'unicode': ['1f926-1f3fe'], 'isCanonical': true},
	':facepalm_tone4:':
		{'unicode': ['1f926-1f3fe'], 'isCanonical': false},
	':face_palm_tone3:':
		{'unicode': ['1f926-1f3fd'], 'isCanonical': true},
	':facepalm_tone3:':
		{'unicode': ['1f926-1f3fd'], 'isCanonical': false},
	':face_palm_tone2:':
		{'unicode': ['1f926-1f3fc'], 'isCanonical': true},
	':facepalm_tone2:':
		{'unicode': ['1f926-1f3fc'], 'isCanonical': false},
	':face_palm_tone1:':
		{'unicode': ['1f926-1f3fb'], 'isCanonical': true},
	':facepalm_tone1:':
		{'unicode': ['1f926-1f3fb'], 'isCanonical': false},
	':fingers_crossed_tone5:':
		{'unicode': ['1f91e-1f3ff'], 'isCanonical': true},
	':hand_with_index_and_middle_fingers_crossed_tone5:':
		{'unicode': ['1f91e-1f3ff'], 'isCanonical': false},
	':fingers_crossed_tone4:':
		{'unicode': ['1f91e-1f3fe'], 'isCanonical': true},
	':hand_with_index_and_middle_fingers_crossed_tone4:':
		{'unicode': ['1f91e-1f3fe'], 'isCanonical': false},
	':fingers_crossed_tone3:':
		{'unicode': ['1f91e-1f3fd'], 'isCanonical': true},
	':hand_with_index_and_middle_fingers_crossed_tone3:':
		{'unicode': ['1f91e-1f3fd'], 'isCanonical': false},
	':fingers_crossed_tone2:':
		{'unicode': ['1f91e-1f3fc'], 'isCanonical': true},
	':hand_with_index_and_middle_fingers_crossed_tone2:':
		{'unicode': ['1f91e-1f3fc'], 'isCanonical': false},
	':fingers_crossed_tone1:':
		{'unicode': ['1f91e-1f3fb'], 'isCanonical': true},
	':hand_with_index_and_middle_fingers_crossed_tone1:':
		{'unicode': ['1f91e-1f3fb'], 'isCanonical': false},
	':handshake_tone5:':
		{'unicode': ['1f91d-1f3ff'], 'isCanonical': true},
	':shaking_hands_tone5:':
		{'unicode': ['1f91d-1f3ff'], 'isCanonical': false},
	':handshake_tone4:':
		{'unicode': ['1f91d-1f3fe'], 'isCanonical': true},
	':shaking_hands_tone4:':
		{'unicode': ['1f91d-1f3fe'], 'isCanonical': false},
	':handshake_tone3:':
		{'unicode': ['1f91d-1f3fd'], 'isCanonical': true},
	':shaking_hands_tone3:':
		{'unicode': ['1f91d-1f3fd'], 'isCanonical': false},
	':handshake_tone2:':
		{'unicode': ['1f91d-1f3fc'], 'isCanonical': true},
	':shaking_hands_tone2:':
		{'unicode': ['1f91d-1f3fc'], 'isCanonical': false},
	':handshake_tone1:':
		{'unicode': ['1f91d-1f3fb'], 'isCanonical': true},
	':shaking_hands_tone1:':
		{'unicode': ['1f91d-1f3fb'], 'isCanonical': false},
	':right_facing_fist_tone5:':
		{'unicode': ['1f91c-1f3ff'], 'isCanonical': true},
	':right_fist_tone5:':
		{'unicode': ['1f91c-1f3ff'], 'isCanonical': false},
	':right_facing_fist_tone4:':
		{'unicode': ['1f91c-1f3fe'], 'isCanonical': true},
	':right_fist_tone4:':
		{'unicode': ['1f91c-1f3fe'], 'isCanonical': false},
	':right_facing_fist_tone3:':
		{'unicode': ['1f91c-1f3fd'], 'isCanonical': true},
	':right_fist_tone3:':
		{'unicode': ['1f91c-1f3fd'], 'isCanonical': false},
	':right_facing_fist_tone2:':
		{'unicode': ['1f91c-1f3fc'], 'isCanonical': true},
	':right_fist_tone2:':
		{'unicode': ['1f91c-1f3fc'], 'isCanonical': false},
	':right_facing_fist_tone1:':
		{'unicode': ['1f91c-1f3fb'], 'isCanonical': true},
	':right_fist_tone1:':
		{'unicode': ['1f91c-1f3fb'], 'isCanonical': false},
	':left_facing_fist_tone5:':
		{'unicode': ['1f91b-1f3ff'], 'isCanonical': true},
	':left_fist_tone5:':
		{'unicode': ['1f91b-1f3ff'], 'isCanonical': false},
	':left_facing_fist_tone4:':
		{'unicode': ['1f91b-1f3fe'], 'isCanonical': true},
	':left_fist_tone4:':
		{'unicode': ['1f91b-1f3fe'], 'isCanonical': false},
	':left_facing_fist_tone3:':
		{'unicode': ['1f91b-1f3fd'], 'isCanonical': true},
	':left_fist_tone3:':
		{'unicode': ['1f91b-1f3fd'], 'isCanonical': false},
	':left_facing_fist_tone2:':
		{'unicode': ['1f91b-1f3fc'], 'isCanonical': true},
	':left_fist_tone2:':
		{'unicode': ['1f91b-1f3fc'], 'isCanonical': false},
	':left_facing_fist_tone1:':
		{'unicode': ['1f91b-1f3fb'], 'isCanonical': true},
	':left_fist_tone1:':
		{'unicode': ['1f91b-1f3fb'], 'isCanonical': false},
	':raised_back_of_hand_tone5:':
		{'unicode': ['1f91a-1f3ff'], 'isCanonical': true},
	':back_of_hand_tone5:':
		{'unicode': ['1f91a-1f3ff'], 'isCanonical': false},
	':raised_back_of_hand_tone4:':
		{'unicode': ['1f91a-1f3fe'], 'isCanonical': true},
	':back_of_hand_tone4:':
		{'unicode': ['1f91a-1f3fe'], 'isCanonical': false},
	':raised_back_of_hand_tone3:':
		{'unicode': ['1f91a-1f3fd'], 'isCanonical': true},
	':back_of_hand_tone3:':
		{'unicode': ['1f91a-1f3fd'], 'isCanonical': false},
	':raised_back_of_hand_tone2:':
		{'unicode': ['1f91a-1f3fc'], 'isCanonical': true},
	':back_of_hand_tone2:':
		{'unicode': ['1f91a-1f3fc'], 'isCanonical': false},
	':raised_back_of_hand_tone1:':
		{'unicode': ['1f91a-1f3fb'], 'isCanonical': true},
	':back_of_hand_tone1:':
		{'unicode': ['1f91a-1f3fb'], 'isCanonical': false},
	':call_me_tone5:':
		{'unicode': ['1f919-1f3ff'], 'isCanonical': true},
	':call_me_hand_tone5:':
		{'unicode': ['1f919-1f3ff'], 'isCanonical': false},
	':call_me_tone4:':
		{'unicode': ['1f919-1f3fe'], 'isCanonical': true},
	':call_me_hand_tone4:':
		{'unicode': ['1f919-1f3fe'], 'isCanonical': false},
	':call_me_tone3:':
		{'unicode': ['1f919-1f3fd'], 'isCanonical': true},
	':call_me_hand_tone3:':
		{'unicode': ['1f919-1f3fd'], 'isCanonical': false},
	':call_me_tone2:':
		{'unicode': ['1f919-1f3fc'], 'isCanonical': true},
	':call_me_hand_tone2:':
		{'unicode': ['1f919-1f3fc'], 'isCanonical': false},
	':call_me_tone1:':
		{'unicode': ['1f919-1f3fb'], 'isCanonical': true},
	':call_me_hand_tone1:':
		{'unicode': ['1f919-1f3fb'], 'isCanonical': false},
	':metal_tone5:':
		{'unicode': ['1f918-1f3ff'], 'isCanonical': true},
	':sign_of_the_horns_tone5:':
		{'unicode': ['1f918-1f3ff'], 'isCanonical': false},
	':metal_tone4:':
		{'unicode': ['1f918-1f3fe'], 'isCanonical': true},
	':sign_of_the_horns_tone4:':
		{'unicode': ['1f918-1f3fe'], 'isCanonical': false},
	':metal_tone3:':
		{'unicode': ['1f918-1f3fd'], 'isCanonical': true},
	':sign_of_the_horns_tone3:':
		{'unicode': ['1f918-1f3fd'], 'isCanonical': false},
	':metal_tone2:':
		{'unicode': ['1f918-1f3fc'], 'isCanonical': true},
	':sign_of_the_horns_tone2:':
		{'unicode': ['1f918-1f3fc'], 'isCanonical': false},
	':metal_tone1:':
		{'unicode': ['1f918-1f3fb'], 'isCanonical': true},
	':sign_of_the_horns_tone1:':
		{'unicode': ['1f918-1f3fb'], 'isCanonical': false},
	':bath_tone5:':
		{'unicode': ['1f6c0-1f3ff'], 'isCanonical': true},
	':bath_tone4:':
		{'unicode': ['1f6c0-1f3fe'], 'isCanonical': true},
	':bath_tone3:':
		{'unicode': ['1f6c0-1f3fd'], 'isCanonical': true},
	':bath_tone2:':
		{'unicode': ['1f6c0-1f3fc'], 'isCanonical': true},
	':bath_tone1:':
		{'unicode': ['1f6c0-1f3fb'], 'isCanonical': true},
	':walking_tone5:':
		{'unicode': ['1f6b6-1f3ff'], 'isCanonical': true},
	':walking_tone4:':
		{'unicode': ['1f6b6-1f3fe'], 'isCanonical': true},
	':walking_tone3:':
		{'unicode': ['1f6b6-1f3fd'], 'isCanonical': true},
	':walking_tone2:':
		{'unicode': ['1f6b6-1f3fc'], 'isCanonical': true},
	':walking_tone1:':
		{'unicode': ['1f6b6-1f3fb'], 'isCanonical': true},
	':mountain_bicyclist_tone5:':
		{'unicode': ['1f6b5-1f3ff'], 'isCanonical': true},
	':mountain_bicyclist_tone4:':
		{'unicode': ['1f6b5-1f3fe'], 'isCanonical': true},
	':mountain_bicyclist_tone3:':
		{'unicode': ['1f6b5-1f3fd'], 'isCanonical': true},
	':mountain_bicyclist_tone2:':
		{'unicode': ['1f6b5-1f3fc'], 'isCanonical': true},
	':mountain_bicyclist_tone1:':
		{'unicode': ['1f6b5-1f3fb'], 'isCanonical': true},
	':bicyclist_tone5:':
		{'unicode': ['1f6b4-1f3ff'], 'isCanonical': true},
	':bicyclist_tone4:':
		{'unicode': ['1f6b4-1f3fe'], 'isCanonical': true},
	':bicyclist_tone3:':
		{'unicode': ['1f6b4-1f3fd'], 'isCanonical': true},
	':bicyclist_tone2:':
		{'unicode': ['1f6b4-1f3fc'], 'isCanonical': true},
	':bicyclist_tone1:':
		{'unicode': ['1f6b4-1f3fb'], 'isCanonical': true},
	':rowboat_tone5:':
		{'unicode': ['1f6a3-1f3ff'], 'isCanonical': true},
	':rowboat_tone4:':
		{'unicode': ['1f6a3-1f3fe'], 'isCanonical': true},
	':rowboat_tone3:':
		{'unicode': ['1f6a3-1f3fd'], 'isCanonical': true},
	':rowboat_tone2:':
		{'unicode': ['1f6a3-1f3fc'], 'isCanonical': true},
	':rowboat_tone1:':
		{'unicode': ['1f6a3-1f3fb'], 'isCanonical': true},
	':pray_tone5:':
		{'unicode': ['1f64f-1f3ff'], 'isCanonical': true},
	':pray_tone4:':
		{'unicode': ['1f64f-1f3fe'], 'isCanonical': true},
	':pray_tone3:':
		{'unicode': ['1f64f-1f3fd'], 'isCanonical': true},
	':pray_tone2:':
		{'unicode': ['1f64f-1f3fc'], 'isCanonical': true},
	':pray_tone1:':
		{'unicode': ['1f64f-1f3fb'], 'isCanonical': true},
	':person_with_pouting_face_tone5:':
		{'unicode': ['1f64e-1f3ff'], 'isCanonical': true},
	':person_with_pouting_face_tone4:':
		{'unicode': ['1f64e-1f3fe'], 'isCanonical': true},
	':person_with_pouting_face_tone3:':
		{'unicode': ['1f64e-1f3fd'], 'isCanonical': true},
	':person_with_pouting_face_tone2:':
		{'unicode': ['1f64e-1f3fc'], 'isCanonical': true},
	':person_with_pouting_face_tone1:':
		{'unicode': ['1f64e-1f3fb'], 'isCanonical': true},
	':person_frowning_tone5:':
		{'unicode': ['1f64d-1f3ff'], 'isCanonical': true},
	':person_frowning_tone4:':
		{'unicode': ['1f64d-1f3fe'], 'isCanonical': true},
	':person_frowning_tone3:':
		{'unicode': ['1f64d-1f3fd'], 'isCanonical': true},
	':person_frowning_tone2:':
		{'unicode': ['1f64d-1f3fc'], 'isCanonical': true},
	':person_frowning_tone1:':
		{'unicode': ['1f64d-1f3fb'], 'isCanonical': true},
	':raised_hands_tone5:':
		{'unicode': ['1f64c-1f3ff'], 'isCanonical': true},
	':raised_hands_tone4:':
		{'unicode': ['1f64c-1f3fe'], 'isCanonical': true},
	':raised_hands_tone3:':
		{'unicode': ['1f64c-1f3fd'], 'isCanonical': true},
	':raised_hands_tone2:':
		{'unicode': ['1f64c-1f3fc'], 'isCanonical': true},
	':raised_hands_tone1:':
		{'unicode': ['1f64c-1f3fb'], 'isCanonical': true},
	':raising_hand_tone5:':
		{'unicode': ['1f64b-1f3ff'], 'isCanonical': true},
	':raising_hand_tone4:':
		{'unicode': ['1f64b-1f3fe'], 'isCanonical': true},
	':raising_hand_tone3:':
		{'unicode': ['1f64b-1f3fd'], 'isCanonical': true},
	':raising_hand_tone2:':
		{'unicode': ['1f64b-1f3fc'], 'isCanonical': true},
	':raising_hand_tone1:':
		{'unicode': ['1f64b-1f3fb'], 'isCanonical': true},
	':bow_tone5:':
		{'unicode': ['1f647-1f3ff'], 'isCanonical': true},
	':bow_tone4:':
		{'unicode': ['1f647-1f3fe'], 'isCanonical': true},
	':bow_tone3:':
		{'unicode': ['1f647-1f3fd'], 'isCanonical': true},
	':bow_tone2:':
		{'unicode': ['1f647-1f3fc'], 'isCanonical': true},
	':bow_tone1:':
		{'unicode': ['1f647-1f3fb'], 'isCanonical': true},
	':ok_woman_tone5:':
		{'unicode': ['1f646-1f3ff'], 'isCanonical': true},
	':ok_woman_tone4:':
		{'unicode': ['1f646-1f3fe'], 'isCanonical': true},
	':ok_woman_tone3:':
		{'unicode': ['1f646-1f3fd'], 'isCanonical': true},
	':ok_woman_tone2:':
		{'unicode': ['1f646-1f3fc'], 'isCanonical': true},
	':ok_woman_tone1:':
		{'unicode': ['1f646-1f3fb'], 'isCanonical': true},
	':no_good_tone5:':
		{'unicode': ['1f645-1f3ff'], 'isCanonical': true},
	':no_good_tone4:':
		{'unicode': ['1f645-1f3fe'], 'isCanonical': true},
	':no_good_tone3:':
		{'unicode': ['1f645-1f3fd'], 'isCanonical': true},
	':no_good_tone2:':
		{'unicode': ['1f645-1f3fc'], 'isCanonical': true},
	':no_good_tone1:':
		{'unicode': ['1f645-1f3fb'], 'isCanonical': true},
	':vulcan_tone5:':
		{'unicode': ['1f596-1f3ff'], 'isCanonical': true},
	':raised_hand_with_part_between_middle_and_ring_fingers_tone5:':
		{'unicode': ['1f596-1f3ff'], 'isCanonical': false},
	':vulcan_tone4:':
		{'unicode': ['1f596-1f3fe'], 'isCanonical': true},
	':raised_hand_with_part_between_middle_and_ring_fingers_tone4:':
		{'unicode': ['1f596-1f3fe'], 'isCanonical': false},
	':vulcan_tone3:':
		{'unicode': ['1f596-1f3fd'], 'isCanonical': true},
	':raised_hand_with_part_between_middle_and_ring_fingers_tone3:':
		{'unicode': ['1f596-1f3fd'], 'isCanonical': false},
	':vulcan_tone2:':
		{'unicode': ['1f596-1f3fc'], 'isCanonical': true},
	':raised_hand_with_part_between_middle_and_ring_fingers_tone2:':
		{'unicode': ['1f596-1f3fc'], 'isCanonical': false},
	':vulcan_tone1:':
		{'unicode': ['1f596-1f3fb'], 'isCanonical': true},
	':raised_hand_with_part_between_middle_and_ring_fingers_tone1:':
		{'unicode': ['1f596-1f3fb'], 'isCanonical': false},
	':middle_finger_tone5:':
		{'unicode': ['1f595-1f3ff'], 'isCanonical': true},
	':reversed_hand_with_middle_finger_extended_tone5:':
		{'unicode': ['1f595-1f3ff'], 'isCanonical': false},
	':middle_finger_tone4:':
		{'unicode': ['1f595-1f3fe'], 'isCanonical': true},
	':reversed_hand_with_middle_finger_extended_tone4:':
		{'unicode': ['1f595-1f3fe'], 'isCanonical': false},
	':middle_finger_tone3:':
		{'unicode': ['1f595-1f3fd'], 'isCanonical': true},
	':reversed_hand_with_middle_finger_extended_tone3:':
		{'unicode': ['1f595-1f3fd'], 'isCanonical': false},
	':middle_finger_tone2:':
		{'unicode': ['1f595-1f3fc'], 'isCanonical': true},
	':reversed_hand_with_middle_finger_extended_tone2:':
		{'unicode': ['1f595-1f3fc'], 'isCanonical': false},
	':middle_finger_tone1:':
		{'unicode': ['1f595-1f3fb'], 'isCanonical': true},
	':reversed_hand_with_middle_finger_extended_tone1:':
		{'unicode': ['1f595-1f3fb'], 'isCanonical': false},
	':hand_splayed_tone5:':
		{'unicode': ['1f590-1f3ff'], 'isCanonical': true},
	':raised_hand_with_fingers_splayed_tone5:':
		{'unicode': ['1f590-1f3ff'], 'isCanonical': false},
	':hand_splayed_tone4:':
		{'unicode': ['1f590-1f3fe'], 'isCanonical': true},
	':raised_hand_with_fingers_splayed_tone4:':
		{'unicode': ['1f590-1f3fe'], 'isCanonical': false},
	':hand_splayed_tone3:':
		{'unicode': ['1f590-1f3fd'], 'isCanonical': true},
	':raised_hand_with_fingers_splayed_tone3:':
		{'unicode': ['1f590-1f3fd'], 'isCanonical': false},
	':hand_splayed_tone2:':
		{'unicode': ['1f590-1f3fc'], 'isCanonical': true},
	':raised_hand_with_fingers_splayed_tone2:':
		{'unicode': ['1f590-1f3fc'], 'isCanonical': false},
	':hand_splayed_tone1:':
		{'unicode': ['1f590-1f3fb'], 'isCanonical': true},
	':raised_hand_with_fingers_splayed_tone1:':
		{'unicode': ['1f590-1f3fb'], 'isCanonical': false},
	':man_dancing_tone5:':
		{'unicode': ['1f57a-1f3ff'], 'isCanonical': true},
	':male_dancer_tone5:':
		{'unicode': ['1f57a-1f3ff'], 'isCanonical': false},
	':man_dancing_tone4:':
		{'unicode': ['1f57a-1f3fe'], 'isCanonical': true},
	':male_dancer_tone4:':
		{'unicode': ['1f57a-1f3fe'], 'isCanonical': false},
	':man_dancing_tone3:':
		{'unicode': ['1f57a-1f3fd'], 'isCanonical': true},
	':male_dancer_tone3:':
		{'unicode': ['1f57a-1f3fd'], 'isCanonical': false},
	':man_dancing_tone2:':
		{'unicode': ['1f57a-1f3fc'], 'isCanonical': true},
	':male_dancer_tone2:':
		{'unicode': ['1f57a-1f3fc'], 'isCanonical': false},
	':man_dancing_tone1:':
		{'unicode': ['1f57a-1f3fb'], 'isCanonical': true},
	':male_dancer_tone1:':
		{'unicode': ['1f57a-1f3fb'], 'isCanonical': false},
	':spy_tone5:':
		{'unicode': ['1f575-1f3ff'], 'isCanonical': true},
	':sleuth_or_spy_tone5:':
		{'unicode': ['1f575-1f3ff'], 'isCanonical': false},
	':spy_tone4:':
		{'unicode': ['1f575-1f3fe'], 'isCanonical': true},
	':sleuth_or_spy_tone4:':
		{'unicode': ['1f575-1f3fe'], 'isCanonical': false},
	':spy_tone3:':
		{'unicode': ['1f575-1f3fd'], 'isCanonical': true},
	':sleuth_or_spy_tone3:':
		{'unicode': ['1f575-1f3fd'], 'isCanonical': false},
	':spy_tone2:':
		{'unicode': ['1f575-1f3fc'], 'isCanonical': true},
	':sleuth_or_spy_tone2:':
		{'unicode': ['1f575-1f3fc'], 'isCanonical': false},
	':spy_tone1:':
		{'unicode': ['1f575-1f3fb'], 'isCanonical': true},
	':sleuth_or_spy_tone1:':
		{'unicode': ['1f575-1f3fb'], 'isCanonical': false},
	':muscle_tone5:':
		{'unicode': ['1f4aa-1f3ff'], 'isCanonical': true},
	':muscle_tone4:':
		{'unicode': ['1f4aa-1f3fe'], 'isCanonical': true},
	':muscle_tone3:':
		{'unicode': ['1f4aa-1f3fd'], 'isCanonical': true},
	':muscle_tone2:':
		{'unicode': ['1f4aa-1f3fc'], 'isCanonical': true},
	':muscle_tone1:':
		{'unicode': ['1f4aa-1f3fb'], 'isCanonical': true},
	':haircut_tone5:':
		{'unicode': ['1f487-1f3ff'], 'isCanonical': true},
	':haircut_tone4:':
		{'unicode': ['1f487-1f3fe'], 'isCanonical': true},
	':haircut_tone3:':
		{'unicode': ['1f487-1f3fd'], 'isCanonical': true},
	':haircut_tone2:':
		{'unicode': ['1f487-1f3fc'], 'isCanonical': true},
	':haircut_tone1:':
		{'unicode': ['1f487-1f3fb'], 'isCanonical': true},
	':massage_tone5:':
		{'unicode': ['1f486-1f3ff'], 'isCanonical': true},
	':massage_tone4:':
		{'unicode': ['1f486-1f3fe'], 'isCanonical': true},
	':massage_tone3:':
		{'unicode': ['1f486-1f3fd'], 'isCanonical': true},
	':massage_tone2:':
		{'unicode': ['1f486-1f3fc'], 'isCanonical': true},
	':massage_tone1:':
		{'unicode': ['1f486-1f3fb'], 'isCanonical': true},
	':nail_care_tone5:':
		{'unicode': ['1f485-1f3ff'], 'isCanonical': true},
	':nail_care_tone4:':
		{'unicode': ['1f485-1f3fe'], 'isCanonical': true},
	':nail_care_tone3:':
		{'unicode': ['1f485-1f3fd'], 'isCanonical': true},
	':nail_care_tone2:':
		{'unicode': ['1f485-1f3fc'], 'isCanonical': true},
	':nail_care_tone1:':
		{'unicode': ['1f485-1f3fb'], 'isCanonical': true},
	':dancer_tone5:':
		{'unicode': ['1f483-1f3ff'], 'isCanonical': true},
	':dancer_tone4:':
		{'unicode': ['1f483-1f3fe'], 'isCanonical': true},
	':dancer_tone3:':
		{'unicode': ['1f483-1f3fd'], 'isCanonical': true},
	':dancer_tone2:':
		{'unicode': ['1f483-1f3fc'], 'isCanonical': true},
	':dancer_tone1:':
		{'unicode': ['1f483-1f3fb'], 'isCanonical': true},
	':guardsman_tone5:':
		{'unicode': ['1f482-1f3ff'], 'isCanonical': true},
	':guardsman_tone4:':
		{'unicode': ['1f482-1f3fe'], 'isCanonical': true},
	':guardsman_tone3:':
		{'unicode': ['1f482-1f3fd'], 'isCanonical': true},
	':guardsman_tone2:':
		{'unicode': ['1f482-1f3fc'], 'isCanonical': true},
	':guardsman_tone1:':
		{'unicode': ['1f482-1f3fb'], 'isCanonical': true},
	':information_desk_person_tone5:':
		{'unicode': ['1f481-1f3ff'], 'isCanonical': true},
	':information_desk_person_tone4:':
		{'unicode': ['1f481-1f3fe'], 'isCanonical': true},
	':information_desk_person_tone3:':
		{'unicode': ['1f481-1f3fd'], 'isCanonical': true},
	':information_desk_person_tone2:':
		{'unicode': ['1f481-1f3fc'], 'isCanonical': true},
	':information_desk_person_tone1:':
		{'unicode': ['1f481-1f3fb'], 'isCanonical': true},
	':angel_tone5:':
		{'unicode': ['1f47c-1f3ff'], 'isCanonical': true},
	':angel_tone4:':
		{'unicode': ['1f47c-1f3fe'], 'isCanonical': true},
	':angel_tone3:':
		{'unicode': ['1f47c-1f3fd'], 'isCanonical': true},
	':angel_tone2:':
		{'unicode': ['1f47c-1f3fc'], 'isCanonical': true},
	':angel_tone1:':
		{'unicode': ['1f47c-1f3fb'], 'isCanonical': true},
	':princess_tone5:':
		{'unicode': ['1f478-1f3ff'], 'isCanonical': true},
	':princess_tone4:':
		{'unicode': ['1f478-1f3fe'], 'isCanonical': true},
	':princess_tone3:':
		{'unicode': ['1f478-1f3fd'], 'isCanonical': true},
	':princess_tone2:':
		{'unicode': ['1f478-1f3fc'], 'isCanonical': true},
	':princess_tone1:':
		{'unicode': ['1f478-1f3fb'], 'isCanonical': true},
	':construction_worker_tone5:':
		{'unicode': ['1f477-1f3ff'], 'isCanonical': true},
	':construction_worker_tone4:':
		{'unicode': ['1f477-1f3fe'], 'isCanonical': true},
	':construction_worker_tone3:':
		{'unicode': ['1f477-1f3fd'], 'isCanonical': true},
	':construction_worker_tone2:':
		{'unicode': ['1f477-1f3fc'], 'isCanonical': true},
	':construction_worker_tone1:':
		{'unicode': ['1f477-1f3fb'], 'isCanonical': true},
	':baby_tone5:':
		{'unicode': ['1f476-1f3ff'], 'isCanonical': true},
	':baby_tone4:':
		{'unicode': ['1f476-1f3fe'], 'isCanonical': true},
	':baby_tone3:':
		{'unicode': ['1f476-1f3fd'], 'isCanonical': true},
	':baby_tone2:':
		{'unicode': ['1f476-1f3fc'], 'isCanonical': true},
	':baby_tone1:':
		{'unicode': ['1f476-1f3fb'], 'isCanonical': true},
	':older_woman_tone5:':
		{'unicode': ['1f475-1f3ff'], 'isCanonical': true},
	':grandma_tone5:':
		{'unicode': ['1f475-1f3ff'], 'isCanonical': false},
	':older_woman_tone4:':
		{'unicode': ['1f475-1f3fe'], 'isCanonical': true},
	':grandma_tone4:':
		{'unicode': ['1f475-1f3fe'], 'isCanonical': false},
	':older_woman_tone3:':
		{'unicode': ['1f475-1f3fd'], 'isCanonical': true},
	':grandma_tone3:':
		{'unicode': ['1f475-1f3fd'], 'isCanonical': false},
	':older_woman_tone2:':
		{'unicode': ['1f475-1f3fc'], 'isCanonical': true},
	':grandma_tone2:':
		{'unicode': ['1f475-1f3fc'], 'isCanonical': false},
	':older_woman_tone1:':
		{'unicode': ['1f475-1f3fb'], 'isCanonical': true},
	':grandma_tone1:':
		{'unicode': ['1f475-1f3fb'], 'isCanonical': false},
	':older_man_tone5:':
		{'unicode': ['1f474-1f3ff'], 'isCanonical': true},
	':older_man_tone4:':
		{'unicode': ['1f474-1f3fe'], 'isCanonical': true},
	':older_man_tone3:':
		{'unicode': ['1f474-1f3fd'], 'isCanonical': true},
	':older_man_tone2:':
		{'unicode': ['1f474-1f3fc'], 'isCanonical': true},
	':older_man_tone1:':
		{'unicode': ['1f474-1f3fb'], 'isCanonical': true},
	':man_with_turban_tone5:':
		{'unicode': ['1f473-1f3ff'], 'isCanonical': true},
	':man_with_turban_tone4:':
		{'unicode': ['1f473-1f3fe'], 'isCanonical': true},
	':man_with_turban_tone3:':
		{'unicode': ['1f473-1f3fd'], 'isCanonical': true},
	':man_with_turban_tone2:':
		{'unicode': ['1f473-1f3fc'], 'isCanonical': true},
	':man_with_turban_tone1:':
		{'unicode': ['1f473-1f3fb'], 'isCanonical': true},
	':man_with_gua_pi_mao_tone5:':
		{'unicode': ['1f472-1f3ff'], 'isCanonical': true},
	':man_with_gua_pi_mao_tone4:':
		{'unicode': ['1f472-1f3fe'], 'isCanonical': true},
	':man_with_gua_pi_mao_tone3:':
		{'unicode': ['1f472-1f3fd'], 'isCanonical': true},
	':man_with_gua_pi_mao_tone2:':
		{'unicode': ['1f472-1f3fc'], 'isCanonical': true},
	':man_with_gua_pi_mao_tone1:':
		{'unicode': ['1f472-1f3fb'], 'isCanonical': true},
	':person_with_blond_hair_tone5:':
		{'unicode': ['1f471-1f3ff'], 'isCanonical': true},
	':person_with_blond_hair_tone4:':
		{'unicode': ['1f471-1f3fe'], 'isCanonical': true},
	':person_with_blond_hair_tone3:':
		{'unicode': ['1f471-1f3fd'], 'isCanonical': true},
	':person_with_blond_hair_tone2:':
		{'unicode': ['1f471-1f3fc'], 'isCanonical': true},
	':person_with_blond_hair_tone1:':
		{'unicode': ['1f471-1f3fb'], 'isCanonical': true},
	':bride_with_veil_tone5:':
		{'unicode': ['1f470-1f3ff'], 'isCanonical': true},
	':bride_with_veil_tone4:':
		{'unicode': ['1f470-1f3fe'], 'isCanonical': true},
	':bride_with_veil_tone3:':
		{'unicode': ['1f470-1f3fd'], 'isCanonical': true},
	':bride_with_veil_tone2:':
		{'unicode': ['1f470-1f3fc'], 'isCanonical': true},
	':bride_with_veil_tone1:':
		{'unicode': ['1f470-1f3fb'], 'isCanonical': true},
	':cop_tone5:':
		{'unicode': ['1f46e-1f3ff'], 'isCanonical': true},
	':cop_tone4:':
		{'unicode': ['1f46e-1f3fe'], 'isCanonical': true},
	':cop_tone3:':
		{'unicode': ['1f46e-1f3fd'], 'isCanonical': true},
	':cop_tone2:':
		{'unicode': ['1f46e-1f3fc'], 'isCanonical': true},
	':cop_tone1:':
		{'unicode': ['1f46e-1f3fb'], 'isCanonical': true},
	':woman_tone5:':
		{'unicode': ['1f469-1f3ff'], 'isCanonical': true},
	':woman_tone4:':
		{'unicode': ['1f469-1f3fe'], 'isCanonical': true},
	':woman_tone3:':
		{'unicode': ['1f469-1f3fd'], 'isCanonical': true},
	':woman_tone2:':
		{'unicode': ['1f469-1f3fc'], 'isCanonical': true},
	':woman_tone1:':
		{'unicode': ['1f469-1f3fb'], 'isCanonical': true},
	':man_tone5:':
		{'unicode': ['1f468-1f3ff'], 'isCanonical': true},
	':man_tone4:':
		{'unicode': ['1f468-1f3fe'], 'isCanonical': true},
	':man_tone3:':
		{'unicode': ['1f468-1f3fd'], 'isCanonical': true},
	':man_tone2:':
		{'unicode': ['1f468-1f3fc'], 'isCanonical': true},
	':man_tone1:':
		{'unicode': ['1f468-1f3fb'], 'isCanonical': true},
	':girl_tone5:':
		{'unicode': ['1f467-1f3ff'], 'isCanonical': true},
	':girl_tone4:':
		{'unicode': ['1f467-1f3fe'], 'isCanonical': true},
	':girl_tone3:':
		{'unicode': ['1f467-1f3fd'], 'isCanonical': true},
	':girl_tone2:':
		{'unicode': ['1f467-1f3fc'], 'isCanonical': true},
	':girl_tone1:':
		{'unicode': ['1f467-1f3fb'], 'isCanonical': true},
	':boy_tone5:':
		{'unicode': ['1f466-1f3ff'], 'isCanonical': true},
	':boy_tone4:':
		{'unicode': ['1f466-1f3fe'], 'isCanonical': true},
	':boy_tone3:':
		{'unicode': ['1f466-1f3fd'], 'isCanonical': true},
	':boy_tone2:':
		{'unicode': ['1f466-1f3fc'], 'isCanonical': true},
	':boy_tone1:':
		{'unicode': ['1f466-1f3fb'], 'isCanonical': true},
	':open_hands_tone5:':
		{'unicode': ['1f450-1f3ff'], 'isCanonical': true},
	':open_hands_tone4:':
		{'unicode': ['1f450-1f3fe'], 'isCanonical': true},
	':open_hands_tone3:':
		{'unicode': ['1f450-1f3fd'], 'isCanonical': true},
	':open_hands_tone2:':
		{'unicode': ['1f450-1f3fc'], 'isCanonical': true},
	':open_hands_tone1:':
		{'unicode': ['1f450-1f3fb'], 'isCanonical': true},
	':clap_tone5:':
		{'unicode': ['1f44f-1f3ff'], 'isCanonical': true},
	':clap_tone4:':
		{'unicode': ['1f44f-1f3fe'], 'isCanonical': true},
	':clap_tone3:':
		{'unicode': ['1f44f-1f3fd'], 'isCanonical': true},
	':clap_tone2:':
		{'unicode': ['1f44f-1f3fc'], 'isCanonical': true},
	':clap_tone1:':
		{'unicode': ['1f44f-1f3fb'], 'isCanonical': true},
	':thumbsdown_tone5:':
		{'unicode': ['1f44e-1f3ff'], 'isCanonical': true},
	':-1_tone5:':
		{'unicode': ['1f44e-1f3ff'], 'isCanonical': false},
	':thumbdown_tone5:':
		{'unicode': ['1f44e-1f3ff'], 'isCanonical': false},
	':thumbsdown_tone4:':
		{'unicode': ['1f44e-1f3fe'], 'isCanonical': true},
	':-1_tone4:':
		{'unicode': ['1f44e-1f3fe'], 'isCanonical': false},
	':thumbdown_tone4:':
		{'unicode': ['1f44e-1f3fe'], 'isCanonical': false},
	':thumbsdown_tone3:':
		{'unicode': ['1f44e-1f3fd'], 'isCanonical': true},
	':-1_tone3:':
		{'unicode': ['1f44e-1f3fd'], 'isCanonical': false},
	':thumbdown_tone3:':
		{'unicode': ['1f44e-1f3fd'], 'isCanonical': false},
	':thumbsdown_tone2:':
		{'unicode': ['1f44e-1f3fc'], 'isCanonical': true},
	':-1_tone2:':
		{'unicode': ['1f44e-1f3fc'], 'isCanonical': false},
	':thumbdown_tone2:':
		{'unicode': ['1f44e-1f3fc'], 'isCanonical': false},
	':thumbsdown_tone1:':
		{'unicode': ['1f44e-1f3fb'], 'isCanonical': true},
	':-1_tone1:':
		{'unicode': ['1f44e-1f3fb'], 'isCanonical': false},
	':thumbdown_tone1:':
		{'unicode': ['1f44e-1f3fb'], 'isCanonical': false},
	':thumbsup_tone5:':
		{'unicode': ['1f44d-1f3ff'], 'isCanonical': true},
	':+1_tone5:':
		{'unicode': ['1f44d-1f3ff'], 'isCanonical': false},
	':thumbup_tone5:':
		{'unicode': ['1f44d-1f3ff'], 'isCanonical': false},
	':thumbsup_tone4:':
		{'unicode': ['1f44d-1f3fe'], 'isCanonical': true},
	':+1_tone4:':
		{'unicode': ['1f44d-1f3fe'], 'isCanonical': false},
	':thumbup_tone4:':
		{'unicode': ['1f44d-1f3fe'], 'isCanonical': false},
	':thumbsup_tone3:':
		{'unicode': ['1f44d-1f3fd'], 'isCanonical': true},
	':+1_tone3:':
		{'unicode': ['1f44d-1f3fd'], 'isCanonical': false},
	':thumbup_tone3:':
		{'unicode': ['1f44d-1f3fd'], 'isCanonical': false},
	':thumbsup_tone2:':
		{'unicode': ['1f44d-1f3fc'], 'isCanonical': true},
	':+1_tone2:':
		{'unicode': ['1f44d-1f3fc'], 'isCanonical': false},
	':thumbup_tone2:':
		{'unicode': ['1f44d-1f3fc'], 'isCanonical': false},
	':thumbsup_tone1:':
		{'unicode': ['1f44d-1f3fb'], 'isCanonical': true},
	':+1_tone1:':
		{'unicode': ['1f44d-1f3fb'], 'isCanonical': false},
	':thumbup_tone1:':
		{'unicode': ['1f44d-1f3fb'], 'isCanonical': false},
	':ok_hand_tone5:':
		{'unicode': ['1f44c-1f3ff'], 'isCanonical': true},
	':ok_hand_tone4:':
		{'unicode': ['1f44c-1f3fe'], 'isCanonical': true},
	':ok_hand_tone3:':
		{'unicode': ['1f44c-1f3fd'], 'isCanonical': true},
	':ok_hand_tone2:':
		{'unicode': ['1f44c-1f3fc'], 'isCanonical': true},
	':ok_hand_tone1:':
		{'unicode': ['1f44c-1f3fb'], 'isCanonical': true},
	':wave_tone5:':
		{'unicode': ['1f44b-1f3ff'], 'isCanonical': true},
	':wave_tone4:':
		{'unicode': ['1f44b-1f3fe'], 'isCanonical': true},
	':wave_tone3:':
		{'unicode': ['1f44b-1f3fd'], 'isCanonical': true},
	':wave_tone2:':
		{'unicode': ['1f44b-1f3fc'], 'isCanonical': true},
	':wave_tone1:':
		{'unicode': ['1f44b-1f3fb'], 'isCanonical': true},
	':punch_tone5:':
		{'unicode': ['1f44a-1f3ff'], 'isCanonical': true},
	':punch_tone4:':
		{'unicode': ['1f44a-1f3fe'], 'isCanonical': true},
	':punch_tone3:':
		{'unicode': ['1f44a-1f3fd'], 'isCanonical': true},
	':punch_tone2:':
		{'unicode': ['1f44a-1f3fc'], 'isCanonical': true},
	':punch_tone1:':
		{'unicode': ['1f44a-1f3fb'], 'isCanonical': true},
	':point_right_tone5:':
		{'unicode': ['1f449-1f3ff'], 'isCanonical': true},
	':point_right_tone4:':
		{'unicode': ['1f449-1f3fe'], 'isCanonical': true},
	':point_right_tone3:':
		{'unicode': ['1f449-1f3fd'], 'isCanonical': true},
	':point_right_tone2:':
		{'unicode': ['1f449-1f3fc'], 'isCanonical': true},
	':point_right_tone1:':
		{'unicode': ['1f449-1f3fb'], 'isCanonical': true},
	':point_left_tone5:':
		{'unicode': ['1f448-1f3ff'], 'isCanonical': true},
	':point_left_tone4:':
		{'unicode': ['1f448-1f3fe'], 'isCanonical': true},
	':point_left_tone3:':
		{'unicode': ['1f448-1f3fd'], 'isCanonical': true},
	':point_left_tone2:':
		{'unicode': ['1f448-1f3fc'], 'isCanonical': true},
	':point_left_tone1:':
		{'unicode': ['1f448-1f3fb'], 'isCanonical': true},
	':point_down_tone5:':
		{'unicode': ['1f447-1f3ff'], 'isCanonical': true},
	':point_down_tone4:':
		{'unicode': ['1f447-1f3fe'], 'isCanonical': true},
	':point_down_tone3:':
		{'unicode': ['1f447-1f3fd'], 'isCanonical': true},
	':point_down_tone2:':
		{'unicode': ['1f447-1f3fc'], 'isCanonical': true},
	':point_down_tone1:':
		{'unicode': ['1f447-1f3fb'], 'isCanonical': true},
	':point_up_2_tone5:':
		{'unicode': ['1f446-1f3ff'], 'isCanonical': true},
	':point_up_2_tone4:':
		{'unicode': ['1f446-1f3fe'], 'isCanonical': true},
	':point_up_2_tone3:':
		{'unicode': ['1f446-1f3fd'], 'isCanonical': true},
	':point_up_2_tone2:':
		{'unicode': ['1f446-1f3fc'], 'isCanonical': true},
	':point_up_2_tone1:':
		{'unicode': ['1f446-1f3fb'], 'isCanonical': true},
	':nose_tone5:':
		{'unicode': ['1f443-1f3ff'], 'isCanonical': true},
	':nose_tone4:':
		{'unicode': ['1f443-1f3fe'], 'isCanonical': true},
	':nose_tone3:':
		{'unicode': ['1f443-1f3fd'], 'isCanonical': true},
	':nose_tone2:':
		{'unicode': ['1f443-1f3fc'], 'isCanonical': true},
	':nose_tone1:':
		{'unicode': ['1f443-1f3fb'], 'isCanonical': true},
	':ear_tone5:':
		{'unicode': ['1f442-1f3ff'], 'isCanonical': true},
	':ear_tone4:':
		{'unicode': ['1f442-1f3fe'], 'isCanonical': true},
	':ear_tone3:':
		{'unicode': ['1f442-1f3fd'], 'isCanonical': true},
	':ear_tone2:':
		{'unicode': ['1f442-1f3fc'], 'isCanonical': true},
	':ear_tone1:':
		{'unicode': ['1f442-1f3fb'], 'isCanonical': true},
	':gay_pride_flag:':
		{'unicode': ['1f3f3-1f308'], 'isCanonical': true},
	':rainbow_flag:':
		{'unicode': ['1f3f3-1f308'], 'isCanonical': false},
	':lifter_tone5:':
		{'unicode': ['1f3cb-1f3ff'], 'isCanonical': true},
	':weight_lifter_tone5:':
		{'unicode': ['1f3cb-1f3ff'], 'isCanonical': false},
	':lifter_tone4:':
		{'unicode': ['1f3cb-1f3fe'], 'isCanonical': true},
	':weight_lifter_tone4:':
		{'unicode': ['1f3cb-1f3fe'], 'isCanonical': false},
	':lifter_tone3:':
		{'unicode': ['1f3cb-1f3fd'], 'isCanonical': true},
	':weight_lifter_tone3:':
		{'unicode': ['1f3cb-1f3fd'], 'isCanonical': false},
	':lifter_tone2:':
		{'unicode': ['1f3cb-1f3fc'], 'isCanonical': true},
	':weight_lifter_tone2:':
		{'unicode': ['1f3cb-1f3fc'], 'isCanonical': false},
	':lifter_tone1:':
		{'unicode': ['1f3cb-1f3fb'], 'isCanonical': true},
	':weight_lifter_tone1:':
		{'unicode': ['1f3cb-1f3fb'], 'isCanonical': false},
	':swimmer_tone5:':
		{'unicode': ['1f3ca-1f3ff'], 'isCanonical': true},
	':swimmer_tone4:':
		{'unicode': ['1f3ca-1f3fe'], 'isCanonical': true},
	':swimmer_tone3:':
		{'unicode': ['1f3ca-1f3fd'], 'isCanonical': true},
	':swimmer_tone2:':
		{'unicode': ['1f3ca-1f3fc'], 'isCanonical': true},
	':swimmer_tone1:':
		{'unicode': ['1f3ca-1f3fb'], 'isCanonical': true},
	':horse_racing_tone5:':
		{'unicode': ['1f3c7-1f3ff'], 'isCanonical': true},
	':horse_racing_tone4:':
		{'unicode': ['1f3c7-1f3fe'], 'isCanonical': true},
	':horse_racing_tone3:':
		{'unicode': ['1f3c7-1f3fd'], 'isCanonical': true},
	':horse_racing_tone2:':
		{'unicode': ['1f3c7-1f3fc'], 'isCanonical': true},
	':horse_racing_tone1:':
		{'unicode': ['1f3c7-1f3fb'], 'isCanonical': true},
	':surfer_tone5:':
		{'unicode': ['1f3c4-1f3ff'], 'isCanonical': true},
	':surfer_tone4:':
		{'unicode': ['1f3c4-1f3fe'], 'isCanonical': true},
	':surfer_tone3:':
		{'unicode': ['1f3c4-1f3fd'], 'isCanonical': true},
	':surfer_tone2:':
		{'unicode': ['1f3c4-1f3fc'], 'isCanonical': true},
	':surfer_tone1:':
		{'unicode': ['1f3c4-1f3fb'], 'isCanonical': true},
	':runner_tone5:':
		{'unicode': ['1f3c3-1f3ff'], 'isCanonical': true},
	':runner_tone4:':
		{'unicode': ['1f3c3-1f3fe'], 'isCanonical': true},
	':runner_tone3:':
		{'unicode': ['1f3c3-1f3fd'], 'isCanonical': true},
	':runner_tone2:':
		{'unicode': ['1f3c3-1f3fc'], 'isCanonical': true},
	':runner_tone1:':
		{'unicode': ['1f3c3-1f3fb'], 'isCanonical': true},
	':santa_tone5:':
		{'unicode': ['1f385-1f3ff'], 'isCanonical': true},
	':santa_tone4:':
		{'unicode': ['1f385-1f3fe'], 'isCanonical': true},
	':santa_tone3:':
		{'unicode': ['1f385-1f3fd'], 'isCanonical': true},
	':santa_tone2:':
		{'unicode': ['1f385-1f3fc'], 'isCanonical': true},
	':santa_tone1:':
		{'unicode': ['1f385-1f3fb'], 'isCanonical': true},
	':flag_zw:':
		{'unicode': ['1f1ff-1f1fc'], 'isCanonical': true},
	':zw:':
		{'unicode': ['1f1ff-1f1fc'], 'isCanonical': false},
	':flag_zm:':
		{'unicode': ['1f1ff-1f1f2'], 'isCanonical': true},
	':zm:':
		{'unicode': ['1f1ff-1f1f2'], 'isCanonical': false},
	':flag_za:':
		{'unicode': ['1f1ff-1f1e6'], 'isCanonical': true},
	':za:':
		{'unicode': ['1f1ff-1f1e6'], 'isCanonical': false},
	':flag_yt:':
		{'unicode': ['1f1fe-1f1f9'], 'isCanonical': true},
	':yt:':
		{'unicode': ['1f1fe-1f1f9'], 'isCanonical': false},
	':flag_ye:':
		{'unicode': ['1f1fe-1f1ea'], 'isCanonical': true},
	':ye:':
		{'unicode': ['1f1fe-1f1ea'], 'isCanonical': false},
	':flag_xk:':
		{'unicode': ['1f1fd-1f1f0'], 'isCanonical': true},
	':xk:':
		{'unicode': ['1f1fd-1f1f0'], 'isCanonical': false},
	':flag_ws:':
		{'unicode': ['1f1fc-1f1f8'], 'isCanonical': true},
	':ws:':
		{'unicode': ['1f1fc-1f1f8'], 'isCanonical': false},
	':flag_wf:':
		{'unicode': ['1f1fc-1f1eb'], 'isCanonical': true},
	':wf:':
		{'unicode': ['1f1fc-1f1eb'], 'isCanonical': false},
	':flag_vu:':
		{'unicode': ['1f1fb-1f1fa'], 'isCanonical': true},
	':vu:':
		{'unicode': ['1f1fb-1f1fa'], 'isCanonical': false},
	':flag_vn:':
		{'unicode': ['1f1fb-1f1f3'], 'isCanonical': true},
	':vn:':
		{'unicode': ['1f1fb-1f1f3'], 'isCanonical': false},
	':flag_vi:':
		{'unicode': ['1f1fb-1f1ee'], 'isCanonical': true},
	':vi:':
		{'unicode': ['1f1fb-1f1ee'], 'isCanonical': false},
	':flag_vg:':
		{'unicode': ['1f1fb-1f1ec'], 'isCanonical': true},
	':vg:':
		{'unicode': ['1f1fb-1f1ec'], 'isCanonical': false},
	':flag_ve:':
		{'unicode': ['1f1fb-1f1ea'], 'isCanonical': true},
	':ve:':
		{'unicode': ['1f1fb-1f1ea'], 'isCanonical': false},
	':flag_vc:':
		{'unicode': ['1f1fb-1f1e8'], 'isCanonical': true},
	':vc:':
		{'unicode': ['1f1fb-1f1e8'], 'isCanonical': false},
	':flag_va:':
		{'unicode': ['1f1fb-1f1e6'], 'isCanonical': true},
	':va:':
		{'unicode': ['1f1fb-1f1e6'], 'isCanonical': false},
	':flag_uz:':
		{'unicode': ['1f1fa-1f1ff'], 'isCanonical': true},
	':uz:':
		{'unicode': ['1f1fa-1f1ff'], 'isCanonical': false},
	':flag_uy:':
		{'unicode': ['1f1fa-1f1fe'], 'isCanonical': true},
	':uy:':
		{'unicode': ['1f1fa-1f1fe'], 'isCanonical': false},
	':flag_us:':
		{'unicode': ['1f1fa-1f1f8'], 'isCanonical': true},
	':us:':
		{'unicode': ['1f1fa-1f1f8'], 'isCanonical': false},
	':flag_um:':
		{'unicode': ['1f1fa-1f1f2'], 'isCanonical': true},
	':um:':
		{'unicode': ['1f1fa-1f1f2'], 'isCanonical': false},
	':flag_ug:':
		{'unicode': ['1f1fa-1f1ec'], 'isCanonical': true},
	':ug:':
		{'unicode': ['1f1fa-1f1ec'], 'isCanonical': false},
	':flag_ua:':
		{'unicode': ['1f1fa-1f1e6'], 'isCanonical': true},
	':ua:':
		{'unicode': ['1f1fa-1f1e6'], 'isCanonical': false},
	':flag_tz:':
		{'unicode': ['1f1f9-1f1ff'], 'isCanonical': true},
	':tz:':
		{'unicode': ['1f1f9-1f1ff'], 'isCanonical': false},
	':flag_tw:':
		{'unicode': ['1f1f9-1f1fc'], 'isCanonical': true},
	':tw:':
		{'unicode': ['1f1f9-1f1fc'], 'isCanonical': false},
	':flag_tv:':
		{'unicode': ['1f1f9-1f1fb'], 'isCanonical': true},
	':tuvalu:':
		{'unicode': ['1f1f9-1f1fb'], 'isCanonical': false},
	':flag_tt:':
		{'unicode': ['1f1f9-1f1f9'], 'isCanonical': true},
	':tt:':
		{'unicode': ['1f1f9-1f1f9'], 'isCanonical': false},
	':flag_tr:':
		{'unicode': ['1f1f9-1f1f7'], 'isCanonical': true},
	':tr:':
		{'unicode': ['1f1f9-1f1f7'], 'isCanonical': false},
	':flag_to:':
		{'unicode': ['1f1f9-1f1f4'], 'isCanonical': true},
	':to:':
		{'unicode': ['1f1f9-1f1f4'], 'isCanonical': false},
	':flag_tn:':
		{'unicode': ['1f1f9-1f1f3'], 'isCanonical': true},
	':tn:':
		{'unicode': ['1f1f9-1f1f3'], 'isCanonical': false},
	':flag_tm:':
		{'unicode': ['1f1f9-1f1f2'], 'isCanonical': true},
	':turkmenistan:':
		{'unicode': ['1f1f9-1f1f2'], 'isCanonical': false},
	':flag_tl:':
		{'unicode': ['1f1f9-1f1f1'], 'isCanonical': true},
	':tl:':
		{'unicode': ['1f1f9-1f1f1'], 'isCanonical': false},
	':flag_tk:':
		{'unicode': ['1f1f9-1f1f0'], 'isCanonical': true},
	':tk:':
		{'unicode': ['1f1f9-1f1f0'], 'isCanonical': false},
	':flag_tj:':
		{'unicode': ['1f1f9-1f1ef'], 'isCanonical': true},
	':tj:':
		{'unicode': ['1f1f9-1f1ef'], 'isCanonical': false},
	':flag_th:':
		{'unicode': ['1f1f9-1f1ed'], 'isCanonical': true},
	':th:':
		{'unicode': ['1f1f9-1f1ed'], 'isCanonical': false},
	':flag_tg:':
		{'unicode': ['1f1f9-1f1ec'], 'isCanonical': true},
	':tg:':
		{'unicode': ['1f1f9-1f1ec'], 'isCanonical': false},
	':flag_tf:':
		{'unicode': ['1f1f9-1f1eb'], 'isCanonical': true},
	':tf:':
		{'unicode': ['1f1f9-1f1eb'], 'isCanonical': false},
	':flag_td:':
		{'unicode': ['1f1f9-1f1e9'], 'isCanonical': true},
	':td:':
		{'unicode': ['1f1f9-1f1e9'], 'isCanonical': false},
	':flag_tc:':
		{'unicode': ['1f1f9-1f1e8'], 'isCanonical': true},
	':tc:':
		{'unicode': ['1f1f9-1f1e8'], 'isCanonical': false},
	':flag_ta:':
		{'unicode': ['1f1f9-1f1e6'], 'isCanonical': true},
	':ta:':
		{'unicode': ['1f1f9-1f1e6'], 'isCanonical': false},
	':flag_sz:':
		{'unicode': ['1f1f8-1f1ff'], 'isCanonical': true},
	':sz:':
		{'unicode': ['1f1f8-1f1ff'], 'isCanonical': false},
	':flag_sy:':
		{'unicode': ['1f1f8-1f1fe'], 'isCanonical': true},
	':sy:':
		{'unicode': ['1f1f8-1f1fe'], 'isCanonical': false},
	':flag_sx:':
		{'unicode': ['1f1f8-1f1fd'], 'isCanonical': true},
	':sx:':
		{'unicode': ['1f1f8-1f1fd'], 'isCanonical': false},
	':flag_sv:':
		{'unicode': ['1f1f8-1f1fb'], 'isCanonical': true},
	':sv:':
		{'unicode': ['1f1f8-1f1fb'], 'isCanonical': false},
	':flag_st:':
		{'unicode': ['1f1f8-1f1f9'], 'isCanonical': true},
	':st:':
		{'unicode': ['1f1f8-1f1f9'], 'isCanonical': false},
	':flag_ss:':
		{'unicode': ['1f1f8-1f1f8'], 'isCanonical': true},
	':ss:':
		{'unicode': ['1f1f8-1f1f8'], 'isCanonical': false},
	':flag_sr:':
		{'unicode': ['1f1f8-1f1f7'], 'isCanonical': true},
	':sr:':
		{'unicode': ['1f1f8-1f1f7'], 'isCanonical': false},
	':flag_so:':
		{'unicode': ['1f1f8-1f1f4'], 'isCanonical': true},
	':so:':
		{'unicode': ['1f1f8-1f1f4'], 'isCanonical': false},
	':flag_sn:':
		{'unicode': ['1f1f8-1f1f3'], 'isCanonical': true},
	':sn:':
		{'unicode': ['1f1f8-1f1f3'], 'isCanonical': false},
	':flag_sm:':
		{'unicode': ['1f1f8-1f1f2'], 'isCanonical': true},
	':sm:':
		{'unicode': ['1f1f8-1f1f2'], 'isCanonical': false},
	':flag_sl:':
		{'unicode': ['1f1f8-1f1f1'], 'isCanonical': true},
	':sl:':
		{'unicode': ['1f1f8-1f1f1'], 'isCanonical': false},
	':flag_sk:':
		{'unicode': ['1f1f8-1f1f0'], 'isCanonical': true},
	':sk:':
		{'unicode': ['1f1f8-1f1f0'], 'isCanonical': false},
	':flag_sj:':
		{'unicode': ['1f1f8-1f1ef'], 'isCanonical': true},
	':sj:':
		{'unicode': ['1f1f8-1f1ef'], 'isCanonical': false},
	':flag_si:':
		{'unicode': ['1f1f8-1f1ee'], 'isCanonical': true},
	':si:':
		{'unicode': ['1f1f8-1f1ee'], 'isCanonical': false},
	':flag_sh:':
		{'unicode': ['1f1f8-1f1ed'], 'isCanonical': true},
	':sh:':
		{'unicode': ['1f1f8-1f1ed'], 'isCanonical': false},
	':flag_sg:':
		{'unicode': ['1f1f8-1f1ec'], 'isCanonical': true},
	':sg:':
		{'unicode': ['1f1f8-1f1ec'], 'isCanonical': false},
	':flag_se:':
		{'unicode': ['1f1f8-1f1ea'], 'isCanonical': true},
	':se:':
		{'unicode': ['1f1f8-1f1ea'], 'isCanonical': false},
	':flag_sd:':
		{'unicode': ['1f1f8-1f1e9'], 'isCanonical': true},
	':sd:':
		{'unicode': ['1f1f8-1f1e9'], 'isCanonical': false},
	':flag_sc:':
		{'unicode': ['1f1f8-1f1e8'], 'isCanonical': true},
	':sc:':
		{'unicode': ['1f1f8-1f1e8'], 'isCanonical': false},
	':flag_sb:':
		{'unicode': ['1f1f8-1f1e7'], 'isCanonical': true},
	':sb:':
		{'unicode': ['1f1f8-1f1e7'], 'isCanonical': false},
	':flag_sa:':
		{'unicode': ['1f1f8-1f1e6'], 'isCanonical': true},
	':saudiarabia:':
		{'unicode': ['1f1f8-1f1e6'], 'isCanonical': false},
	':saudi:':
		{'unicode': ['1f1f8-1f1e6'], 'isCanonical': false},
	':flag_rw:':
		{'unicode': ['1f1f7-1f1fc'], 'isCanonical': true},
	':rw:':
		{'unicode': ['1f1f7-1f1fc'], 'isCanonical': false},
	':flag_ru:':
		{'unicode': ['1f1f7-1f1fa'], 'isCanonical': true},
	':ru:':
		{'unicode': ['1f1f7-1f1fa'], 'isCanonical': false},
	':flag_rs:':
		{'unicode': ['1f1f7-1f1f8'], 'isCanonical': true},
	':rs:':
		{'unicode': ['1f1f7-1f1f8'], 'isCanonical': false},
	':flag_ro:':
		{'unicode': ['1f1f7-1f1f4'], 'isCanonical': true},
	':ro:':
		{'unicode': ['1f1f7-1f1f4'], 'isCanonical': false},
	':flag_re:':
		{'unicode': ['1f1f7-1f1ea'], 'isCanonical': true},
	':re:':
		{'unicode': ['1f1f7-1f1ea'], 'isCanonical': false},
	':flag_qa:':
		{'unicode': ['1f1f6-1f1e6'], 'isCanonical': true},
	':qa:':
		{'unicode': ['1f1f6-1f1e6'], 'isCanonical': false},
	':flag_py:':
		{'unicode': ['1f1f5-1f1fe'], 'isCanonical': true},
	':py:':
		{'unicode': ['1f1f5-1f1fe'], 'isCanonical': false},
	':flag_pw:':
		{'unicode': ['1f1f5-1f1fc'], 'isCanonical': true},
	':pw:':
		{'unicode': ['1f1f5-1f1fc'], 'isCanonical': false},
	':flag_pt:':
		{'unicode': ['1f1f5-1f1f9'], 'isCanonical': true},
	':pt:':
		{'unicode': ['1f1f5-1f1f9'], 'isCanonical': false},
	':flag_ps:':
		{'unicode': ['1f1f5-1f1f8'], 'isCanonical': true},
	':ps:':
		{'unicode': ['1f1f5-1f1f8'], 'isCanonical': false},
	':flag_pr:':
		{'unicode': ['1f1f5-1f1f7'], 'isCanonical': true},
	':pr:':
		{'unicode': ['1f1f5-1f1f7'], 'isCanonical': false},
	':flag_pn:':
		{'unicode': ['1f1f5-1f1f3'], 'isCanonical': true},
	':pn:':
		{'unicode': ['1f1f5-1f1f3'], 'isCanonical': false},
	':flag_pm:':
		{'unicode': ['1f1f5-1f1f2'], 'isCanonical': true},
	':pm:':
		{'unicode': ['1f1f5-1f1f2'], 'isCanonical': false},
	':flag_pl:':
		{'unicode': ['1f1f5-1f1f1'], 'isCanonical': true},
	':pl:':
		{'unicode': ['1f1f5-1f1f1'], 'isCanonical': false},
	':flag_pk:':
		{'unicode': ['1f1f5-1f1f0'], 'isCanonical': true},
	':pk:':
		{'unicode': ['1f1f5-1f1f0'], 'isCanonical': false},
	':flag_ph:':
		{'unicode': ['1f1f5-1f1ed'], 'isCanonical': true},
	':ph:':
		{'unicode': ['1f1f5-1f1ed'], 'isCanonical': false},
	':flag_pg:':
		{'unicode': ['1f1f5-1f1ec'], 'isCanonical': true},
	':pg:':
		{'unicode': ['1f1f5-1f1ec'], 'isCanonical': false},
	':flag_pf:':
		{'unicode': ['1f1f5-1f1eb'], 'isCanonical': true},
	':pf:':
		{'unicode': ['1f1f5-1f1eb'], 'isCanonical': false},
	':flag_pe:':
		{'unicode': ['1f1f5-1f1ea'], 'isCanonical': true},
	':pe:':
		{'unicode': ['1f1f5-1f1ea'], 'isCanonical': false},
	':flag_pa:':
		{'unicode': ['1f1f5-1f1e6'], 'isCanonical': true},
	':pa:':
		{'unicode': ['1f1f5-1f1e6'], 'isCanonical': false},
	':flag_om:':
		{'unicode': ['1f1f4-1f1f2'], 'isCanonical': true},
	':om:':
		{'unicode': ['1f1f4-1f1f2'], 'isCanonical': false},
	':flag_nz:':
		{'unicode': ['1f1f3-1f1ff'], 'isCanonical': true},
	':nz:':
		{'unicode': ['1f1f3-1f1ff'], 'isCanonical': false},
	':flag_nu:':
		{'unicode': ['1f1f3-1f1fa'], 'isCanonical': true},
	':nu:':
		{'unicode': ['1f1f3-1f1fa'], 'isCanonical': false},
	':flag_nr:':
		{'unicode': ['1f1f3-1f1f7'], 'isCanonical': true},
	':nr:':
		{'unicode': ['1f1f3-1f1f7'], 'isCanonical': false},
	':flag_np:':
		{'unicode': ['1f1f3-1f1f5'], 'isCanonical': true},
	':np:':
		{'unicode': ['1f1f3-1f1f5'], 'isCanonical': false},
	':flag_no:':
		{'unicode': ['1f1f3-1f1f4'], 'isCanonical': true},
	':no:':
		{'unicode': ['1f1f3-1f1f4'], 'isCanonical': false},
	':flag_nl:':
		{'unicode': ['1f1f3-1f1f1'], 'isCanonical': true},
	':nl:':
		{'unicode': ['1f1f3-1f1f1'], 'isCanonical': false},
	':flag_ni:':
		{'unicode': ['1f1f3-1f1ee'], 'isCanonical': true},
	':ni:':
		{'unicode': ['1f1f3-1f1ee'], 'isCanonical': false},
	':flag_ng:':
		{'unicode': ['1f1f3-1f1ec'], 'isCanonical': true},
	':nigeria:':
		{'unicode': ['1f1f3-1f1ec'], 'isCanonical': false},
	':flag_nf:':
		{'unicode': ['1f1f3-1f1eb'], 'isCanonical': true},
	':nf:':
		{'unicode': ['1f1f3-1f1eb'], 'isCanonical': false},
	':flag_ne:':
		{'unicode': ['1f1f3-1f1ea'], 'isCanonical': true},
	':ne:':
		{'unicode': ['1f1f3-1f1ea'], 'isCanonical': false},
	':flag_nc:':
		{'unicode': ['1f1f3-1f1e8'], 'isCanonical': true},
	':nc:':
		{'unicode': ['1f1f3-1f1e8'], 'isCanonical': false},
	':flag_na:':
		{'unicode': ['1f1f3-1f1e6'], 'isCanonical': true},
	':na:':
		{'unicode': ['1f1f3-1f1e6'], 'isCanonical': false},
	':flag_mz:':
		{'unicode': ['1f1f2-1f1ff'], 'isCanonical': true},
	':mz:':
		{'unicode': ['1f1f2-1f1ff'], 'isCanonical': false},
	':flag_my:':
		{'unicode': ['1f1f2-1f1fe'], 'isCanonical': true},
	':my:':
		{'unicode': ['1f1f2-1f1fe'], 'isCanonical': false},
	':flag_mx:':
		{'unicode': ['1f1f2-1f1fd'], 'isCanonical': true},
	':mx:':
		{'unicode': ['1f1f2-1f1fd'], 'isCanonical': false},
	':flag_mw:':
		{'unicode': ['1f1f2-1f1fc'], 'isCanonical': true},
	':mw:':
		{'unicode': ['1f1f2-1f1fc'], 'isCanonical': false},
	':flag_mv:':
		{'unicode': ['1f1f2-1f1fb'], 'isCanonical': true},
	':mv:':
		{'unicode': ['1f1f2-1f1fb'], 'isCanonical': false},
	':flag_mu:':
		{'unicode': ['1f1f2-1f1fa'], 'isCanonical': true},
	':mu:':
		{'unicode': ['1f1f2-1f1fa'], 'isCanonical': false},
	':flag_mt:':
		{'unicode': ['1f1f2-1f1f9'], 'isCanonical': true},
	':mt:':
		{'unicode': ['1f1f2-1f1f9'], 'isCanonical': false},
	':flag_ms:':
		{'unicode': ['1f1f2-1f1f8'], 'isCanonical': true},
	':ms:':
		{'unicode': ['1f1f2-1f1f8'], 'isCanonical': false},
	':flag_mr:':
		{'unicode': ['1f1f2-1f1f7'], 'isCanonical': true},
	':mr:':
		{'unicode': ['1f1f2-1f1f7'], 'isCanonical': false},
	':flag_mq:':
		{'unicode': ['1f1f2-1f1f6'], 'isCanonical': true},
	':mq:':
		{'unicode': ['1f1f2-1f1f6'], 'isCanonical': false},
	':flag_mp:':
		{'unicode': ['1f1f2-1f1f5'], 'isCanonical': true},
	':mp:':
		{'unicode': ['1f1f2-1f1f5'], 'isCanonical': false},
	':flag_mo:':
		{'unicode': ['1f1f2-1f1f4'], 'isCanonical': true},
	':mo:':
		{'unicode': ['1f1f2-1f1f4'], 'isCanonical': false},
	':flag_mn:':
		{'unicode': ['1f1f2-1f1f3'], 'isCanonical': true},
	':mn:':
		{'unicode': ['1f1f2-1f1f3'], 'isCanonical': false},
	':flag_mm:':
		{'unicode': ['1f1f2-1f1f2'], 'isCanonical': true},
	':mm:':
		{'unicode': ['1f1f2-1f1f2'], 'isCanonical': false},
	':flag_ml:':
		{'unicode': ['1f1f2-1f1f1'], 'isCanonical': true},
	':ml:':
		{'unicode': ['1f1f2-1f1f1'], 'isCanonical': false},
	':flag_mk:':
		{'unicode': ['1f1f2-1f1f0'], 'isCanonical': true},
	':mk:':
		{'unicode': ['1f1f2-1f1f0'], 'isCanonical': false},
	':flag_mh:':
		{'unicode': ['1f1f2-1f1ed'], 'isCanonical': true},
	':mh:':
		{'unicode': ['1f1f2-1f1ed'], 'isCanonical': false},
	':flag_mg:':
		{'unicode': ['1f1f2-1f1ec'], 'isCanonical': true},
	':mg:':
		{'unicode': ['1f1f2-1f1ec'], 'isCanonical': false},
	':flag_mf:':
		{'unicode': ['1f1f2-1f1eb'], 'isCanonical': true},
	':mf:':
		{'unicode': ['1f1f2-1f1eb'], 'isCanonical': false},
	':flag_me:':
		{'unicode': ['1f1f2-1f1ea'], 'isCanonical': true},
	':me:':
		{'unicode': ['1f1f2-1f1ea'], 'isCanonical': false},
	':flag_md:':
		{'unicode': ['1f1f2-1f1e9'], 'isCanonical': true},
	':md:':
		{'unicode': ['1f1f2-1f1e9'], 'isCanonical': false},
	':flag_mc:':
		{'unicode': ['1f1f2-1f1e8'], 'isCanonical': true},
	':mc:':
		{'unicode': ['1f1f2-1f1e8'], 'isCanonical': false},
	':flag_ma:':
		{'unicode': ['1f1f2-1f1e6'], 'isCanonical': true},
	':ma:':
		{'unicode': ['1f1f2-1f1e6'], 'isCanonical': false},
	':flag_ly:':
		{'unicode': ['1f1f1-1f1fe'], 'isCanonical': true},
	':ly:':
		{'unicode': ['1f1f1-1f1fe'], 'isCanonical': false},
	':flag_lv:':
		{'unicode': ['1f1f1-1f1fb'], 'isCanonical': true},
	':lv:':
		{'unicode': ['1f1f1-1f1fb'], 'isCanonical': false},
	':flag_lu:':
		{'unicode': ['1f1f1-1f1fa'], 'isCanonical': true},
	':lu:':
		{'unicode': ['1f1f1-1f1fa'], 'isCanonical': false},
	':flag_lt:':
		{'unicode': ['1f1f1-1f1f9'], 'isCanonical': true},
	':lt:':
		{'unicode': ['1f1f1-1f1f9'], 'isCanonical': false},
	':flag_ls:':
		{'unicode': ['1f1f1-1f1f8'], 'isCanonical': true},
	':ls:':
		{'unicode': ['1f1f1-1f1f8'], 'isCanonical': false},
	':flag_lr:':
		{'unicode': ['1f1f1-1f1f7'], 'isCanonical': true},
	':lr:':
		{'unicode': ['1f1f1-1f1f7'], 'isCanonical': false},
	':flag_lk:':
		{'unicode': ['1f1f1-1f1f0'], 'isCanonical': true},
	':lk:':
		{'unicode': ['1f1f1-1f1f0'], 'isCanonical': false},
	':flag_li:':
		{'unicode': ['1f1f1-1f1ee'], 'isCanonical': true},
	':li:':
		{'unicode': ['1f1f1-1f1ee'], 'isCanonical': false},
	':flag_lc:':
		{'unicode': ['1f1f1-1f1e8'], 'isCanonical': true},
	':lc:':
		{'unicode': ['1f1f1-1f1e8'], 'isCanonical': false},
	':flag_lb:':
		{'unicode': ['1f1f1-1f1e7'], 'isCanonical': true},
	':lb:':
		{'unicode': ['1f1f1-1f1e7'], 'isCanonical': false},
	':flag_la:':
		{'unicode': ['1f1f1-1f1e6'], 'isCanonical': true},
	':la:':
		{'unicode': ['1f1f1-1f1e6'], 'isCanonical': false},
	':flag_kz:':
		{'unicode': ['1f1f0-1f1ff'], 'isCanonical': true},
	':kz:':
		{'unicode': ['1f1f0-1f1ff'], 'isCanonical': false},
	':flag_ky:':
		{'unicode': ['1f1f0-1f1fe'], 'isCanonical': true},
	':ky:':
		{'unicode': ['1f1f0-1f1fe'], 'isCanonical': false},
	':flag_kw:':
		{'unicode': ['1f1f0-1f1fc'], 'isCanonical': true},
	':kw:':
		{'unicode': ['1f1f0-1f1fc'], 'isCanonical': false},
	':flag_kr:':
		{'unicode': ['1f1f0-1f1f7'], 'isCanonical': true},
	':kr:':
		{'unicode': ['1f1f0-1f1f7'], 'isCanonical': false},
	':flag_kp:':
		{'unicode': ['1f1f0-1f1f5'], 'isCanonical': true},
	':kp:':
		{'unicode': ['1f1f0-1f1f5'], 'isCanonical': false},
	':flag_kn:':
		{'unicode': ['1f1f0-1f1f3'], 'isCanonical': true},
	':kn:':
		{'unicode': ['1f1f0-1f1f3'], 'isCanonical': false},
	':flag_km:':
		{'unicode': ['1f1f0-1f1f2'], 'isCanonical': true},
	':km:':
		{'unicode': ['1f1f0-1f1f2'], 'isCanonical': false},
	':flag_ki:':
		{'unicode': ['1f1f0-1f1ee'], 'isCanonical': true},
	':ki:':
		{'unicode': ['1f1f0-1f1ee'], 'isCanonical': false},
	':flag_kh:':
		{'unicode': ['1f1f0-1f1ed'], 'isCanonical': true},
	':kh:':
		{'unicode': ['1f1f0-1f1ed'], 'isCanonical': false},
	':flag_kg:':
		{'unicode': ['1f1f0-1f1ec'], 'isCanonical': true},
	':kg:':
		{'unicode': ['1f1f0-1f1ec'], 'isCanonical': false},
	':flag_ke:':
		{'unicode': ['1f1f0-1f1ea'], 'isCanonical': true},
	':ke:':
		{'unicode': ['1f1f0-1f1ea'], 'isCanonical': false},
	':flag_jp:':
		{'unicode': ['1f1ef-1f1f5'], 'isCanonical': true},
	':jp:':
		{'unicode': ['1f1ef-1f1f5'], 'isCanonical': false},
	':flag_jo:':
		{'unicode': ['1f1ef-1f1f4'], 'isCanonical': true},
	':jo:':
		{'unicode': ['1f1ef-1f1f4'], 'isCanonical': false},
	':flag_jm:':
		{'unicode': ['1f1ef-1f1f2'], 'isCanonical': true},
	':jm:':
		{'unicode': ['1f1ef-1f1f2'], 'isCanonical': false},
	':flag_je:':
		{'unicode': ['1f1ef-1f1ea'], 'isCanonical': true},
	':je:':
		{'unicode': ['1f1ef-1f1ea'], 'isCanonical': false},
	':flag_it:':
		{'unicode': ['1f1ee-1f1f9'], 'isCanonical': true},
	':it:':
		{'unicode': ['1f1ee-1f1f9'], 'isCanonical': false},
	':flag_is:':
		{'unicode': ['1f1ee-1f1f8'], 'isCanonical': true},
	':is:':
		{'unicode': ['1f1ee-1f1f8'], 'isCanonical': false},
	':flag_ir:':
		{'unicode': ['1f1ee-1f1f7'], 'isCanonical': true},
	':ir:':
		{'unicode': ['1f1ee-1f1f7'], 'isCanonical': false},
	':flag_iq:':
		{'unicode': ['1f1ee-1f1f6'], 'isCanonical': true},
	':iq:':
		{'unicode': ['1f1ee-1f1f6'], 'isCanonical': false},
	':flag_io:':
		{'unicode': ['1f1ee-1f1f4'], 'isCanonical': true},
	':io:':
		{'unicode': ['1f1ee-1f1f4'], 'isCanonical': false},
	':flag_in:':
		{'unicode': ['1f1ee-1f1f3'], 'isCanonical': true},
	':in:':
		{'unicode': ['1f1ee-1f1f3'], 'isCanonical': false},
	':flag_im:':
		{'unicode': ['1f1ee-1f1f2'], 'isCanonical': true},
	':im:':
		{'unicode': ['1f1ee-1f1f2'], 'isCanonical': false},
	':flag_il:':
		{'unicode': ['1f1ee-1f1f1'], 'isCanonical': true},
	':il:':
		{'unicode': ['1f1ee-1f1f1'], 'isCanonical': false},
	':flag_ie:':
		{'unicode': ['1f1ee-1f1ea'], 'isCanonical': true},
	':ie:':
		{'unicode': ['1f1ee-1f1ea'], 'isCanonical': false},
	':flag_id:':
		{'unicode': ['1f1ee-1f1e9'], 'isCanonical': true},
	':indonesia:':
		{'unicode': ['1f1ee-1f1e9'], 'isCanonical': false},
	':flag_ic:':
		{'unicode': ['1f1ee-1f1e8'], 'isCanonical': true},
	':ic:':
		{'unicode': ['1f1ee-1f1e8'], 'isCanonical': false},
	':flag_hu:':
		{'unicode': ['1f1ed-1f1fa'], 'isCanonical': true},
	':hu:':
		{'unicode': ['1f1ed-1f1fa'], 'isCanonical': false},
	':flag_ht:':
		{'unicode': ['1f1ed-1f1f9'], 'isCanonical': true},
	':ht:':
		{'unicode': ['1f1ed-1f1f9'], 'isCanonical': false},
	':flag_hr:':
		{'unicode': ['1f1ed-1f1f7'], 'isCanonical': true},
	':hr:':
		{'unicode': ['1f1ed-1f1f7'], 'isCanonical': false},
	':flag_hn:':
		{'unicode': ['1f1ed-1f1f3'], 'isCanonical': true},
	':hn:':
		{'unicode': ['1f1ed-1f1f3'], 'isCanonical': false},
	':flag_hm:':
		{'unicode': ['1f1ed-1f1f2'], 'isCanonical': true},
	':hm:':
		{'unicode': ['1f1ed-1f1f2'], 'isCanonical': false},
	':flag_hk:':
		{'unicode': ['1f1ed-1f1f0'], 'isCanonical': true},
	':hk:':
		{'unicode': ['1f1ed-1f1f0'], 'isCanonical': false},
	':flag_gy:':
		{'unicode': ['1f1ec-1f1fe'], 'isCanonical': true},
	':gy:':
		{'unicode': ['1f1ec-1f1fe'], 'isCanonical': false},
	':flag_gw:':
		{'unicode': ['1f1ec-1f1fc'], 'isCanonical': true},
	':gw:':
		{'unicode': ['1f1ec-1f1fc'], 'isCanonical': false},
	':flag_gu:':
		{'unicode': ['1f1ec-1f1fa'], 'isCanonical': true},
	':gu:':
		{'unicode': ['1f1ec-1f1fa'], 'isCanonical': false},
	':flag_gt:':
		{'unicode': ['1f1ec-1f1f9'], 'isCanonical': true},
	':gt:':
		{'unicode': ['1f1ec-1f1f9'], 'isCanonical': false},
	':flag_gs:':
		{'unicode': ['1f1ec-1f1f8'], 'isCanonical': true},
	':gs:':
		{'unicode': ['1f1ec-1f1f8'], 'isCanonical': false},
	':flag_gr:':
		{'unicode': ['1f1ec-1f1f7'], 'isCanonical': true},
	':gr:':
		{'unicode': ['1f1ec-1f1f7'], 'isCanonical': false},
	':flag_gq:':
		{'unicode': ['1f1ec-1f1f6'], 'isCanonical': true},
	':gq:':
		{'unicode': ['1f1ec-1f1f6'], 'isCanonical': false},
	':flag_gp:':
		{'unicode': ['1f1ec-1f1f5'], 'isCanonical': true},
	':gp:':
		{'unicode': ['1f1ec-1f1f5'], 'isCanonical': false},
	':flag_gn:':
		{'unicode': ['1f1ec-1f1f3'], 'isCanonical': true},
	':gn:':
		{'unicode': ['1f1ec-1f1f3'], 'isCanonical': false},
	':flag_gm:':
		{'unicode': ['1f1ec-1f1f2'], 'isCanonical': true},
	':gm:':
		{'unicode': ['1f1ec-1f1f2'], 'isCanonical': false},
	':flag_gl:':
		{'unicode': ['1f1ec-1f1f1'], 'isCanonical': true},
	':gl:':
		{'unicode': ['1f1ec-1f1f1'], 'isCanonical': false},
	':flag_gi:':
		{'unicode': ['1f1ec-1f1ee'], 'isCanonical': true},
	':gi:':
		{'unicode': ['1f1ec-1f1ee'], 'isCanonical': false},
	':flag_gh:':
		{'unicode': ['1f1ec-1f1ed'], 'isCanonical': true},
	':gh:':
		{'unicode': ['1f1ec-1f1ed'], 'isCanonical': false},
	':flag_gg:':
		{'unicode': ['1f1ec-1f1ec'], 'isCanonical': true},
	':gg:':
		{'unicode': ['1f1ec-1f1ec'], 'isCanonical': false},
	':flag_gf:':
		{'unicode': ['1f1ec-1f1eb'], 'isCanonical': true},
	':gf:':
		{'unicode': ['1f1ec-1f1eb'], 'isCanonical': false},
	':flag_ge:':
		{'unicode': ['1f1ec-1f1ea'], 'isCanonical': true},
	':ge:':
		{'unicode': ['1f1ec-1f1ea'], 'isCanonical': false},
	':flag_gd:':
		{'unicode': ['1f1ec-1f1e9'], 'isCanonical': true},
	':gd:':
		{'unicode': ['1f1ec-1f1e9'], 'isCanonical': false},
	':flag_gb:':
		{'unicode': ['1f1ec-1f1e7'], 'isCanonical': true},
	':gb:':
		{'unicode': ['1f1ec-1f1e7'], 'isCanonical': false},
	':flag_ga:':
		{'unicode': ['1f1ec-1f1e6'], 'isCanonical': true},
	':ga:':
		{'unicode': ['1f1ec-1f1e6'], 'isCanonical': false},
	':flag_fr:':
		{'unicode': ['1f1eb-1f1f7'], 'isCanonical': true},
	':fr:':
		{'unicode': ['1f1eb-1f1f7'], 'isCanonical': false},
	':flag_fo:':
		{'unicode': ['1f1eb-1f1f4'], 'isCanonical': true},
	':fo:':
		{'unicode': ['1f1eb-1f1f4'], 'isCanonical': false},
	':flag_fm:':
		{'unicode': ['1f1eb-1f1f2'], 'isCanonical': true},
	':fm:':
		{'unicode': ['1f1eb-1f1f2'], 'isCanonical': false},
	':flag_fk:':
		{'unicode': ['1f1eb-1f1f0'], 'isCanonical': true},
	':fk:':
		{'unicode': ['1f1eb-1f1f0'], 'isCanonical': false},
	':flag_fj:':
		{'unicode': ['1f1eb-1f1ef'], 'isCanonical': true},
	':fj:':
		{'unicode': ['1f1eb-1f1ef'], 'isCanonical': false},
	':flag_fi:':
		{'unicode': ['1f1eb-1f1ee'], 'isCanonical': true},
	':fi:':
		{'unicode': ['1f1eb-1f1ee'], 'isCanonical': false},
	':flag_eu:':
		{'unicode': ['1f1ea-1f1fa'], 'isCanonical': true},
	':eu:':
		{'unicode': ['1f1ea-1f1fa'], 'isCanonical': false},
	':flag_et:':
		{'unicode': ['1f1ea-1f1f9'], 'isCanonical': true},
	':et:':
		{'unicode': ['1f1ea-1f1f9'], 'isCanonical': false},
	':flag_es:':
		{'unicode': ['1f1ea-1f1f8'], 'isCanonical': true},
	':es:':
		{'unicode': ['1f1ea-1f1f8'], 'isCanonical': false},
	':flag_er:':
		{'unicode': ['1f1ea-1f1f7'], 'isCanonical': true},
	':er:':
		{'unicode': ['1f1ea-1f1f7'], 'isCanonical': false},
	':flag_eh:':
		{'unicode': ['1f1ea-1f1ed'], 'isCanonical': true},
	':eh:':
		{'unicode': ['1f1ea-1f1ed'], 'isCanonical': false},
	':flag_eg:':
		{'unicode': ['1f1ea-1f1ec'], 'isCanonical': true},
	':eg:':
		{'unicode': ['1f1ea-1f1ec'], 'isCanonical': false},
	':flag_ee:':
		{'unicode': ['1f1ea-1f1ea'], 'isCanonical': true},
	':ee:':
		{'unicode': ['1f1ea-1f1ea'], 'isCanonical': false},
	':flag_ec:':
		{'unicode': ['1f1ea-1f1e8'], 'isCanonical': true},
	':ec:':
		{'unicode': ['1f1ea-1f1e8'], 'isCanonical': false},
	':flag_ea:':
		{'unicode': ['1f1ea-1f1e6'], 'isCanonical': true},
	':ea:':
		{'unicode': ['1f1ea-1f1e6'], 'isCanonical': false},
	':flag_dz:':
		{'unicode': ['1f1e9-1f1ff'], 'isCanonical': true},
	':dz:':
		{'unicode': ['1f1e9-1f1ff'], 'isCanonical': false},
	':flag_do:':
		{'unicode': ['1f1e9-1f1f4'], 'isCanonical': true},
	':do:':
		{'unicode': ['1f1e9-1f1f4'], 'isCanonical': false},
	':flag_dm:':
		{'unicode': ['1f1e9-1f1f2'], 'isCanonical': true},
	':dm:':
		{'unicode': ['1f1e9-1f1f2'], 'isCanonical': false},
	':flag_dk:':
		{'unicode': ['1f1e9-1f1f0'], 'isCanonical': true},
	':dk:':
		{'unicode': ['1f1e9-1f1f0'], 'isCanonical': false},
	':flag_dj:':
		{'unicode': ['1f1e9-1f1ef'], 'isCanonical': true},
	':dj:':
		{'unicode': ['1f1e9-1f1ef'], 'isCanonical': false},
	':flag_dg:':
		{'unicode': ['1f1e9-1f1ec'], 'isCanonical': true},
	':dg:':
		{'unicode': ['1f1e9-1f1ec'], 'isCanonical': false},
	':flag_de:':
		{'unicode': ['1f1e9-1f1ea'], 'isCanonical': true},
	':de:':
		{'unicode': ['1f1e9-1f1ea'], 'isCanonical': false},
	':flag_cz:':
		{'unicode': ['1f1e8-1f1ff'], 'isCanonical': true},
	':cz:':
		{'unicode': ['1f1e8-1f1ff'], 'isCanonical': false},
	':flag_cy:':
		{'unicode': ['1f1e8-1f1fe'], 'isCanonical': true},
	':cy:':
		{'unicode': ['1f1e8-1f1fe'], 'isCanonical': false},
	':flag_cx:':
		{'unicode': ['1f1e8-1f1fd'], 'isCanonical': true},
	':cx:':
		{'unicode': ['1f1e8-1f1fd'], 'isCanonical': false},
	':flag_cw:':
		{'unicode': ['1f1e8-1f1fc'], 'isCanonical': true},
	':cw:':
		{'unicode': ['1f1e8-1f1fc'], 'isCanonical': false},
	':flag_cv:':
		{'unicode': ['1f1e8-1f1fb'], 'isCanonical': true},
	':cv:':
		{'unicode': ['1f1e8-1f1fb'], 'isCanonical': false},
	':flag_cu:':
		{'unicode': ['1f1e8-1f1fa'], 'isCanonical': true},
	':cu:':
		{'unicode': ['1f1e8-1f1fa'], 'isCanonical': false},
	':flag_cr:':
		{'unicode': ['1f1e8-1f1f7'], 'isCanonical': true},
	':cr:':
		{'unicode': ['1f1e8-1f1f7'], 'isCanonical': false},
	':flag_cp:':
		{'unicode': ['1f1e8-1f1f5'], 'isCanonical': true},
	':cp:':
		{'unicode': ['1f1e8-1f1f5'], 'isCanonical': false},
	':flag_co:':
		{'unicode': ['1f1e8-1f1f4'], 'isCanonical': true},
	':co:':
		{'unicode': ['1f1e8-1f1f4'], 'isCanonical': false},
	':flag_cn:':
		{'unicode': ['1f1e8-1f1f3'], 'isCanonical': true},
	':cn:':
		{'unicode': ['1f1e8-1f1f3'], 'isCanonical': false},
	':flag_cm:':
		{'unicode': ['1f1e8-1f1f2'], 'isCanonical': true},
	':cm:':
		{'unicode': ['1f1e8-1f1f2'], 'isCanonical': false},
	':flag_cl:':
		{'unicode': ['1f1e8-1f1f1'], 'isCanonical': true},
	':chile:':
		{'unicode': ['1f1e8-1f1f1'], 'isCanonical': false},
	':flag_ck:':
		{'unicode': ['1f1e8-1f1f0'], 'isCanonical': true},
	':ck:':
		{'unicode': ['1f1e8-1f1f0'], 'isCanonical': false},
	':flag_ci:':
		{'unicode': ['1f1e8-1f1ee'], 'isCanonical': true},
	':ci:':
		{'unicode': ['1f1e8-1f1ee'], 'isCanonical': false},
	':flag_ch:':
		{'unicode': ['1f1e8-1f1ed'], 'isCanonical': true},
	':ch:':
		{'unicode': ['1f1e8-1f1ed'], 'isCanonical': false},
	':flag_cg:':
		{'unicode': ['1f1e8-1f1ec'], 'isCanonical': true},
	':cg:':
		{'unicode': ['1f1e8-1f1ec'], 'isCanonical': false},
	':flag_cf:':
		{'unicode': ['1f1e8-1f1eb'], 'isCanonical': true},
	':cf:':
		{'unicode': ['1f1e8-1f1eb'], 'isCanonical': false},
	':flag_cd:':
		{'unicode': ['1f1e8-1f1e9'], 'isCanonical': true},
	':congo:':
		{'unicode': ['1f1e8-1f1e9'], 'isCanonical': false},
	':flag_cc:':
		{'unicode': ['1f1e8-1f1e8'], 'isCanonical': true},
	':cc:':
		{'unicode': ['1f1e8-1f1e8'], 'isCanonical': false},
	':flag_ca:':
		{'unicode': ['1f1e8-1f1e6'], 'isCanonical': true},
	':ca:':
		{'unicode': ['1f1e8-1f1e6'], 'isCanonical': false},
	':flag_bz:':
		{'unicode': ['1f1e7-1f1ff'], 'isCanonical': true},
	':bz:':
		{'unicode': ['1f1e7-1f1ff'], 'isCanonical': false},
	':flag_by:':
		{'unicode': ['1f1e7-1f1fe'], 'isCanonical': true},
	':by:':
		{'unicode': ['1f1e7-1f1fe'], 'isCanonical': false},
	':flag_bw:':
		{'unicode': ['1f1e7-1f1fc'], 'isCanonical': true},
	':bw:':
		{'unicode': ['1f1e7-1f1fc'], 'isCanonical': false},
	':flag_bv:':
		{'unicode': ['1f1e7-1f1fb'], 'isCanonical': true},
	':bv:':
		{'unicode': ['1f1e7-1f1fb'], 'isCanonical': false},
	':flag_bt:':
		{'unicode': ['1f1e7-1f1f9'], 'isCanonical': true},
	':bt:':
		{'unicode': ['1f1e7-1f1f9'], 'isCanonical': false},
	':flag_bs:':
		{'unicode': ['1f1e7-1f1f8'], 'isCanonical': true},
	':bs:':
		{'unicode': ['1f1e7-1f1f8'], 'isCanonical': false},
	':flag_br:':
		{'unicode': ['1f1e7-1f1f7'], 'isCanonical': true},
	':br:':
		{'unicode': ['1f1e7-1f1f7'], 'isCanonical': false},
	':flag_bq:':
		{'unicode': ['1f1e7-1f1f6'], 'isCanonical': true},
	':bq:':
		{'unicode': ['1f1e7-1f1f6'], 'isCanonical': false},
	':flag_bo:':
		{'unicode': ['1f1e7-1f1f4'], 'isCanonical': true},
	':bo:':
		{'unicode': ['1f1e7-1f1f4'], 'isCanonical': false},
	':flag_bn:':
		{'unicode': ['1f1e7-1f1f3'], 'isCanonical': true},
	':bn:':
		{'unicode': ['1f1e7-1f1f3'], 'isCanonical': false},
	':flag_bm:':
		{'unicode': ['1f1e7-1f1f2'], 'isCanonical': true},
	':bm:':
		{'unicode': ['1f1e7-1f1f2'], 'isCanonical': false},
	':flag_bl:':
		{'unicode': ['1f1e7-1f1f1'], 'isCanonical': true},
	':bl:':
		{'unicode': ['1f1e7-1f1f1'], 'isCanonical': false},
	':flag_bj:':
		{'unicode': ['1f1e7-1f1ef'], 'isCanonical': true},
	':bj:':
		{'unicode': ['1f1e7-1f1ef'], 'isCanonical': false},
	':flag_bi:':
		{'unicode': ['1f1e7-1f1ee'], 'isCanonical': true},
	':bi:':
		{'unicode': ['1f1e7-1f1ee'], 'isCanonical': false},
	':flag_bh:':
		{'unicode': ['1f1e7-1f1ed'], 'isCanonical': true},
	':bh:':
		{'unicode': ['1f1e7-1f1ed'], 'isCanonical': false},
	':flag_bg:':
		{'unicode': ['1f1e7-1f1ec'], 'isCanonical': true},
	':bg:':
		{'unicode': ['1f1e7-1f1ec'], 'isCanonical': false},
	':flag_bf:':
		{'unicode': ['1f1e7-1f1eb'], 'isCanonical': true},
	':bf:':
		{'unicode': ['1f1e7-1f1eb'], 'isCanonical': false},
	':flag_be:':
		{'unicode': ['1f1e7-1f1ea'], 'isCanonical': true},
	':be:':
		{'unicode': ['1f1e7-1f1ea'], 'isCanonical': false},
	':flag_bd:':
		{'unicode': ['1f1e7-1f1e9'], 'isCanonical': true},
	':bd:':
		{'unicode': ['1f1e7-1f1e9'], 'isCanonical': false},
	':flag_bb:':
		{'unicode': ['1f1e7-1f1e7'], 'isCanonical': true},
	':bb:':
		{'unicode': ['1f1e7-1f1e7'], 'isCanonical': false},
	':flag_ba:':
		{'unicode': ['1f1e7-1f1e6'], 'isCanonical': true},
	':ba:':
		{'unicode': ['1f1e7-1f1e6'], 'isCanonical': false},
	':flag_az:':
		{'unicode': ['1f1e6-1f1ff'], 'isCanonical': true},
	':az:':
		{'unicode': ['1f1e6-1f1ff'], 'isCanonical': false},
	':flag_ax:':
		{'unicode': ['1f1e6-1f1fd'], 'isCanonical': true},
	':ax:':
		{'unicode': ['1f1e6-1f1fd'], 'isCanonical': false},
	':flag_aw:':
		{'unicode': ['1f1e6-1f1fc'], 'isCanonical': true},
	':aw:':
		{'unicode': ['1f1e6-1f1fc'], 'isCanonical': false},
	':flag_au:':
		{'unicode': ['1f1e6-1f1fa'], 'isCanonical': true},
	':au:':
		{'unicode': ['1f1e6-1f1fa'], 'isCanonical': false},
	':flag_at:':
		{'unicode': ['1f1e6-1f1f9'], 'isCanonical': true},
	':at:':
		{'unicode': ['1f1e6-1f1f9'], 'isCanonical': false},
	':flag_as:':
		{'unicode': ['1f1e6-1f1f8'], 'isCanonical': true},
	':as:':
		{'unicode': ['1f1e6-1f1f8'], 'isCanonical': false},
	':flag_ar:':
		{'unicode': ['1f1e6-1f1f7'], 'isCanonical': true},
	':ar:':
		{'unicode': ['1f1e6-1f1f7'], 'isCanonical': false},
	':flag_aq:':
		{'unicode': ['1f1e6-1f1f6'], 'isCanonical': true},
	':aq:':
		{'unicode': ['1f1e6-1f1f6'], 'isCanonical': false},
	':flag_ao:':
		{'unicode': ['1f1e6-1f1f4'], 'isCanonical': true},
	':ao:':
		{'unicode': ['1f1e6-1f1f4'], 'isCanonical': false},
	':flag_am:':
		{'unicode': ['1f1e6-1f1f2'], 'isCanonical': true},
	':am:':
		{'unicode': ['1f1e6-1f1f2'], 'isCanonical': false},
	':flag_al:':
		{'unicode': ['1f1e6-1f1f1'], 'isCanonical': true},
	':al:':
		{'unicode': ['1f1e6-1f1f1'], 'isCanonical': false},
	':flag_ai:':
		{'unicode': ['1f1e6-1f1ee'], 'isCanonical': true},
	':ai:':
		{'unicode': ['1f1e6-1f1ee'], 'isCanonical': false},
	':flag_ag:':
		{'unicode': ['1f1e6-1f1ec'], 'isCanonical': true},
	':ag:':
		{'unicode': ['1f1e6-1f1ec'], 'isCanonical': false},
	':flag_af:':
		{'unicode': ['1f1e6-1f1eb'], 'isCanonical': true},
	':af:':
		{'unicode': ['1f1e6-1f1eb'], 'isCanonical': false},
	':flag_ae:':
		{'unicode': ['1f1e6-1f1ea'], 'isCanonical': true},
	':ae:':
		{'unicode': ['1f1e6-1f1ea'], 'isCanonical': false},
	':flag_ad:':
		{'unicode': ['1f1e6-1f1e9'], 'isCanonical': true},
	':ad:':
		{'unicode': ['1f1e6-1f1e9'], 'isCanonical': false},
	':flag_ac:':
		{'unicode': ['1f1e6-1f1e8'], 'isCanonical': true},
	':ac:':
		{'unicode': ['1f1e6-1f1e8'], 'isCanonical': false},
	':mahjong:':
		{'unicode': ['1f004-fe0f','1f004'], 'isCanonical': true},
	':parking:':
		{'unicode': ['1f17f-fe0f','1f17f'], 'isCanonical': true},
	':sa:':
		{'unicode': ['1f202-fe0f','1f202'], 'isCanonical': true},
	':u7121:':
		{'unicode': ['1f21a-fe0f','1f21a'], 'isCanonical': true},
	':u6307:':
		{'unicode': ['1f22f-fe0f','1f22f'], 'isCanonical': true},
	':u6708:':
		{'unicode': ['1f237-fe0f','1f237'], 'isCanonical': true},
	':film_frames:':
		{'unicode': ['1f39e-fe0f','1f39e'], 'isCanonical': true},
	':tickets:':
		{'unicode': ['1f39f-fe0f','1f39f'], 'isCanonical': true},
	':admission_tickets:':
		{'unicode': ['1f39f-fe0f','1f39f'], 'isCanonical': false},
	':lifter:':
		{'unicode': ['1f3cb-fe0f','1f3cb'], 'isCanonical': true},
	':weight_lifter:':
		{'unicode': ['1f3cb-fe0f','1f3cb'], 'isCanonical': false},
	':golfer:':
		{'unicode': ['1f3cc-fe0f','1f3cc'], 'isCanonical': true},
	':motorcycle:':
		{'unicode': ['1f3cd-fe0f','1f3cd'], 'isCanonical': true},
	':racing_motorcycle:':
		{'unicode': ['1f3cd-fe0f','1f3cd'], 'isCanonical': false},
	':race_car:':
		{'unicode': ['1f3ce-fe0f','1f3ce'], 'isCanonical': true},
	':racing_car:':
		{'unicode': ['1f3ce-fe0f','1f3ce'], 'isCanonical': false},
	':military_medal:':
		{'unicode': ['1f396-fe0f','1f396'], 'isCanonical': true},
	':reminder_ribbon:':
		{'unicode': ['1f397-fe0f','1f397'], 'isCanonical': true},
	':hot_pepper:':
		{'unicode': ['1f336-fe0f','1f336'], 'isCanonical': true},
	':cloud_rain:':
		{'unicode': ['1f327-fe0f','1f327'], 'isCanonical': true},
	':cloud_with_rain:':
		{'unicode': ['1f327-fe0f','1f327'], 'isCanonical': false},
	':cloud_snow:':
		{'unicode': ['1f328-fe0f','1f328'], 'isCanonical': true},
	':cloud_with_snow:':
		{'unicode': ['1f328-fe0f','1f328'], 'isCanonical': false},
	':cloud_lightning:':
		{'unicode': ['1f329-fe0f','1f329'], 'isCanonical': true},
	':cloud_with_lightning:':
		{'unicode': ['1f329-fe0f','1f329'], 'isCanonical': false},
	':cloud_tornado:':
		{'unicode': ['1f32a-fe0f','1f32a'], 'isCanonical': true},
	':cloud_with_tornado:':
		{'unicode': ['1f32a-fe0f','1f32a'], 'isCanonical': false},
	':fog:':
		{'unicode': ['1f32b-fe0f','1f32b'], 'isCanonical': true},
	':wind_blowing_face:':
		{'unicode': ['1f32c-fe0f','1f32c'], 'isCanonical': true},
	':chipmunk:':
		{'unicode': ['1f43f-fe0f','1f43f'], 'isCanonical': true},
	':spider:':
		{'unicode': ['1f577-fe0f','1f577'], 'isCanonical': true},
	':spider_web:':
		{'unicode': ['1f578-fe0f','1f578'], 'isCanonical': true},
	':thermometer:':
		{'unicode': ['1f321-fe0f','1f321'], 'isCanonical': true},
	':microphone2:':
		{'unicode': ['1f399-fe0f','1f399'], 'isCanonical': true},
	':studio_microphone:':
		{'unicode': ['1f399-fe0f','1f399'], 'isCanonical': false},
	':level_slider:':
		{'unicode': ['1f39a-fe0f','1f39a'], 'isCanonical': true},
	':control_knobs:':
		{'unicode': ['1f39b-fe0f','1f39b'], 'isCanonical': true},
	':flag_white:':
		{'unicode': ['1f3f3-fe0f','1f3f3'], 'isCanonical': true},
	':waving_white_flag:':
		{'unicode': ['1f3f3-fe0f','1f3f3'], 'isCanonical': false},
	':rosette:':
		{'unicode': ['1f3f5-fe0f','1f3f5'], 'isCanonical': true},
	':label:':
		{'unicode': ['1f3f7-fe0f','1f3f7'], 'isCanonical': true},
	':projector:':
		{'unicode': ['1f4fd-fe0f','1f4fd'], 'isCanonical': true},
	':film_projector:':
		{'unicode': ['1f4fd-fe0f','1f4fd'], 'isCanonical': false},
	':om_symbol:':
		{'unicode': ['1f549-fe0f','1f549'], 'isCanonical': true},
	':dove:':
		{'unicode': ['1f54a-fe0f','1f54a'], 'isCanonical': true},
	':dove_of_peace:':
		{'unicode': ['1f54a-fe0f','1f54a'], 'isCanonical': false},
	':candle:':
		{'unicode': ['1f56f-fe0f','1f56f'], 'isCanonical': true},
	':clock:':
		{'unicode': ['1f570-fe0f','1f570'], 'isCanonical': true},
	':mantlepiece_clock:':
		{'unicode': ['1f570-fe0f','1f570'], 'isCanonical': false},
	':hole:':
		{'unicode': ['1f573-fe0f','1f573'], 'isCanonical': true},
	':dark_sunglasses:':
		{'unicode': ['1f576-fe0f','1f576'], 'isCanonical': true},
	':joystick:':
		{'unicode': ['1f579-fe0f','1f579'], 'isCanonical': true},
	':paperclips:':
		{'unicode': ['1f587-fe0f','1f587'], 'isCanonical': true},
	':linked_paperclips:':
		{'unicode': ['1f587-fe0f','1f587'], 'isCanonical': false},
	':pen_ballpoint:':
		{'unicode': ['1f58a-fe0f','1f58a'], 'isCanonical': true},
	':lower_left_ballpoint_pen:':
		{'unicode': ['1f58a-fe0f','1f58a'], 'isCanonical': false},
	':pen_fountain:':
		{'unicode': ['1f58b-fe0f','1f58b'], 'isCanonical': true},
	':lower_left_fountain_pen:':
		{'unicode': ['1f58b-fe0f','1f58b'], 'isCanonical': false},
	':paintbrush:':
		{'unicode': ['1f58c-fe0f','1f58c'], 'isCanonical': true},
	':lower_left_paintbrush:':
		{'unicode': ['1f58c-fe0f','1f58c'], 'isCanonical': false},
	':crayon:':
		{'unicode': ['1f58d-fe0f','1f58d'], 'isCanonical': true},
	':lower_left_crayon:':
		{'unicode': ['1f58d-fe0f','1f58d'], 'isCanonical': false},
	':desktop:':
		{'unicode': ['1f5a5-fe0f','1f5a5'], 'isCanonical': true},
	':desktop_computer:':
		{'unicode': ['1f5a5-fe0f','1f5a5'], 'isCanonical': false},
	':printer:':
		{'unicode': ['1f5a8-fe0f','1f5a8'], 'isCanonical': true},
	':trackball:':
		{'unicode': ['1f5b2-fe0f','1f5b2'], 'isCanonical': true},
	':frame_photo:':
		{'unicode': ['1f5bc-fe0f','1f5bc'], 'isCanonical': true},
	':frame_with_picture:':
		{'unicode': ['1f5bc-fe0f','1f5bc'], 'isCanonical': false},
	':dividers:':
		{'unicode': ['1f5c2-fe0f','1f5c2'], 'isCanonical': true},
	':card_index_dividers:':
		{'unicode': ['1f5c2-fe0f','1f5c2'], 'isCanonical': false},
	':card_box:':
		{'unicode': ['1f5c3-fe0f','1f5c3'], 'isCanonical': true},
	':card_file_box:':
		{'unicode': ['1f5c3-fe0f','1f5c3'], 'isCanonical': false},
	':file_cabinet:':
		{'unicode': ['1f5c4-fe0f','1f5c4'], 'isCanonical': true},
	':wastebasket:':
		{'unicode': ['1f5d1-fe0f','1f5d1'], 'isCanonical': true},
	':notepad_spiral:':
		{'unicode': ['1f5d2-fe0f','1f5d2'], 'isCanonical': true},
	':spiral_note_pad:':
		{'unicode': ['1f5d2-fe0f','1f5d2'], 'isCanonical': false},
	':calendar_spiral:':
		{'unicode': ['1f5d3-fe0f','1f5d3'], 'isCanonical': true},
	':spiral_calendar_pad:':
		{'unicode': ['1f5d3-fe0f','1f5d3'], 'isCanonical': false},
	':compression:':
		{'unicode': ['1f5dc-fe0f','1f5dc'], 'isCanonical': true},
	':key2:':
		{'unicode': ['1f5dd-fe0f','1f5dd'], 'isCanonical': true},
	':old_key:':
		{'unicode': ['1f5dd-fe0f','1f5dd'], 'isCanonical': false},
	':newspaper2:':
		{'unicode': ['1f5de-fe0f','1f5de'], 'isCanonical': true},
	':rolled_up_newspaper:':
		{'unicode': ['1f5de-fe0f','1f5de'], 'isCanonical': false},
	':dagger:':
		{'unicode': ['1f5e1-fe0f','1f5e1'], 'isCanonical': true},
	':dagger_knife:':
		{'unicode': ['1f5e1-fe0f','1f5e1'], 'isCanonical': false},
	':speaking_head:':
		{'unicode': ['1f5e3-fe0f','1f5e3'], 'isCanonical': true},
	':speaking_head_in_silhouette:':
		{'unicode': ['1f5e3-fe0f','1f5e3'], 'isCanonical': false},
	':speech_left:':
		{'unicode': ['1f5e8-fe0f','1f5e8'], 'isCanonical': true},
	':left_speech_bubble:':
		{'unicode': ['1f5e8-fe0f','1f5e8'], 'isCanonical': false},
	':anger_right:':
		{'unicode': ['1f5ef-fe0f','1f5ef'], 'isCanonical': true},
	':right_anger_bubble:':
		{'unicode': ['1f5ef-fe0f','1f5ef'], 'isCanonical': false},
	':ballot_box:':
		{'unicode': ['1f5f3-fe0f','1f5f3'], 'isCanonical': true},
	':ballot_box_with_ballot:':
		{'unicode': ['1f5f3-fe0f','1f5f3'], 'isCanonical': false},
	':map:':
		{'unicode': ['1f5fa-fe0f','1f5fa'], 'isCanonical': true},
	':world_map:':
		{'unicode': ['1f5fa-fe0f','1f5fa'], 'isCanonical': false},
	':tools:':
		{'unicode': ['1f6e0-fe0f','1f6e0'], 'isCanonical': true},
	':hammer_and_wrench:':
		{'unicode': ['1f6e0-fe0f','1f6e0'], 'isCanonical': false},
	':shield:':
		{'unicode': ['1f6e1-fe0f','1f6e1'], 'isCanonical': true},
	':oil:':
		{'unicode': ['1f6e2-fe0f','1f6e2'], 'isCanonical': true},
	':oil_drum:':
		{'unicode': ['1f6e2-fe0f','1f6e2'], 'isCanonical': false},
	':satellite_orbital:':
		{'unicode': ['1f6f0-fe0f','1f6f0'], 'isCanonical': true},
	':fork_knife_plate:':
		{'unicode': ['1f37d-fe0f','1f37d'], 'isCanonical': true},
	':fork_and_knife_with_plate:':
		{'unicode': ['1f37d-fe0f','1f37d'], 'isCanonical': false},
	':eye:':
		{'unicode': ['1f441-fe0f','1f441'], 'isCanonical': true},
	':levitate:':
		{'unicode': ['1f574-fe0f','1f574'], 'isCanonical': true},
	':man_in_business_suit_levitating:':
		{'unicode': ['1f574-fe0f','1f574'], 'isCanonical': false},
	':spy:':
		{'unicode': ['1f575-fe0f','1f575'], 'isCanonical': true},
	':sleuth_or_spy:':
		{'unicode': ['1f575-fe0f','1f575'], 'isCanonical': false},
	':hand_splayed:':
		{'unicode': ['1f590-fe0f','1f590'], 'isCanonical': true},
	':raised_hand_with_fingers_splayed:':
		{'unicode': ['1f590-fe0f','1f590'], 'isCanonical': false},
	':mountain_snow:':
		{'unicode': ['1f3d4-fe0f','1f3d4'], 'isCanonical': true},
	':snow_capped_mountain:':
		{'unicode': ['1f3d4-fe0f','1f3d4'], 'isCanonical': false},
	':camping:':
		{'unicode': ['1f3d5-fe0f','1f3d5'], 'isCanonical': true},
	':beach:':
		{'unicode': ['1f3d6-fe0f','1f3d6'], 'isCanonical': true},
	':beach_with_umbrella:':
		{'unicode': ['1f3d6-fe0f','1f3d6'], 'isCanonical': false},
	':construction_site:':
		{'unicode': ['1f3d7-fe0f','1f3d7'], 'isCanonical': true},
	':building_construction:':
		{'unicode': ['1f3d7-fe0f','1f3d7'], 'isCanonical': false},
	':homes:':
		{'unicode': ['1f3d8-fe0f','1f3d8'], 'isCanonical': true},
	':house_buildings:':
		{'unicode': ['1f3d8-fe0f','1f3d8'], 'isCanonical': false},
	':cityscape:':
		{'unicode': ['1f3d9-fe0f','1f3d9'], 'isCanonical': true},
	':house_abandoned:':
		{'unicode': ['1f3da-fe0f','1f3da'], 'isCanonical': true},
	':derelict_house_building:':
		{'unicode': ['1f3da-fe0f','1f3da'], 'isCanonical': false},
	':classical_building:':
		{'unicode': ['1f3db-fe0f','1f3db'], 'isCanonical': true},
	':desert:':
		{'unicode': ['1f3dc-fe0f','1f3dc'], 'isCanonical': true},
	':island:':
		{'unicode': ['1f3dd-fe0f','1f3dd'], 'isCanonical': true},
	':desert_island:':
		{'unicode': ['1f3dd-fe0f','1f3dd'], 'isCanonical': false},
	':park:':
		{'unicode': ['1f3de-fe0f','1f3de'], 'isCanonical': true},
	':national_park:':
		{'unicode': ['1f3de-fe0f','1f3de'], 'isCanonical': false},
	':stadium:':
		{'unicode': ['1f3df-fe0f','1f3df'], 'isCanonical': true},
	':couch:':
		{'unicode': ['1f6cb-fe0f','1f6cb'], 'isCanonical': true},
	':couch_and_lamp:':
		{'unicode': ['1f6cb-fe0f','1f6cb'], 'isCanonical': false},
	':shopping_bags:':
		{'unicode': ['1f6cd-fe0f','1f6cd'], 'isCanonical': true},
	':bellhop:':
		{'unicode': ['1f6ce-fe0f','1f6ce'], 'isCanonical': true},
	':bellhop_bell:':
		{'unicode': ['1f6ce-fe0f','1f6ce'], 'isCanonical': false},
	':bed:':
		{'unicode': ['1f6cf-fe0f','1f6cf'], 'isCanonical': true},
	':motorway:':
		{'unicode': ['1f6e3-fe0f','1f6e3'], 'isCanonical': true},
	':railway_track:':
		{'unicode': ['1f6e4-fe0f','1f6e4'], 'isCanonical': true},
	':railroad_track:':
		{'unicode': ['1f6e4-fe0f','1f6e4'], 'isCanonical': false},
	':motorboat:':
		{'unicode': ['1f6e5-fe0f','1f6e5'], 'isCanonical': true},
	':airplane_small:':
		{'unicode': ['1f6e9-fe0f','1f6e9'], 'isCanonical': true},
	':small_airplane:':
		{'unicode': ['1f6e9-fe0f','1f6e9'], 'isCanonical': false},
	':cruise_ship:':
		{'unicode': ['1f6f3-fe0f','1f6f3'], 'isCanonical': true},
	':passenger_ship:':
		{'unicode': ['1f6f3-fe0f','1f6f3'], 'isCanonical': false},
	':white_sun_small_cloud:':
		{'unicode': ['1f324-fe0f','1f324'], 'isCanonical': true},
	':white_sun_with_small_cloud:':
		{'unicode': ['1f324-fe0f','1f324'], 'isCanonical': false},
	':white_sun_cloud:':
		{'unicode': ['1f325-fe0f','1f325'], 'isCanonical': true},
	':white_sun_behind_cloud:':
		{'unicode': ['1f325-fe0f','1f325'], 'isCanonical': false},
	':white_sun_rain_cloud:':
		{'unicode': ['1f326-fe0f','1f326'], 'isCanonical': true},
	':white_sun_behind_cloud_with_rain:':
		{'unicode': ['1f326-fe0f','1f326'], 'isCanonical': false},
	':mouse_three_button:':
		{'unicode': ['1f5b1-fe0f','1f5b1'], 'isCanonical': true},
	':three_button_mouse:':
		{'unicode': ['1f5b1-fe0f','1f5b1'], 'isCanonical': false},
	':point_up_tone1:':
		{'unicode': ['261d-1f3fb'], 'isCanonical': true},
	':point_up_tone2:':
		{'unicode': ['261d-1f3fc'], 'isCanonical': true},
	':point_up_tone3:':
		{'unicode': ['261d-1f3fd'], 'isCanonical': true},
	':point_up_tone4:':
		{'unicode': ['261d-1f3fe'], 'isCanonical': true},
	':point_up_tone5:':
		{'unicode': ['261d-1f3ff'], 'isCanonical': true},
	':v_tone1:':
		{'unicode': ['270c-1f3fb'], 'isCanonical': true},
	':v_tone2:':
		{'unicode': ['270c-1f3fc'], 'isCanonical': true},
	':v_tone3:':
		{'unicode': ['270c-1f3fd'], 'isCanonical': true},
	':v_tone4:':
		{'unicode': ['270c-1f3fe'], 'isCanonical': true},
	':v_tone5:':
		{'unicode': ['270c-1f3ff'], 'isCanonical': true},
	':fist_tone1:':
		{'unicode': ['270a-1f3fb'], 'isCanonical': true},
	':fist_tone2:':
		{'unicode': ['270a-1f3fc'], 'isCanonical': true},
	':fist_tone3:':
		{'unicode': ['270a-1f3fd'], 'isCanonical': true},
	':fist_tone4:':
		{'unicode': ['270a-1f3fe'], 'isCanonical': true},
	':fist_tone5:':
		{'unicode': ['270a-1f3ff'], 'isCanonical': true},
	':raised_hand_tone1:':
		{'unicode': ['270b-1f3fb'], 'isCanonical': true},
	':raised_hand_tone2:':
		{'unicode': ['270b-1f3fc'], 'isCanonical': true},
	':raised_hand_tone3:':
		{'unicode': ['270b-1f3fd'], 'isCanonical': true},
	':raised_hand_tone4:':
		{'unicode': ['270b-1f3fe'], 'isCanonical': true},
	':raised_hand_tone5:':
		{'unicode': ['270b-1f3ff'], 'isCanonical': true},
	':writing_hand_tone1:':
		{'unicode': ['270d-1f3fb'], 'isCanonical': true},
	':writing_hand_tone2:':
		{'unicode': ['270d-1f3fc'], 'isCanonical': true},
	':writing_hand_tone3:':
		{'unicode': ['270d-1f3fd'], 'isCanonical': true},
	':writing_hand_tone4:':
		{'unicode': ['270d-1f3fe'], 'isCanonical': true},
	':writing_hand_tone5:':
		{'unicode': ['270d-1f3ff'], 'isCanonical': true},
	':basketball_player_tone1:':
		{'unicode': ['26f9-1f3fb'], 'isCanonical': true},
	':person_with_ball_tone1:':
		{'unicode': ['26f9-1f3fb'], 'isCanonical': false},
	':basketball_player_tone2:':
		{'unicode': ['26f9-1f3fc'], 'isCanonical': true},
	':person_with_ball_tone2:':
		{'unicode': ['26f9-1f3fc'], 'isCanonical': false},
	':basketball_player_tone3:':
		{'unicode': ['26f9-1f3fd'], 'isCanonical': true},
	':person_with_ball_tone3:':
		{'unicode': ['26f9-1f3fd'], 'isCanonical': false},
	':basketball_player_tone4:':
		{'unicode': ['26f9-1f3fe'], 'isCanonical': true},
	':person_with_ball_tone4:':
		{'unicode': ['26f9-1f3fe'], 'isCanonical': false},
	':basketball_player_tone5:':
		{'unicode': ['26f9-1f3ff'], 'isCanonical': true},
	':person_with_ball_tone5:':
		{'unicode': ['26f9-1f3ff'], 'isCanonical': false},
	':copyright:':
		{'unicode': ['00a9-fe0f','00a9'], 'isCanonical': true},
	':registered:':
		{'unicode': ['00ae-fe0f','00ae'], 'isCanonical': true},
	':bangbang:':
		{'unicode': ['203c-fe0f','203c'], 'isCanonical': true},
	':interrobang:':
		{'unicode': ['2049-fe0f','2049'], 'isCanonical': true},
	':tm:':
		{'unicode': ['2122-fe0f','2122'], 'isCanonical': true},
	':information_source:':
		{'unicode': ['2139-fe0f','2139'], 'isCanonical': true},
	':left_right_arrow:':
		{'unicode': ['2194-fe0f','2194'], 'isCanonical': true},
	':arrow_up_down:':
		{'unicode': ['2195-fe0f','2195'], 'isCanonical': true},
	':arrow_upper_left:':
		{'unicode': ['2196-fe0f','2196'], 'isCanonical': true},
	':arrow_upper_right:':
		{'unicode': ['2197-fe0f','2197'], 'isCanonical': true},
	':arrow_lower_right:':
		{'unicode': ['2198-fe0f','2198'], 'isCanonical': true},
	':arrow_lower_left:':
		{'unicode': ['2199-fe0f','2199'], 'isCanonical': true},
	':leftwards_arrow_with_hook:':
		{'unicode': ['21a9-fe0f','21a9'], 'isCanonical': true},
	':arrow_right_hook:':
		{'unicode': ['21aa-fe0f','21aa'], 'isCanonical': true},
	':watch:':
		{'unicode': ['231a-fe0f','231a'], 'isCanonical': true},
	':hourglass:':
		{'unicode': ['231b-fe0f','231b'], 'isCanonical': true},
	':m:':
		{'unicode': ['24c2-fe0f','24c2'], 'isCanonical': true},
	':black_small_square:':
		{'unicode': ['25aa-fe0f','25aa'], 'isCanonical': true},
	':white_small_square:':
		{'unicode': ['25ab-fe0f','25ab'], 'isCanonical': true},
	':arrow_forward:':
		{'unicode': ['25b6-fe0f','25b6'], 'isCanonical': true},
	':arrow_backward:':
		{'unicode': ['25c0-fe0f','25c0'], 'isCanonical': true},
	':white_medium_square:':
		{'unicode': ['25fb-fe0f','25fb'], 'isCanonical': true},
	':black_medium_square:':
		{'unicode': ['25fc-fe0f','25fc'], 'isCanonical': true},
	':white_medium_small_square:':
		{'unicode': ['25fd-fe0f','25fd'], 'isCanonical': true},
	':black_medium_small_square:':
		{'unicode': ['25fe-fe0f','25fe'], 'isCanonical': true},
	':sunny:':
		{'unicode': ['2600-fe0f','2600'], 'isCanonical': true},
	':cloud:':
		{'unicode': ['2601-fe0f','2601'], 'isCanonical': true},
	':telephone:':
		{'unicode': ['260e-fe0f','260e'], 'isCanonical': true},
	':ballot_box_with_check:':
		{'unicode': ['2611-fe0f','2611'], 'isCanonical': true},
	':umbrella:':
		{'unicode': ['2614-fe0f','2614'], 'isCanonical': true},
	':coffee:':
		{'unicode': ['2615-fe0f','2615'], 'isCanonical': true},
	':point_up:':
		{'unicode': ['261d-fe0f','261d'], 'isCanonical': true},
	':relaxed:':
		{'unicode': ['263a-fe0f','263a'], 'isCanonical': true},
	':aries:':
		{'unicode': ['2648-fe0f','2648'], 'isCanonical': true},
	':taurus:':
		{'unicode': ['2649-fe0f','2649'], 'isCanonical': true},
	':gemini:':
		{'unicode': ['264a-fe0f','264a'], 'isCanonical': true},
	':cancer:':
		{'unicode': ['264b-fe0f','264b'], 'isCanonical': true},
	':leo:':
		{'unicode': ['264c-fe0f','264c'], 'isCanonical': true},
	':virgo:':
		{'unicode': ['264d-fe0f','264d'], 'isCanonical': true},
	':libra:':
		{'unicode': ['264e-fe0f','264e'], 'isCanonical': true},
	':scorpius:':
		{'unicode': ['264f-fe0f','264f'], 'isCanonical': true},
	':sagittarius:':
		{'unicode': ['2650-fe0f','2650'], 'isCanonical': true},
	':capricorn:':
		{'unicode': ['2651-fe0f','2651'], 'isCanonical': true},
	':aquarius:':
		{'unicode': ['2652-fe0f','2652'], 'isCanonical': true},
	':pisces:':
		{'unicode': ['2653-fe0f','2653'], 'isCanonical': true},
	':spades:':
		{'unicode': ['2660-fe0f','2660'], 'isCanonical': true},
	':clubs:':
		{'unicode': ['2663-fe0f','2663'], 'isCanonical': true},
	':hearts:':
		{'unicode': ['2665-fe0f','2665'], 'isCanonical': true},
	':diamonds:':
		{'unicode': ['2666-fe0f','2666'], 'isCanonical': true},
	':hotsprings:':
		{'unicode': ['2668-fe0f','2668'], 'isCanonical': true},
	':recycle:':
		{'unicode': ['267b-fe0f','267b'], 'isCanonical': true},
	':wheelchair:':
		{'unicode': ['267f-fe0f','267f'], 'isCanonical': true},
	':anchor:':
		{'unicode': ['2693-fe0f','2693'], 'isCanonical': true},
	':warning:':
		{'unicode': ['26a0-fe0f','26a0'], 'isCanonical': true},
	':zap:':
		{'unicode': ['26a1-fe0f','26a1'], 'isCanonical': true},
	':white_circle:':
		{'unicode': ['26aa-fe0f','26aa'], 'isCanonical': true},
	':black_circle:':
		{'unicode': ['26ab-fe0f','26ab'], 'isCanonical': true},
	':soccer:':
		{'unicode': ['26bd-fe0f','26bd'], 'isCanonical': true},
	':baseball:':
		{'unicode': ['26be-fe0f','26be'], 'isCanonical': true},
	':snowman:':
		{'unicode': ['26c4-fe0f','26c4'], 'isCanonical': true},
	':partly_sunny:':
		{'unicode': ['26c5-fe0f','26c5'], 'isCanonical': true},
	':no_entry:':
		{'unicode': ['26d4-fe0f','26d4'], 'isCanonical': true},
	':church:':
		{'unicode': ['26ea-fe0f','26ea'], 'isCanonical': true},
	':fountain:':
		{'unicode': ['26f2-fe0f','26f2'], 'isCanonical': true},
	':golf:':
		{'unicode': ['26f3-fe0f','26f3'], 'isCanonical': true},
	':sailboat:':
		{'unicode': ['26f5-fe0f','26f5'], 'isCanonical': true},
	':tent:':
		{'unicode': ['26fa-fe0f','26fa'], 'isCanonical': true},
	':fuelpump:':
		{'unicode': ['26fd-fe0f','26fd'], 'isCanonical': true},
	':scissors:':
		{'unicode': ['2702-fe0f','2702'], 'isCanonical': true},
	':airplane:':
		{'unicode': ['2708-fe0f','2708'], 'isCanonical': true},
	':envelope:':
		{'unicode': ['2709-fe0f','2709'], 'isCanonical': true},
	':v:':
		{'unicode': ['270c-fe0f','270c'], 'isCanonical': true},
	':pencil2:':
		{'unicode': ['270f-fe0f','270f'], 'isCanonical': true},
	':black_nib:':
		{'unicode': ['2712-fe0f','2712'], 'isCanonical': true},
	':heavy_check_mark:':
		{'unicode': ['2714-fe0f','2714'], 'isCanonical': true},
	':heavy_multiplication_x:':
		{'unicode': ['2716-fe0f','2716'], 'isCanonical': true},
	':eight_spoked_asterisk:':
		{'unicode': ['2733-fe0f','2733'], 'isCanonical': true},
	':eight_pointed_black_star:':
		{'unicode': ['2734-fe0f','2734'], 'isCanonical': true},
	':snowflake:':
		{'unicode': ['2744-fe0f','2744'], 'isCanonical': true},
	':sparkle:':
		{'unicode': ['2747-fe0f','2747'], 'isCanonical': true},
	':exclamation:':
		{'unicode': ['2757-fe0f','2757'], 'isCanonical': true},
	':heart:':
		{'unicode': ['2764-fe0f','2764'], 'isCanonical': true},
	':arrow_right:':
		{'unicode': ['27a1-fe0f','27a1'], 'isCanonical': true},
	':arrow_heading_up:':
		{'unicode': ['2934-fe0f','2934'], 'isCanonical': true},
	':arrow_heading_down:':
		{'unicode': ['2935-fe0f','2935'], 'isCanonical': true},
	':arrow_left:':
		{'unicode': ['2b05-fe0f','2b05'], 'isCanonical': true},
	':arrow_up:':
		{'unicode': ['2b06-fe0f','2b06'], 'isCanonical': true},
	':arrow_down:':
		{'unicode': ['2b07-fe0f','2b07'], 'isCanonical': true},
	':black_large_square:':
		{'unicode': ['2b1b-fe0f','2b1b'], 'isCanonical': true},
	':white_large_square:':
		{'unicode': ['2b1c-fe0f','2b1c'], 'isCanonical': true},
	':star:':
		{'unicode': ['2b50-fe0f','2b50'], 'isCanonical': true},
	':o:':
		{'unicode': ['2b55-fe0f','2b55'], 'isCanonical': true},
	':wavy_dash:':
		{'unicode': ['3030-fe0f','3030'], 'isCanonical': true},
	':part_alternation_mark:':
		{'unicode': ['303d-fe0f','303d'], 'isCanonical': true},
	':congratulations:':
		{'unicode': ['3297-fe0f','3297'], 'isCanonical': true},
	':secret:':
		{'unicode': ['3299-fe0f','3299'], 'isCanonical': true},
	':cross:':
		{'unicode': ['271d-fe0f','271d'], 'isCanonical': true},
	':latin_cross:':
		{'unicode': ['271d-fe0f','271d'], 'isCanonical': false},
	':keyboard:':
		{'unicode': ['2328-fe0f','2328'], 'isCanonical': true},
	':writing_hand:':
		{'unicode': ['270d-fe0f','270d'], 'isCanonical': true},
	':eject:':
		{'unicode': ['23cf-fe0f','23cf'], 'isCanonical': true},
	':eject_symbol:':
		{'unicode': ['23cf-fe0f','23cf'], 'isCanonical': false},
	':track_next:':
		{'unicode': ['23ed-fe0f','23ed'], 'isCanonical': true},
	':next_track:':
		{'unicode': ['23ed-fe0f','23ed'], 'isCanonical': false},
	':track_previous:':
		{'unicode': ['23ee-fe0f','23ee'], 'isCanonical': true},
	':previous_track:':
		{'unicode': ['23ee-fe0f','23ee'], 'isCanonical': false},
	':play_pause:':
		{'unicode': ['23ef-fe0f','23ef'], 'isCanonical': true},
	':stopwatch:':
		{'unicode': ['23f1-fe0f','23f1'], 'isCanonical': true},
	':timer:':
		{'unicode': ['23f2-fe0f','23f2'], 'isCanonical': true},
	':timer_clock:':
		{'unicode': ['23f2-fe0f','23f2'], 'isCanonical': false},
	':pause_button:':
		{'unicode': ['23f8-fe0f','23f8'], 'isCanonical': true},
	':double_vertical_bar:':
		{'unicode': ['23f8-fe0f','23f8'], 'isCanonical': false},
	':stop_button:':
		{'unicode': ['23f9-fe0f','23f9'], 'isCanonical': true},
	':record_button:':
		{'unicode': ['23fa-fe0f','23fa'], 'isCanonical': true},
	':umbrella2:':
		{'unicode': ['2602-fe0f','2602'], 'isCanonical': true},
	':snowman2:':
		{'unicode': ['2603-fe0f','2603'], 'isCanonical': true},
	':comet:':
		{'unicode': ['2604-fe0f','2604'], 'isCanonical': true},
	':shamrock:':
		{'unicode': ['2618-fe0f','2618'], 'isCanonical': true},
	':skull_crossbones:':
		{'unicode': ['2620-fe0f','2620'], 'isCanonical': true},
	':skull_and_crossbones:':
		{'unicode': ['2620-fe0f','2620'], 'isCanonical': false},
	':radioactive:':
		{'unicode': ['2622-fe0f','2622'], 'isCanonical': true},
	':radioactive_sign:':
		{'unicode': ['2622-fe0f','2622'], 'isCanonical': false},
	':biohazard:':
		{'unicode': ['2623-fe0f','2623'], 'isCanonical': true},
	':biohazard_sign:':
		{'unicode': ['2623-fe0f','2623'], 'isCanonical': false},
	':orthodox_cross:':
		{'unicode': ['2626-fe0f','2626'], 'isCanonical': true},
	':star_and_crescent:':
		{'unicode': ['262a-fe0f','262a'], 'isCanonical': true},
	':peace:':
		{'unicode': ['262e-fe0f','262e'], 'isCanonical': true},
	':peace_symbol:':
		{'unicode': ['262e-fe0f','262e'], 'isCanonical': false},
	':yin_yang:':
		{'unicode': ['262f-fe0f','262f'], 'isCanonical': true},
	':wheel_of_dharma:':
		{'unicode': ['2638-fe0f','2638'], 'isCanonical': true},
	':frowning2:':
		{'unicode': ['2639-fe0f','2639'], 'isCanonical': true},
	':white_frowning_face:':
		{'unicode': ['2639-fe0f','2639'], 'isCanonical': false},
	':hammer_pick:':
		{'unicode': ['2692-fe0f','2692'], 'isCanonical': true},
	':hammer_and_pick:':
		{'unicode': ['2692-fe0f','2692'], 'isCanonical': false},
	':crossed_swords:':
		{'unicode': ['2694-fe0f','2694'], 'isCanonical': true},
	':scales:':
		{'unicode': ['2696-fe0f','2696'], 'isCanonical': true},
	':alembic:':
		{'unicode': ['2697-fe0f','2697'], 'isCanonical': true},
	':gear:':
		{'unicode': ['2699-fe0f','2699'], 'isCanonical': true},
	':atom:':
		{'unicode': ['269b-fe0f','269b'], 'isCanonical': true},
	':atom_symbol:':
		{'unicode': ['269b-fe0f','269b'], 'isCanonical': false},
	':fleur-de-lis:':
		{'unicode': ['269c-fe0f','269c'], 'isCanonical': true},
	':coffin:':
		{'unicode': ['26b0-fe0f','26b0'], 'isCanonical': true},
	':urn:':
		{'unicode': ['26b1-fe0f','26b1'], 'isCanonical': true},
	':funeral_urn:':
		{'unicode': ['26b1-fe0f','26b1'], 'isCanonical': false},
	':thunder_cloud_rain:':
		{'unicode': ['26c8-fe0f','26c8'], 'isCanonical': true},
	':thunder_cloud_and_rain:':
		{'unicode': ['26c8-fe0f','26c8'], 'isCanonical': false},
	':pick:':
		{'unicode': ['26cf-fe0f','26cf'], 'isCanonical': true},
	':helmet_with_cross:':
		{'unicode': ['26d1-fe0f','26d1'], 'isCanonical': true},
	':helmet_with_white_cross:':
		{'unicode': ['26d1-fe0f','26d1'], 'isCanonical': false},
	':chains:':
		{'unicode': ['26d3-fe0f','26d3'], 'isCanonical': true},
	':shinto_shrine:':
		{'unicode': ['26e9-fe0f','26e9'], 'isCanonical': true},
	':mountain:':
		{'unicode': ['26f0-fe0f','26f0'], 'isCanonical': true},
	':beach_umbrella:':
		{'unicode': ['26f1-fe0f','26f1'], 'isCanonical': true},
	':umbrella_on_ground:':
		{'unicode': ['26f1-fe0f','26f1'], 'isCanonical': false},
	':ferry:':
		{'unicode': ['26f4-fe0f','26f4'], 'isCanonical': true},
	':skier:':
		{'unicode': ['26f7-fe0f','26f7'], 'isCanonical': true},
	':ice_skate:':
		{'unicode': ['26f8-fe0f','26f8'], 'isCanonical': true},
	':basketball_player:':
		{'unicode': ['26f9-fe0f','26f9'], 'isCanonical': true},
	':person_with_ball:':
		{'unicode': ['26f9-fe0f','26f9'], 'isCanonical': false},
	':star_of_david:':
		{'unicode': ['2721-fe0f','2721'], 'isCanonical': true},
	':heart_exclamation:':
		{'unicode': ['2763-fe0f','2763'], 'isCanonical': true},
	':heavy_heart_exclamation_mark_ornament:':
		{'unicode': ['2763-fe0f','2763'], 'isCanonical': false},
	':third_place:':
		{'unicode': ['1f949'], 'isCanonical': true},
	':third_place_medal:':
		{'unicode': ['1f949'], 'isCanonical': false},
	':second_place:':
		{'unicode': ['1f948'], 'isCanonical': true},
	':second_place_medal:':
		{'unicode': ['1f948'], 'isCanonical': false},
	':first_place:':
		{'unicode': ['1f947'], 'isCanonical': true},
	':first_place_medal:':
		{'unicode': ['1f947'], 'isCanonical': false},
	':fencer:':
		{'unicode': ['1f93a'], 'isCanonical': true},
	':fencing:':
		{'unicode': ['1f93a'], 'isCanonical': false},
	':goal:':
		{'unicode': ['1f945'], 'isCanonical': true},
	':goal_net:':
		{'unicode': ['1f945'], 'isCanonical': false},
	':handball:':
		{'unicode': ['1f93e'], 'isCanonical': true},
	':regional_indicator_z:':
		{'unicode': ['1f1ff'], 'isCanonical': true},
	':water_polo:':
		{'unicode': ['1f93d'], 'isCanonical': true},
	':martial_arts_uniform:':
		{'unicode': ['1f94b'], 'isCanonical': true},
	':karate_uniform:':
		{'unicode': ['1f94b'], 'isCanonical': false},
	':boxing_glove:':
		{'unicode': ['1f94a'], 'isCanonical': true},
	':boxing_gloves:':
		{'unicode': ['1f94a'], 'isCanonical': false},
	':wrestlers:':
		{'unicode': ['1f93c'], 'isCanonical': true},
	':wrestling:':
		{'unicode': ['1f93c'], 'isCanonical': false},
	':juggling:':
		{'unicode': ['1f939'], 'isCanonical': true},
	':juggler:':
		{'unicode': ['1f939'], 'isCanonical': false},
	':cartwheel:':
		{'unicode': ['1f938'], 'isCanonical': true},
	':person_doing_cartwheel:':
		{'unicode': ['1f938'], 'isCanonical': false},
	':canoe:':
		{'unicode': ['1f6f6'], 'isCanonical': true},
	':kayak:':
		{'unicode': ['1f6f6'], 'isCanonical': false},
	':motor_scooter:':
		{'unicode': ['1f6f5'], 'isCanonical': true},
	':motorbike:':
		{'unicode': ['1f6f5'], 'isCanonical': false},
	':scooter:':
		{'unicode': ['1f6f4'], 'isCanonical': true},
	':shopping_cart:':
		{'unicode': ['1f6d2'], 'isCanonical': true},
	':shopping_trolley:':
		{'unicode': ['1f6d2'], 'isCanonical': false},
	':black_joker:':
		{'unicode': ['1f0cf'], 'isCanonical': true},
	':a:':
		{'unicode': ['1f170'], 'isCanonical': true},
	':b:':
		{'unicode': ['1f171'], 'isCanonical': true},
	':o2:':
		{'unicode': ['1f17e'], 'isCanonical': true},
	':octagonal_sign:':
		{'unicode': ['1f6d1'], 'isCanonical': true},
	':stop_sign:':
		{'unicode': ['1f6d1'], 'isCanonical': false},
	':ab:':
		{'unicode': ['1f18e'], 'isCanonical': true},
	':cl:':
		{'unicode': ['1f191'], 'isCanonical': true},
	':regional_indicator_y:':
		{'unicode': ['1f1fe'], 'isCanonical': true},
	':cool:':
		{'unicode': ['1f192'], 'isCanonical': true},
	':free:':
		{'unicode': ['1f193'], 'isCanonical': true},
	':id:':
		{'unicode': ['1f194'], 'isCanonical': true},
	':new:':
		{'unicode': ['1f195'], 'isCanonical': true},
	':ng:':
		{'unicode': ['1f196'], 'isCanonical': true},
	':ok:':
		{'unicode': ['1f197'], 'isCanonical': true},
	':sos:':
		{'unicode': ['1f198'], 'isCanonical': true},
	':spoon:':
		{'unicode': ['1f944'], 'isCanonical': true},
	':up:':
		{'unicode': ['1f199'], 'isCanonical': true},
	':vs:':
		{'unicode': ['1f19a'], 'isCanonical': true},
	':champagne_glass:':
		{'unicode': ['1f942'], 'isCanonical': true},
	':clinking_glass:':
		{'unicode': ['1f942'], 'isCanonical': false},
	':tumbler_glass:':
		{'unicode': ['1f943'], 'isCanonical': true},
	':whisky:':
		{'unicode': ['1f943'], 'isCanonical': false},
	':koko:':
		{'unicode': ['1f201'], 'isCanonical': true},
	':stuffed_flatbread:':
		{'unicode': ['1f959'], 'isCanonical': true},
	':stuffed_pita:':
		{'unicode': ['1f959'], 'isCanonical': false},
	':u7981:':
		{'unicode': ['1f232'], 'isCanonical': true},
	':u7a7a:':
		{'unicode': ['1f233'], 'isCanonical': true},
	':u5408:':
		{'unicode': ['1f234'], 'isCanonical': true},
	':u6e80:':
		{'unicode': ['1f235'], 'isCanonical': true},
	':u6709:':
		{'unicode': ['1f236'], 'isCanonical': true},
	':shallow_pan_of_food:':
		{'unicode': ['1f958'], 'isCanonical': true},
	':paella:':
		{'unicode': ['1f958'], 'isCanonical': false},
	':u7533:':
		{'unicode': ['1f238'], 'isCanonical': true},
	':u5272:':
		{'unicode': ['1f239'], 'isCanonical': true},
	':salad:':
		{'unicode': ['1f957'], 'isCanonical': true},
	':green_salad:':
		{'unicode': ['1f957'], 'isCanonical': false},
	':u55b6:':
		{'unicode': ['1f23a'], 'isCanonical': true},
	':ideograph_advantage:':
		{'unicode': ['1f250'], 'isCanonical': true},
	':accept:':
		{'unicode': ['1f251'], 'isCanonical': true},
	':cyclone:':
		{'unicode': ['1f300'], 'isCanonical': true},
	':french_bread:':
		{'unicode': ['1f956'], 'isCanonical': true},
	':baguette_bread:':
		{'unicode': ['1f956'], 'isCanonical': false},
	':foggy:':
		{'unicode': ['1f301'], 'isCanonical': true},
	':closed_umbrella:':
		{'unicode': ['1f302'], 'isCanonical': true},
	':night_with_stars:':
		{'unicode': ['1f303'], 'isCanonical': true},
	':sunrise_over_mountains:':
		{'unicode': ['1f304'], 'isCanonical': true},
	':sunrise:':
		{'unicode': ['1f305'], 'isCanonical': true},
	':city_dusk:':
		{'unicode': ['1f306'], 'isCanonical': true},
	':carrot:':
		{'unicode': ['1f955'], 'isCanonical': true},
	':city_sunset:':
		{'unicode': ['1f307'], 'isCanonical': true},
	':city_sunrise:':
		{'unicode': ['1f307'], 'isCanonical': false},
	':rainbow:':
		{'unicode': ['1f308'], 'isCanonical': true},
	':potato:':
		{'unicode': ['1f954'], 'isCanonical': true},
	':bridge_at_night:':
		{'unicode': ['1f309'], 'isCanonical': true},
	':ocean:':
		{'unicode': ['1f30a'], 'isCanonical': true},
	':volcano:':
		{'unicode': ['1f30b'], 'isCanonical': true},
	':milky_way:':
		{'unicode': ['1f30c'], 'isCanonical': true},
	':earth_asia:':
		{'unicode': ['1f30f'], 'isCanonical': true},
	':new_moon:':
		{'unicode': ['1f311'], 'isCanonical': true},
	':bacon:':
		{'unicode': ['1f953'], 'isCanonical': true},
	':first_quarter_moon:':
		{'unicode': ['1f313'], 'isCanonical': true},
	':waxing_gibbous_moon:':
		{'unicode': ['1f314'], 'isCanonical': true},
	':full_moon:':
		{'unicode': ['1f315'], 'isCanonical': true},
	':crescent_moon:':
		{'unicode': ['1f319'], 'isCanonical': true},
	':first_quarter_moon_with_face:':
		{'unicode': ['1f31b'], 'isCanonical': true},
	':star2:':
		{'unicode': ['1f31f'], 'isCanonical': true},
	':cucumber:':
		{'unicode': ['1f952'], 'isCanonical': true},
	':stars:':
		{'unicode': ['1f320'], 'isCanonical': true},
	':chestnut:':
		{'unicode': ['1f330'], 'isCanonical': true},
	':avocado:':
		{'unicode': ['1f951'], 'isCanonical': true},
	':seedling:':
		{'unicode': ['1f331'], 'isCanonical': true},
	':palm_tree:':
		{'unicode': ['1f334'], 'isCanonical': true},
	':cactus:':
		{'unicode': ['1f335'], 'isCanonical': true},
	':tulip:':
		{'unicode': ['1f337'], 'isCanonical': true},
	':cherry_blossom:':
		{'unicode': ['1f338'], 'isCanonical': true},
	':rose:':
		{'unicode': ['1f339'], 'isCanonical': true},
	':hibiscus:':
		{'unicode': ['1f33a'], 'isCanonical': true},
	':sunflower:':
		{'unicode': ['1f33b'], 'isCanonical': true},
	':blossom:':
		{'unicode': ['1f33c'], 'isCanonical': true},
	':corn:':
		{'unicode': ['1f33d'], 'isCanonical': true},
	':croissant:':
		{'unicode': ['1f950'], 'isCanonical': true},
	':ear_of_rice:':
		{'unicode': ['1f33e'], 'isCanonical': true},
	':herb:':
		{'unicode': ['1f33f'], 'isCanonical': true},
	':four_leaf_clover:':
		{'unicode': ['1f340'], 'isCanonical': true},
	':maple_leaf:':
		{'unicode': ['1f341'], 'isCanonical': true},
	':fallen_leaf:':
		{'unicode': ['1f342'], 'isCanonical': true},
	':leaves:':
		{'unicode': ['1f343'], 'isCanonical': true},
	':mushroom:':
		{'unicode': ['1f344'], 'isCanonical': true},
	':tomato:':
		{'unicode': ['1f345'], 'isCanonical': true},
	':eggplant:':
		{'unicode': ['1f346'], 'isCanonical': true},
	':grapes:':
		{'unicode': ['1f347'], 'isCanonical': true},
	':melon:':
		{'unicode': ['1f348'], 'isCanonical': true},
	':watermelon:':
		{'unicode': ['1f349'], 'isCanonical': true},
	':tangerine:':
		{'unicode': ['1f34a'], 'isCanonical': true},
	':wilted_rose:':
		{'unicode': ['1f940'], 'isCanonical': true},
	':wilted_flower:':
		{'unicode': ['1f940'], 'isCanonical': false},
	':banana:':
		{'unicode': ['1f34c'], 'isCanonical': true},
	':pineapple:':
		{'unicode': ['1f34d'], 'isCanonical': true},
	':apple:':
		{'unicode': ['1f34e'], 'isCanonical': true},
	':green_apple:':
		{'unicode': ['1f34f'], 'isCanonical': true},
	':peach:':
		{'unicode': ['1f351'], 'isCanonical': true},
	':cherries:':
		{'unicode': ['1f352'], 'isCanonical': true},
	':strawberry:':
		{'unicode': ['1f353'], 'isCanonical': true},
	':rhino:':
		{'unicode': ['1f98f'], 'isCanonical': true},
	':rhinoceros:':
		{'unicode': ['1f98f'], 'isCanonical': false},
	':hamburger:':
		{'unicode': ['1f354'], 'isCanonical': true},
	':pizza:':
		{'unicode': ['1f355'], 'isCanonical': true},
	':meat_on_bone:':
		{'unicode': ['1f356'], 'isCanonical': true},
	':lizard:':
		{'unicode': ['1f98e'], 'isCanonical': true},
	':poultry_leg:':
		{'unicode': ['1f357'], 'isCanonical': true},
	':rice_cracker:':
		{'unicode': ['1f358'], 'isCanonical': true},
	':rice_ball:':
		{'unicode': ['1f359'], 'isCanonical': true},
	':gorilla:':
		{'unicode': ['1f98d'], 'isCanonical': true},
	':rice:':
		{'unicode': ['1f35a'], 'isCanonical': true},
	':curry:':
		{'unicode': ['1f35b'], 'isCanonical': true},
	':deer:':
		{'unicode': ['1f98c'], 'isCanonical': true},
	':ramen:':
		{'unicode': ['1f35c'], 'isCanonical': true},
	':spaghetti:':
		{'unicode': ['1f35d'], 'isCanonical': true},
	':bread:':
		{'unicode': ['1f35e'], 'isCanonical': true},
	':fries:':
		{'unicode': ['1f35f'], 'isCanonical': true},
	':butterfly:':
		{'unicode': ['1f98b'], 'isCanonical': true},
	':sweet_potato:':
		{'unicode': ['1f360'], 'isCanonical': true},
	':dango:':
		{'unicode': ['1f361'], 'isCanonical': true},
	':fox:':
		{'unicode': ['1f98a'], 'isCanonical': true},
	':fox_face:':
		{'unicode': ['1f98a'], 'isCanonical': false},
	':oden:':
		{'unicode': ['1f362'], 'isCanonical': true},
	':sushi:':
		{'unicode': ['1f363'], 'isCanonical': true},
	':owl:':
		{'unicode': ['1f989'], 'isCanonical': true},
	':fried_shrimp:':
		{'unicode': ['1f364'], 'isCanonical': true},
	':fish_cake:':
		{'unicode': ['1f365'], 'isCanonical': true},
	':shark:':
		{'unicode': ['1f988'], 'isCanonical': true},
	':icecream:':
		{'unicode': ['1f366'], 'isCanonical': true},
	':bat:':
		{'unicode': ['1f987'], 'isCanonical': true},
	':shaved_ice:':
		{'unicode': ['1f367'], 'isCanonical': true},
	':regional_indicator_x:':
		{'unicode': ['1f1fd'], 'isCanonical': true},
	':ice_cream:':
		{'unicode': ['1f368'], 'isCanonical': true},
	':duck:':
		{'unicode': ['1f986'], 'isCanonical': true},
	':doughnut:':
		{'unicode': ['1f369'], 'isCanonical': true},
	':eagle:':
		{'unicode': ['1f985'], 'isCanonical': true},
	':cookie:':
		{'unicode': ['1f36a'], 'isCanonical': true},
	':black_heart:':
		{'unicode': ['1f5a4'], 'isCanonical': true},
	':chocolate_bar:':
		{'unicode': ['1f36b'], 'isCanonical': true},
	':candy:':
		{'unicode': ['1f36c'], 'isCanonical': true},
	':lollipop:':
		{'unicode': ['1f36d'], 'isCanonical': true},
	':custard:':
		{'unicode': ['1f36e'], 'isCanonical': true},
	':pudding:':
		{'unicode': ['1f36e'], 'isCanonical': false},
	':flan:':
		{'unicode': ['1f36e'], 'isCanonical': false},
	':honey_pot:':
		{'unicode': ['1f36f'], 'isCanonical': true},
	':fingers_crossed:':
		{'unicode': ['1f91e'], 'isCanonical': true},
	':hand_with_index_and_middle_finger_crossed:':
		{'unicode': ['1f91e'], 'isCanonical': false},
	':cake:':
		{'unicode': ['1f370'], 'isCanonical': true},
	':bento:':
		{'unicode': ['1f371'], 'isCanonical': true},
	':stew:':
		{'unicode': ['1f372'], 'isCanonical': true},
	':handshake:':
		{'unicode': ['1f91d'], 'isCanonical': true},
	':shaking_hands:':
		{'unicode': ['1f91d'], 'isCanonical': false},
	':cooking:':
		{'unicode': ['1f373'], 'isCanonical': true},
	':fork_and_knife:':
		{'unicode': ['1f374'], 'isCanonical': true},
	':tea:':
		{'unicode': ['1f375'], 'isCanonical': true},
	':sake:':
		{'unicode': ['1f376'], 'isCanonical': true},
	':wine_glass:':
		{'unicode': ['1f377'], 'isCanonical': true},
	':cocktail:':
		{'unicode': ['1f378'], 'isCanonical': true},
	':tropical_drink:':
		{'unicode': ['1f379'], 'isCanonical': true},
	':beer:':
		{'unicode': ['1f37a'], 'isCanonical': true},
	':beers:':
		{'unicode': ['1f37b'], 'isCanonical': true},
	':ribbon:':
		{'unicode': ['1f380'], 'isCanonical': true},
	':gift:':
		{'unicode': ['1f381'], 'isCanonical': true},
	':birthday:':
		{'unicode': ['1f382'], 'isCanonical': true},
	':jack_o_lantern:':
		{'unicode': ['1f383'], 'isCanonical': true},
	':left_facing_fist:':
		{'unicode': ['1f91b'], 'isCanonical': true},
	':left_fist:':
		{'unicode': ['1f91b'], 'isCanonical': false},
	':right_facing_fist:':
		{'unicode': ['1f91c'], 'isCanonical': true},
	':right_fist:':
		{'unicode': ['1f91c'], 'isCanonical': false},
	':christmas_tree:':
		{'unicode': ['1f384'], 'isCanonical': true},
	':santa:':
		{'unicode': ['1f385'], 'isCanonical': true},
	':fireworks:':
		{'unicode': ['1f386'], 'isCanonical': true},
	':raised_back_of_hand:':
		{'unicode': ['1f91a'], 'isCanonical': true},
	':back_of_hand:':
		{'unicode': ['1f91a'], 'isCanonical': false},
	':sparkler:':
		{'unicode': ['1f387'], 'isCanonical': true},
	':balloon:':
		{'unicode': ['1f388'], 'isCanonical': true},
	':tada:':
		{'unicode': ['1f389'], 'isCanonical': true},
	':confetti_ball:':
		{'unicode': ['1f38a'], 'isCanonical': true},
	':tanabata_tree:':
		{'unicode': ['1f38b'], 'isCanonical': true},
	':crossed_flags:':
		{'unicode': ['1f38c'], 'isCanonical': true},
	':call_me:':
		{'unicode': ['1f919'], 'isCanonical': true},
	':call_me_hand:':
		{'unicode': ['1f919'], 'isCanonical': false},
	':bamboo:':
		{'unicode': ['1f38d'], 'isCanonical': true},
	':man_dancing:':
		{'unicode': ['1f57a'], 'isCanonical': true},
	':male_dancer:':
		{'unicode': ['1f57a'], 'isCanonical': false},
	':dolls:':
		{'unicode': ['1f38e'], 'isCanonical': true},
	':selfie:':
		{'unicode': ['1f933'], 'isCanonical': true},
	':flags:':
		{'unicode': ['1f38f'], 'isCanonical': true},
	':pregnant_woman:':
		{'unicode': ['1f930'], 'isCanonical': true},
	':expecting_woman:':
		{'unicode': ['1f930'], 'isCanonical': false},
	':wind_chime:':
		{'unicode': ['1f390'], 'isCanonical': true},
	':face_palm:':
		{'unicode': ['1f926'], 'isCanonical': true},
	':facepalm:':
		{'unicode': ['1f926'], 'isCanonical': false},
	':shrug:':
		{'unicode': ['1f937'], 'isCanonical': true},
	':rice_scene:':
		{'unicode': ['1f391'], 'isCanonical': true},
	':school_satchel:':
		{'unicode': ['1f392'], 'isCanonical': true},
	':mortar_board:':
		{'unicode': ['1f393'], 'isCanonical': true},
	':carousel_horse:':
		{'unicode': ['1f3a0'], 'isCanonical': true},
	':ferris_wheel:':
		{'unicode': ['1f3a1'], 'isCanonical': true},
	':roller_coaster:':
		{'unicode': ['1f3a2'], 'isCanonical': true},
	':fishing_pole_and_fish:':
		{'unicode': ['1f3a3'], 'isCanonical': true},
	':microphone:':
		{'unicode': ['1f3a4'], 'isCanonical': true},
	':movie_camera:':
		{'unicode': ['1f3a5'], 'isCanonical': true},
	':cinema:':
		{'unicode': ['1f3a6'], 'isCanonical': true},
	':headphones:':
		{'unicode': ['1f3a7'], 'isCanonical': true},
	':mrs_claus:':
		{'unicode': ['1f936'], 'isCanonical': true},
	':mother_christmas:':
		{'unicode': ['1f936'], 'isCanonical': false},
	':art:':
		{'unicode': ['1f3a8'], 'isCanonical': true},
	':man_in_tuxedo:':
		{'unicode': ['1f935'], 'isCanonical': true},
	':tophat:':
		{'unicode': ['1f3a9'], 'isCanonical': true},
	':circus_tent:':
		{'unicode': ['1f3aa'], 'isCanonical': true},
	':prince:':
		{'unicode': ['1f934'], 'isCanonical': true},
	':ticket:':
		{'unicode': ['1f3ab'], 'isCanonical': true},
	':clapper:':
		{'unicode': ['1f3ac'], 'isCanonical': true},
	':performing_arts:':
		{'unicode': ['1f3ad'], 'isCanonical': true},
	':sneezing_face:':
		{'unicode': ['1f927'], 'isCanonical': true},
	':sneeze:':
		{'unicode': ['1f927'], 'isCanonical': false},
	':video_game:':
		{'unicode': ['1f3ae'], 'isCanonical': true},
	':dart:':
		{'unicode': ['1f3af'], 'isCanonical': true},
	':slot_machine:':
		{'unicode': ['1f3b0'], 'isCanonical': true},
	':8ball:':
		{'unicode': ['1f3b1'], 'isCanonical': true},
	':game_die:':
		{'unicode': ['1f3b2'], 'isCanonical': true},
	':bowling:':
		{'unicode': ['1f3b3'], 'isCanonical': true},
	':flower_playing_cards:':
		{'unicode': ['1f3b4'], 'isCanonical': true},
	':lying_face:':
		{'unicode': ['1f925'], 'isCanonical': true},
	':liar:':
		{'unicode': ['1f925'], 'isCanonical': false},
	':musical_note:':
		{'unicode': ['1f3b5'], 'isCanonical': true},
	':notes:':
		{'unicode': ['1f3b6'], 'isCanonical': true},
	':saxophone:':
		{'unicode': ['1f3b7'], 'isCanonical': true},
	':drooling_face:':
		{'unicode': ['1f924'], 'isCanonical': true},
	':drool:':
		{'unicode': ['1f924'], 'isCanonical': false},
	':guitar:':
		{'unicode': ['1f3b8'], 'isCanonical': true},
	':musical_keyboard:':
		{'unicode': ['1f3b9'], 'isCanonical': true},
	':trumpet:':
		{'unicode': ['1f3ba'], 'isCanonical': true},
	':rofl:':
		{'unicode': ['1f923'], 'isCanonical': true},
	':rolling_on_the_floor_laughing:':
		{'unicode': ['1f923'], 'isCanonical': false},
	':violin:':
		{'unicode': ['1f3bb'], 'isCanonical': true},
	':musical_score:':
		{'unicode': ['1f3bc'], 'isCanonical': true},
	':running_shirt_with_sash:':
		{'unicode': ['1f3bd'], 'isCanonical': true},
	':nauseated_face:':
		{'unicode': ['1f922'], 'isCanonical': true},
	':sick:':
		{'unicode': ['1f922'], 'isCanonical': false},
	':tennis:':
		{'unicode': ['1f3be'], 'isCanonical': true},
	':ski:':
		{'unicode': ['1f3bf'], 'isCanonical': true},
	':basketball:':
		{'unicode': ['1f3c0'], 'isCanonical': true},
	':checkered_flag:':
		{'unicode': ['1f3c1'], 'isCanonical': true},
	':clown:':
		{'unicode': ['1f921'], 'isCanonical': true},
	':clown_face:':
		{'unicode': ['1f921'], 'isCanonical': false},
	':snowboarder:':
		{'unicode': ['1f3c2'], 'isCanonical': true},
	':runner:':
		{'unicode': ['1f3c3'], 'isCanonical': true},
	':surfer:':
		{'unicode': ['1f3c4'], 'isCanonical': true},
	':trophy:':
		{'unicode': ['1f3c6'], 'isCanonical': true},
	':football:':
		{'unicode': ['1f3c8'], 'isCanonical': true},
	':swimmer:':
		{'unicode': ['1f3ca'], 'isCanonical': true},
	':house:':
		{'unicode': ['1f3e0'], 'isCanonical': true},
	':house_with_garden:':
		{'unicode': ['1f3e1'], 'isCanonical': true},
	':office:':
		{'unicode': ['1f3e2'], 'isCanonical': true},
	':post_office:':
		{'unicode': ['1f3e3'], 'isCanonical': true},
	':hospital:':
		{'unicode': ['1f3e5'], 'isCanonical': true},
	':bank:':
		{'unicode': ['1f3e6'], 'isCanonical': true},
	':atm:':
		{'unicode': ['1f3e7'], 'isCanonical': true},
	':hotel:':
		{'unicode': ['1f3e8'], 'isCanonical': true},
	':love_hotel:':
		{'unicode': ['1f3e9'], 'isCanonical': true},
	':convenience_store:':
		{'unicode': ['1f3ea'], 'isCanonical': true},
	':school:':
		{'unicode': ['1f3eb'], 'isCanonical': true},
	':department_store:':
		{'unicode': ['1f3ec'], 'isCanonical': true},
	':cowboy:':
		{'unicode': ['1f920'], 'isCanonical': true},
	':face_with_cowboy_hat:':
		{'unicode': ['1f920'], 'isCanonical': false},
	':factory:':
		{'unicode': ['1f3ed'], 'isCanonical': true},
	':izakaya_lantern:':
		{'unicode': ['1f3ee'], 'isCanonical': true},
	':japanese_castle:':
		{'unicode': ['1f3ef'], 'isCanonical': true},
	':european_castle:':
		{'unicode': ['1f3f0'], 'isCanonical': true},
	':snail:':
		{'unicode': ['1f40c'], 'isCanonical': true},
	':snake:':
		{'unicode': ['1f40d'], 'isCanonical': true},
	':racehorse:':
		{'unicode': ['1f40e'], 'isCanonical': true},
	':sheep:':
		{'unicode': ['1f411'], 'isCanonical': true},
	':monkey:':
		{'unicode': ['1f412'], 'isCanonical': true},
	':chicken:':
		{'unicode': ['1f414'], 'isCanonical': true},
	':boar:':
		{'unicode': ['1f417'], 'isCanonical': true},
	':elephant:':
		{'unicode': ['1f418'], 'isCanonical': true},
	':octopus:':
		{'unicode': ['1f419'], 'isCanonical': true},
	':shell:':
		{'unicode': ['1f41a'], 'isCanonical': true},
	':bug:':
		{'unicode': ['1f41b'], 'isCanonical': true},
	':ant:':
		{'unicode': ['1f41c'], 'isCanonical': true},
	':bee:':
		{'unicode': ['1f41d'], 'isCanonical': true},
	':beetle:':
		{'unicode': ['1f41e'], 'isCanonical': true},
	':fish:':
		{'unicode': ['1f41f'], 'isCanonical': true},
	':tropical_fish:':
		{'unicode': ['1f420'], 'isCanonical': true},
	':blowfish:':
		{'unicode': ['1f421'], 'isCanonical': true},
	':turtle:':
		{'unicode': ['1f422'], 'isCanonical': true},
	':hatching_chick:':
		{'unicode': ['1f423'], 'isCanonical': true},
	':baby_chick:':
		{'unicode': ['1f424'], 'isCanonical': true},
	':hatched_chick:':
		{'unicode': ['1f425'], 'isCanonical': true},
	':bird:':
		{'unicode': ['1f426'], 'isCanonical': true},
	':penguin:':
		{'unicode': ['1f427'], 'isCanonical': true},
	':koala:':
		{'unicode': ['1f428'], 'isCanonical': true},
	':poodle:':
		{'unicode': ['1f429'], 'isCanonical': true},
	':camel:':
		{'unicode': ['1f42b'], 'isCanonical': true},
	':dolphin:':
		{'unicode': ['1f42c'], 'isCanonical': true},
	':mouse:':
		{'unicode': ['1f42d'], 'isCanonical': true},
	':cow:':
		{'unicode': ['1f42e'], 'isCanonical': true},
	':tiger:':
		{'unicode': ['1f42f'], 'isCanonical': true},
	':rabbit:':
		{'unicode': ['1f430'], 'isCanonical': true},
	':cat:':
		{'unicode': ['1f431'], 'isCanonical': true},
	':dragon_face:':
		{'unicode': ['1f432'], 'isCanonical': true},
	':whale:':
		{'unicode': ['1f433'], 'isCanonical': true},
	':horse:':
		{'unicode': ['1f434'], 'isCanonical': true},
	':monkey_face:':
		{'unicode': ['1f435'], 'isCanonical': true},
	':dog:':
		{'unicode': ['1f436'], 'isCanonical': true},
	':pig:':
		{'unicode': ['1f437'], 'isCanonical': true},
	':frog:':
		{'unicode': ['1f438'], 'isCanonical': true},
	':hamster:':
		{'unicode': ['1f439'], 'isCanonical': true},
	':wolf:':
		{'unicode': ['1f43a'], 'isCanonical': true},
	':bear:':
		{'unicode': ['1f43b'], 'isCanonical': true},
	':panda_face:':
		{'unicode': ['1f43c'], 'isCanonical': true},
	':pig_nose:':
		{'unicode': ['1f43d'], 'isCanonical': true},
	':feet:':
		{'unicode': ['1f43e'], 'isCanonical': true},
	':paw_prints:':
		{'unicode': ['1f43e'], 'isCanonical': false},
	':eyes:':
		{'unicode': ['1f440'], 'isCanonical': true},
	':ear:':
		{'unicode': ['1f442'], 'isCanonical': true},
	':nose:':
		{'unicode': ['1f443'], 'isCanonical': true},
	':lips:':
		{'unicode': ['1f444'], 'isCanonical': true},
	':tongue:':
		{'unicode': ['1f445'], 'isCanonical': true},
	':point_up_2:':
		{'unicode': ['1f446'], 'isCanonical': true},
	':point_down:':
		{'unicode': ['1f447'], 'isCanonical': true},
	':point_left:':
		{'unicode': ['1f448'], 'isCanonical': true},
	':point_right:':
		{'unicode': ['1f449'], 'isCanonical': true},
	':punch:':
		{'unicode': ['1f44a'], 'isCanonical': true},
	':wave:':
		{'unicode': ['1f44b'], 'isCanonical': true},
	':ok_hand:':
		{'unicode': ['1f44c'], 'isCanonical': true},
	':thumbsup:':
		{'unicode': ['1f44d'], 'isCanonical': true},
	':+1:':
		{'unicode': ['1f44d'], 'isCanonical': false},
	':thumbup:':
		{'unicode': ['1f44d'], 'isCanonical': false},
	':thumbsdown:':
		{'unicode': ['1f44e'], 'isCanonical': true},
	':-1:':
		{'unicode': ['1f44e'], 'isCanonical': false},
	':thumbdown:':
		{'unicode': ['1f44e'], 'isCanonical': false},
	':clap:':
		{'unicode': ['1f44f'], 'isCanonical': true},
	':open_hands:':
		{'unicode': ['1f450'], 'isCanonical': true},
	':crown:':
		{'unicode': ['1f451'], 'isCanonical': true},
	':womans_hat:':
		{'unicode': ['1f452'], 'isCanonical': true},
	':eyeglasses:':
		{'unicode': ['1f453'], 'isCanonical': true},
	':necktie:':
		{'unicode': ['1f454'], 'isCanonical': true},
	':shirt:':
		{'unicode': ['1f455'], 'isCanonical': true},
	':jeans:':
		{'unicode': ['1f456'], 'isCanonical': true},
	':dress:':
		{'unicode': ['1f457'], 'isCanonical': true},
	':kimono:':
		{'unicode': ['1f458'], 'isCanonical': true},
	':bikini:':
		{'unicode': ['1f459'], 'isCanonical': true},
	':womans_clothes:':
		{'unicode': ['1f45a'], 'isCanonical': true},
	':purse:':
		{'unicode': ['1f45b'], 'isCanonical': true},
	':handbag:':
		{'unicode': ['1f45c'], 'isCanonical': true},
	':pouch:':
		{'unicode': ['1f45d'], 'isCanonical': true},
	':mans_shoe:':
		{'unicode': ['1f45e'], 'isCanonical': true},
	':athletic_shoe:':
		{'unicode': ['1f45f'], 'isCanonical': true},
	':high_heel:':
		{'unicode': ['1f460'], 'isCanonical': true},
	':sandal:':
		{'unicode': ['1f461'], 'isCanonical': true},
	':boot:':
		{'unicode': ['1f462'], 'isCanonical': true},
	':footprints:':
		{'unicode': ['1f463'], 'isCanonical': true},
	':bust_in_silhouette:':
		{'unicode': ['1f464'], 'isCanonical': true},
	':boy:':
		{'unicode': ['1f466'], 'isCanonical': true},
	':girl:':
		{'unicode': ['1f467'], 'isCanonical': true},
	':man:':
		{'unicode': ['1f468'], 'isCanonical': true},
	':woman:':
		{'unicode': ['1f469'], 'isCanonical': true},
	':family:':
		{'unicode': ['1f46a'], 'isCanonical': true},
	':couple:':
		{'unicode': ['1f46b'], 'isCanonical': true},
	':cop:':
		{'unicode': ['1f46e'], 'isCanonical': true},
	':dancers:':
		{'unicode': ['1f46f'], 'isCanonical': true},
	':bride_with_veil:':
		{'unicode': ['1f470'], 'isCanonical': true},
	':person_with_blond_hair:':
		{'unicode': ['1f471'], 'isCanonical': true},
	':man_with_gua_pi_mao:':
		{'unicode': ['1f472'], 'isCanonical': true},
	':man_with_turban:':
		{'unicode': ['1f473'], 'isCanonical': true},
	':older_man:':
		{'unicode': ['1f474'], 'isCanonical': true},
	':older_woman:':
		{'unicode': ['1f475'], 'isCanonical': true},
	':grandma:':
		{'unicode': ['1f475'], 'isCanonical': false},
	':baby:':
		{'unicode': ['1f476'], 'isCanonical': true},
	':construction_worker:':
		{'unicode': ['1f477'], 'isCanonical': true},
	':princess:':
		{'unicode': ['1f478'], 'isCanonical': true},
	':japanese_ogre:':
		{'unicode': ['1f479'], 'isCanonical': true},
	':japanese_goblin:':
		{'unicode': ['1f47a'], 'isCanonical': true},
	':ghost:':
		{'unicode': ['1f47b'], 'isCanonical': true},
	':angel:':
		{'unicode': ['1f47c'], 'isCanonical': true},
	':alien:':
		{'unicode': ['1f47d'], 'isCanonical': true},
	':space_invader:':
		{'unicode': ['1f47e'], 'isCanonical': true},
	':imp:':
		{'unicode': ['1f47f'], 'isCanonical': true},
	':skull:':
		{'unicode': ['1f480'], 'isCanonical': true},
	':skeleton:':
		{'unicode': ['1f480'], 'isCanonical': false},
	':card_index:':
		{'unicode': ['1f4c7'], 'isCanonical': true},
	':information_desk_person:':
		{'unicode': ['1f481'], 'isCanonical': true},
	':guardsman:':
		{'unicode': ['1f482'], 'isCanonical': true},
	':dancer:':
		{'unicode': ['1f483'], 'isCanonical': true},
	':lipstick:':
		{'unicode': ['1f484'], 'isCanonical': true},
	':nail_care:':
		{'unicode': ['1f485'], 'isCanonical': true},
	':ledger:':
		{'unicode': ['1f4d2'], 'isCanonical': true},
	':massage:':
		{'unicode': ['1f486'], 'isCanonical': true},
	':notebook:':
		{'unicode': ['1f4d3'], 'isCanonical': true},
	':haircut:':
		{'unicode': ['1f487'], 'isCanonical': true},
	':notebook_with_decorative_cover:':
		{'unicode': ['1f4d4'], 'isCanonical': true},
	':barber:':
		{'unicode': ['1f488'], 'isCanonical': true},
	':closed_book:':
		{'unicode': ['1f4d5'], 'isCanonical': true},
	':syringe:':
		{'unicode': ['1f489'], 'isCanonical': true},
	':book:':
		{'unicode': ['1f4d6'], 'isCanonical': true},
	':pill:':
		{'unicode': ['1f48a'], 'isCanonical': true},
	':green_book:':
		{'unicode': ['1f4d7'], 'isCanonical': true},
	':kiss:':
		{'unicode': ['1f48b'], 'isCanonical': true},
	':blue_book:':
		{'unicode': ['1f4d8'], 'isCanonical': true},
	':love_letter:':
		{'unicode': ['1f48c'], 'isCanonical': true},
	':orange_book:':
		{'unicode': ['1f4d9'], 'isCanonical': true},
	':ring:':
		{'unicode': ['1f48d'], 'isCanonical': true},
	':books:':
		{'unicode': ['1f4da'], 'isCanonical': true},
	':gem:':
		{'unicode': ['1f48e'], 'isCanonical': true},
	':name_badge:':
		{'unicode': ['1f4db'], 'isCanonical': true},
	':couplekiss:':
		{'unicode': ['1f48f'], 'isCanonical': true},
	':scroll:':
		{'unicode': ['1f4dc'], 'isCanonical': true},
	':bouquet:':
		{'unicode': ['1f490'], 'isCanonical': true},
	':pencil:':
		{'unicode': ['1f4dd'], 'isCanonical': true},
	':couple_with_heart:':
		{'unicode': ['1f491'], 'isCanonical': true},
	':telephone_receiver:':
		{'unicode': ['1f4de'], 'isCanonical': true},
	':wedding:':
		{'unicode': ['1f492'], 'isCanonical': true},
	':pager:':
		{'unicode': ['1f4df'], 'isCanonical': true},
	':fax:':
		{'unicode': ['1f4e0'], 'isCanonical': true},
	':heartbeat:':
		{'unicode': ['1f493'], 'isCanonical': true},
	':satellite:':
		{'unicode': ['1f4e1'], 'isCanonical': true},
	':loudspeaker:':
		{'unicode': ['1f4e2'], 'isCanonical': true},
	':broken_heart:':
		{'unicode': ['1f494'], 'isCanonical': true},
	':mega:':
		{'unicode': ['1f4e3'], 'isCanonical': true},
	':outbox_tray:':
		{'unicode': ['1f4e4'], 'isCanonical': true},
	':two_hearts:':
		{'unicode': ['1f495'], 'isCanonical': true},
	':inbox_tray:':
		{'unicode': ['1f4e5'], 'isCanonical': true},
	':package:':
		{'unicode': ['1f4e6'], 'isCanonical': true},
	':sparkling_heart:':
		{'unicode': ['1f496'], 'isCanonical': true},
	':e-mail:':
		{'unicode': ['1f4e7'], 'isCanonical': true},
	':email:':
		{'unicode': ['1f4e7'], 'isCanonical': false},
	':incoming_envelope:':
		{'unicode': ['1f4e8'], 'isCanonical': true},
	':heartpulse:':
		{'unicode': ['1f497'], 'isCanonical': true},
	':envelope_with_arrow:':
		{'unicode': ['1f4e9'], 'isCanonical': true},
	':mailbox_closed:':
		{'unicode': ['1f4ea'], 'isCanonical': true},
	':cupid:':
		{'unicode': ['1f498'], 'isCanonical': true},
	':mailbox:':
		{'unicode': ['1f4eb'], 'isCanonical': true},
	':postbox:':
		{'unicode': ['1f4ee'], 'isCanonical': true},
	':blue_heart:':
		{'unicode': ['1f499'], 'isCanonical': true},
	':newspaper:':
		{'unicode': ['1f4f0'], 'isCanonical': true},
	':iphone:':
		{'unicode': ['1f4f1'], 'isCanonical': true},
	':green_heart:':
		{'unicode': ['1f49a'], 'isCanonical': true},
	':calling:':
		{'unicode': ['1f4f2'], 'isCanonical': true},
	':vibration_mode:':
		{'unicode': ['1f4f3'], 'isCanonical': true},
	':yellow_heart:':
		{'unicode': ['1f49b'], 'isCanonical': true},
	':mobile_phone_off:':
		{'unicode': ['1f4f4'], 'isCanonical': true},
	':signal_strength:':
		{'unicode': ['1f4f6'], 'isCanonical': true},
	':purple_heart:':
		{'unicode': ['1f49c'], 'isCanonical': true},
	':camera:':
		{'unicode': ['1f4f7'], 'isCanonical': true},
	':video_camera:':
		{'unicode': ['1f4f9'], 'isCanonical': true},
	':gift_heart:':
		{'unicode': ['1f49d'], 'isCanonical': true},
	':tv:':
		{'unicode': ['1f4fa'], 'isCanonical': true},
	':radio:':
		{'unicode': ['1f4fb'], 'isCanonical': true},
	':revolving_hearts:':
		{'unicode': ['1f49e'], 'isCanonical': true},
	':vhs:':
		{'unicode': ['1f4fc'], 'isCanonical': true},
	':arrows_clockwise:':
		{'unicode': ['1f503'], 'isCanonical': true},
	':heart_decoration:':
		{'unicode': ['1f49f'], 'isCanonical': true},
	':loud_sound:':
		{'unicode': ['1f50a'], 'isCanonical': true},
	':battery:':
		{'unicode': ['1f50b'], 'isCanonical': true},
	':diamond_shape_with_a_dot_inside:':
		{'unicode': ['1f4a0'], 'isCanonical': true},
	':electric_plug:':
		{'unicode': ['1f50c'], 'isCanonical': true},
	':mag:':
		{'unicode': ['1f50d'], 'isCanonical': true},
	':bulb:':
		{'unicode': ['1f4a1'], 'isCanonical': true},
	':mag_right:':
		{'unicode': ['1f50e'], 'isCanonical': true},
	':lock_with_ink_pen:':
		{'unicode': ['1f50f'], 'isCanonical': true},
	':anger:':
		{'unicode': ['1f4a2'], 'isCanonical': true},
	':closed_lock_with_key:':
		{'unicode': ['1f510'], 'isCanonical': true},
	':key:':
		{'unicode': ['1f511'], 'isCanonical': true},
	':bomb:':
		{'unicode': ['1f4a3'], 'isCanonical': true},
	':lock:':
		{'unicode': ['1f512'], 'isCanonical': true},
	':unlock:':
		{'unicode': ['1f513'], 'isCanonical': true},
	':zzz:':
		{'unicode': ['1f4a4'], 'isCanonical': true},
	':bell:':
		{'unicode': ['1f514'], 'isCanonical': true},
	':bookmark:':
		{'unicode': ['1f516'], 'isCanonical': true},
	':boom:':
		{'unicode': ['1f4a5'], 'isCanonical': true},
	':link:':
		{'unicode': ['1f517'], 'isCanonical': true},
	':radio_button:':
		{'unicode': ['1f518'], 'isCanonical': true},
	':sweat_drops:':
		{'unicode': ['1f4a6'], 'isCanonical': true},
	':back:':
		{'unicode': ['1f519'], 'isCanonical': true},
	':end:':
		{'unicode': ['1f51a'], 'isCanonical': true},
	':droplet:':
		{'unicode': ['1f4a7'], 'isCanonical': true},
	':on:':
		{'unicode': ['1f51b'], 'isCanonical': true},
	':soon:':
		{'unicode': ['1f51c'], 'isCanonical': true},
	':dash:':
		{'unicode': ['1f4a8'], 'isCanonical': true},
	':top:':
		{'unicode': ['1f51d'], 'isCanonical': true},
	':underage:':
		{'unicode': ['1f51e'], 'isCanonical': true},
	':poop:':
		{'unicode': ['1f4a9'], 'isCanonical': true},
	':shit:':
		{'unicode': ['1f4a9'], 'isCanonical': false},
	':hankey:':
		{'unicode': ['1f4a9'], 'isCanonical': false},
	':poo:':
		{'unicode': ['1f4a9'], 'isCanonical': false},
	':keycap_ten:':
		{'unicode': ['1f51f'], 'isCanonical': true},
	':muscle:':
		{'unicode': ['1f4aa'], 'isCanonical': true},
	':capital_abcd:':
		{'unicode': ['1f520'], 'isCanonical': true},
	':abcd:':
		{'unicode': ['1f521'], 'isCanonical': true},
	':dizzy:':
		{'unicode': ['1f4ab'], 'isCanonical': true},
	':1234:':
		{'unicode': ['1f522'], 'isCanonical': true},
	':symbols:':
		{'unicode': ['1f523'], 'isCanonical': true},
	':speech_balloon:':
		{'unicode': ['1f4ac'], 'isCanonical': true},
	':abc:':
		{'unicode': ['1f524'], 'isCanonical': true},
	':fire:':
		{'unicode': ['1f525'], 'isCanonical': true},
	':flame:':
		{'unicode': ['1f525'], 'isCanonical': false},
	':white_flower:':
		{'unicode': ['1f4ae'], 'isCanonical': true},
	':flashlight:':
		{'unicode': ['1f526'], 'isCanonical': true},
	':wrench:':
		{'unicode': ['1f527'], 'isCanonical': true},
	':100:':
		{'unicode': ['1f4af'], 'isCanonical': true},
	':hammer:':
		{'unicode': ['1f528'], 'isCanonical': true},
	':nut_and_bolt:':
		{'unicode': ['1f529'], 'isCanonical': true},
	':moneybag:':
		{'unicode': ['1f4b0'], 'isCanonical': true},
	':knife:':
		{'unicode': ['1f52a'], 'isCanonical': true},
	':gun:':
		{'unicode': ['1f52b'], 'isCanonical': true},
	':currency_exchange:':
		{'unicode': ['1f4b1'], 'isCanonical': true},
	':crystal_ball:':
		{'unicode': ['1f52e'], 'isCanonical': true},
	':heavy_dollar_sign:':
		{'unicode': ['1f4b2'], 'isCanonical': true},
	':six_pointed_star:':
		{'unicode': ['1f52f'], 'isCanonical': true},
	':credit_card:':
		{'unicode': ['1f4b3'], 'isCanonical': true},
	':beginner:':
		{'unicode': ['1f530'], 'isCanonical': true},
	':trident:':
		{'unicode': ['1f531'], 'isCanonical': true},
	':yen:':
		{'unicode': ['1f4b4'], 'isCanonical': true},
	':black_square_button:':
		{'unicode': ['1f532'], 'isCanonical': true},
	':white_square_button:':
		{'unicode': ['1f533'], 'isCanonical': true},
	':dollar:':
		{'unicode': ['1f4b5'], 'isCanonical': true},
	':red_circle:':
		{'unicode': ['1f534'], 'isCanonical': true},
	':large_blue_circle:':
		{'unicode': ['1f535'], 'isCanonical': true},
	':money_with_wings:':
		{'unicode': ['1f4b8'], 'isCanonical': true},
	':large_orange_diamond:':
		{'unicode': ['1f536'], 'isCanonical': true},
	':large_blue_diamond:':
		{'unicode': ['1f537'], 'isCanonical': true},
	':chart:':
		{'unicode': ['1f4b9'], 'isCanonical': true},
	':small_orange_diamond:':
		{'unicode': ['1f538'], 'isCanonical': true},
	':small_blue_diamond:':
		{'unicode': ['1f539'], 'isCanonical': true},
	':seat:':
		{'unicode': ['1f4ba'], 'isCanonical': true},
	':small_red_triangle:':
		{'unicode': ['1f53a'], 'isCanonical': true},
	':small_red_triangle_down:':
		{'unicode': ['1f53b'], 'isCanonical': true},
	':computer:':
		{'unicode': ['1f4bb'], 'isCanonical': true},
	':arrow_up_small:':
		{'unicode': ['1f53c'], 'isCanonical': true},
	':briefcase:':
		{'unicode': ['1f4bc'], 'isCanonical': true},
	':arrow_down_small:':
		{'unicode': ['1f53d'], 'isCanonical': true},
	':clock1:':
		{'unicode': ['1f550'], 'isCanonical': true},
	':minidisc:':
		{'unicode': ['1f4bd'], 'isCanonical': true},
	':clock2:':
		{'unicode': ['1f551'], 'isCanonical': true},
	':floppy_disk:':
		{'unicode': ['1f4be'], 'isCanonical': true},
	':clock3:':
		{'unicode': ['1f552'], 'isCanonical': true},
	':cd:':
		{'unicode': ['1f4bf'], 'isCanonical': true},
	':clock4:':
		{'unicode': ['1f553'], 'isCanonical': true},
	':dvd:':
		{'unicode': ['1f4c0'], 'isCanonical': true},
	':clock5:':
		{'unicode': ['1f554'], 'isCanonical': true},
	':clock6:':
		{'unicode': ['1f555'], 'isCanonical': true},
	':file_folder:':
		{'unicode': ['1f4c1'], 'isCanonical': true},
	':clock7:':
		{'unicode': ['1f556'], 'isCanonical': true},
	':clock8:':
		{'unicode': ['1f557'], 'isCanonical': true},
	':open_file_folder:':
		{'unicode': ['1f4c2'], 'isCanonical': true},
	':clock9:':
		{'unicode': ['1f558'], 'isCanonical': true},
	':clock10:':
		{'unicode': ['1f559'], 'isCanonical': true},
	':page_with_curl:':
		{'unicode': ['1f4c3'], 'isCanonical': true},
	':clock11:':
		{'unicode': ['1f55a'], 'isCanonical': true},
	':clock12:':
		{'unicode': ['1f55b'], 'isCanonical': true},
	':page_facing_up:':
		{'unicode': ['1f4c4'], 'isCanonical': true},
	':mount_fuji:':
		{'unicode': ['1f5fb'], 'isCanonical': true},
	':tokyo_tower:':
		{'unicode': ['1f5fc'], 'isCanonical': true},
	':date:':
		{'unicode': ['1f4c5'], 'isCanonical': true},
	':statue_of_liberty:':
		{'unicode': ['1f5fd'], 'isCanonical': true},
	':japan:':
		{'unicode': ['1f5fe'], 'isCanonical': true},
	':calendar:':
		{'unicode': ['1f4c6'], 'isCanonical': true},
	':moyai:':
		{'unicode': ['1f5ff'], 'isCanonical': true},
	':grin:':
		{'unicode': ['1f601'], 'isCanonical': true},
	':joy:':
		{'unicode': ['1f602'], 'isCanonical': true},
	':smiley:':
		{'unicode': ['1f603'], 'isCanonical': true},
	':chart_with_upwards_trend:':
		{'unicode': ['1f4c8'], 'isCanonical': true},
	':smile:':
		{'unicode': ['1f604'], 'isCanonical': true},
	':sweat_smile:':
		{'unicode': ['1f605'], 'isCanonical': true},
	':chart_with_downwards_trend:':
		{'unicode': ['1f4c9'], 'isCanonical': true},
	':laughing:':
		{'unicode': ['1f606'], 'isCanonical': true},
	':satisfied:':
		{'unicode': ['1f606'], 'isCanonical': false},
	':wink:':
		{'unicode': ['1f609'], 'isCanonical': true},
	':bar_chart:':
		{'unicode': ['1f4ca'], 'isCanonical': true},
	':blush:':
		{'unicode': ['1f60a'], 'isCanonical': true},
	':yum:':
		{'unicode': ['1f60b'], 'isCanonical': true},
	':clipboard:':
		{'unicode': ['1f4cb'], 'isCanonical': true},
	':relieved:':
		{'unicode': ['1f60c'], 'isCanonical': true},
	':heart_eyes:':
		{'unicode': ['1f60d'], 'isCanonical': true},
	':pushpin:':
		{'unicode': ['1f4cc'], 'isCanonical': true},
	':smirk:':
		{'unicode': ['1f60f'], 'isCanonical': true},
	':unamused:':
		{'unicode': ['1f612'], 'isCanonical': true},
	':round_pushpin:':
		{'unicode': ['1f4cd'], 'isCanonical': true},
	':sweat:':
		{'unicode': ['1f613'], 'isCanonical': true},
	':pensive:':
		{'unicode': ['1f614'], 'isCanonical': true},
	':paperclip:':
		{'unicode': ['1f4ce'], 'isCanonical': true},
	':confounded:':
		{'unicode': ['1f616'], 'isCanonical': true},
	':kissing_heart:':
		{'unicode': ['1f618'], 'isCanonical': true},
	':straight_ruler:':
		{'unicode': ['1f4cf'], 'isCanonical': true},
	':kissing_closed_eyes:':
		{'unicode': ['1f61a'], 'isCanonical': true},
	':stuck_out_tongue_winking_eye:':
		{'unicode': ['1f61c'], 'isCanonical': true},
	':triangular_ruler:':
		{'unicode': ['1f4d0'], 'isCanonical': true},
	':stuck_out_tongue_closed_eyes:':
		{'unicode': ['1f61d'], 'isCanonical': true},
	':disappointed:':
		{'unicode': ['1f61e'], 'isCanonical': true},
	':bookmark_tabs:':
		{'unicode': ['1f4d1'], 'isCanonical': true},
	':angry:':
		{'unicode': ['1f620'], 'isCanonical': true},
	':rage:':
		{'unicode': ['1f621'], 'isCanonical': true},
	':cry:':
		{'unicode': ['1f622'], 'isCanonical': true},
	':persevere:':
		{'unicode': ['1f623'], 'isCanonical': true},
	':triumph:':
		{'unicode': ['1f624'], 'isCanonical': true},
	':disappointed_relieved:':
		{'unicode': ['1f625'], 'isCanonical': true},
	':fearful:':
		{'unicode': ['1f628'], 'isCanonical': true},
	':weary:':
		{'unicode': ['1f629'], 'isCanonical': true},
	':sleepy:':
		{'unicode': ['1f62a'], 'isCanonical': true},
	':tired_face:':
		{'unicode': ['1f62b'], 'isCanonical': true},
	':sob:':
		{'unicode': ['1f62d'], 'isCanonical': true},
	':cold_sweat:':
		{'unicode': ['1f630'], 'isCanonical': true},
	':scream:':
		{'unicode': ['1f631'], 'isCanonical': true},
	':astonished:':
		{'unicode': ['1f632'], 'isCanonical': true},
	':flushed:':
		{'unicode': ['1f633'], 'isCanonical': true},
	':dizzy_face:':
		{'unicode': ['1f635'], 'isCanonical': true},
	':mask:':
		{'unicode': ['1f637'], 'isCanonical': true},
	':smile_cat:':
		{'unicode': ['1f638'], 'isCanonical': true},
	':joy_cat:':
		{'unicode': ['1f639'], 'isCanonical': true},
	':smiley_cat:':
		{'unicode': ['1f63a'], 'isCanonical': true},
	':heart_eyes_cat:':
		{'unicode': ['1f63b'], 'isCanonical': true},
	':smirk_cat:':
		{'unicode': ['1f63c'], 'isCanonical': true},
	':kissing_cat:':
		{'unicode': ['1f63d'], 'isCanonical': true},
	':pouting_cat:':
		{'unicode': ['1f63e'], 'isCanonical': true},
	':crying_cat_face:':
		{'unicode': ['1f63f'], 'isCanonical': true},
	':scream_cat:':
		{'unicode': ['1f640'], 'isCanonical': true},
	':no_good:':
		{'unicode': ['1f645'], 'isCanonical': true},
	':ok_woman:':
		{'unicode': ['1f646'], 'isCanonical': true},
	':bow:':
		{'unicode': ['1f647'], 'isCanonical': true},
	':see_no_evil:':
		{'unicode': ['1f648'], 'isCanonical': true},
	':hear_no_evil:':
		{'unicode': ['1f649'], 'isCanonical': true},
	':speak_no_evil:':
		{'unicode': ['1f64a'], 'isCanonical': true},
	':raising_hand:':
		{'unicode': ['1f64b'], 'isCanonical': true},
	':raised_hands:':
		{'unicode': ['1f64c'], 'isCanonical': true},
	':person_frowning:':
		{'unicode': ['1f64d'], 'isCanonical': true},
	':person_with_pouting_face:':
		{'unicode': ['1f64e'], 'isCanonical': true},
	':pray:':
		{'unicode': ['1f64f'], 'isCanonical': true},
	':rocket:':
		{'unicode': ['1f680'], 'isCanonical': true},
	':railway_car:':
		{'unicode': ['1f683'], 'isCanonical': true},
	':bullettrain_side:':
		{'unicode': ['1f684'], 'isCanonical': true},
	':bullettrain_front:':
		{'unicode': ['1f685'], 'isCanonical': true},
	':metro:':
		{'unicode': ['1f687'], 'isCanonical': true},
	':station:':
		{'unicode': ['1f689'], 'isCanonical': true},
	':bus:':
		{'unicode': ['1f68c'], 'isCanonical': true},
	':busstop:':
		{'unicode': ['1f68f'], 'isCanonical': true},
	':ambulance:':
		{'unicode': ['1f691'], 'isCanonical': true},
	':fire_engine:':
		{'unicode': ['1f692'], 'isCanonical': true},
	':police_car:':
		{'unicode': ['1f693'], 'isCanonical': true},
	':taxi:':
		{'unicode': ['1f695'], 'isCanonical': true},
	':red_car:':
		{'unicode': ['1f697'], 'isCanonical': true},
	':blue_car:':
		{'unicode': ['1f699'], 'isCanonical': true},
	':truck:':
		{'unicode': ['1f69a'], 'isCanonical': true},
	':ship:':
		{'unicode': ['1f6a2'], 'isCanonical': true},
	':speedboat:':
		{'unicode': ['1f6a4'], 'isCanonical': true},
	':traffic_light:':
		{'unicode': ['1f6a5'], 'isCanonical': true},
	':construction:':
		{'unicode': ['1f6a7'], 'isCanonical': true},
	':rotating_light:':
		{'unicode': ['1f6a8'], 'isCanonical': true},
	':triangular_flag_on_post:':
		{'unicode': ['1f6a9'], 'isCanonical': true},
	':door:':
		{'unicode': ['1f6aa'], 'isCanonical': true},
	':no_entry_sign:':
		{'unicode': ['1f6ab'], 'isCanonical': true},
	':smoking:':
		{'unicode': ['1f6ac'], 'isCanonical': true},
	':no_smoking:':
		{'unicode': ['1f6ad'], 'isCanonical': true},
	':bike:':
		{'unicode': ['1f6b2'], 'isCanonical': true},
	':walking:':
		{'unicode': ['1f6b6'], 'isCanonical': true},
	':mens:':
		{'unicode': ['1f6b9'], 'isCanonical': true},
	':womens:':
		{'unicode': ['1f6ba'], 'isCanonical': true},
	':restroom:':
		{'unicode': ['1f6bb'], 'isCanonical': true},
	':baby_symbol:':
		{'unicode': ['1f6bc'], 'isCanonical': true},
	':toilet:':
		{'unicode': ['1f6bd'], 'isCanonical': true},
	':wc:':
		{'unicode': ['1f6be'], 'isCanonical': true},
	':bath:':
		{'unicode': ['1f6c0'], 'isCanonical': true},
	':metal:':
		{'unicode': ['1f918'], 'isCanonical': true},
	':sign_of_the_horns:':
		{'unicode': ['1f918'], 'isCanonical': false},
	':grinning:':
		{'unicode': ['1f600'], 'isCanonical': true},
	':innocent:':
		{'unicode': ['1f607'], 'isCanonical': true},
	':smiling_imp:':
		{'unicode': ['1f608'], 'isCanonical': true},
	':sunglasses:':
		{'unicode': ['1f60e'], 'isCanonical': true},
	':neutral_face:':
		{'unicode': ['1f610'], 'isCanonical': true},
	':expressionless:':
		{'unicode': ['1f611'], 'isCanonical': true},
	':confused:':
		{'unicode': ['1f615'], 'isCanonical': true},
	':kissing:':
		{'unicode': ['1f617'], 'isCanonical': true},
	':kissing_smiling_eyes:':
		{'unicode': ['1f619'], 'isCanonical': true},
	':stuck_out_tongue:':
		{'unicode': ['1f61b'], 'isCanonical': true},
	':worried:':
		{'unicode': ['1f61f'], 'isCanonical': true},
	':frowning:':
		{'unicode': ['1f626'], 'isCanonical': true},
	':anguished:':
		{'unicode': ['1f627'], 'isCanonical': true},
	':grimacing:':
		{'unicode': ['1f62c'], 'isCanonical': true},
	':open_mouth:':
		{'unicode': ['1f62e'], 'isCanonical': true},
	':hushed:':
		{'unicode': ['1f62f'], 'isCanonical': true},
	':sleeping:':
		{'unicode': ['1f634'], 'isCanonical': true},
	':no_mouth:':
		{'unicode': ['1f636'], 'isCanonical': true},
	':helicopter:':
		{'unicode': ['1f681'], 'isCanonical': true},
	':steam_locomotive:':
		{'unicode': ['1f682'], 'isCanonical': true},
	':train2:':
		{'unicode': ['1f686'], 'isCanonical': true},
	':light_rail:':
		{'unicode': ['1f688'], 'isCanonical': true},
	':tram:':
		{'unicode': ['1f68a'], 'isCanonical': true},
	':oncoming_bus:':
		{'unicode': ['1f68d'], 'isCanonical': true},
	':trolleybus:':
		{'unicode': ['1f68e'], 'isCanonical': true},
	':minibus:':
		{'unicode': ['1f690'], 'isCanonical': true},
	':oncoming_police_car:':
		{'unicode': ['1f694'], 'isCanonical': true},
	':oncoming_taxi:':
		{'unicode': ['1f696'], 'isCanonical': true},
	':oncoming_automobile:':
		{'unicode': ['1f698'], 'isCanonical': true},
	':articulated_lorry:':
		{'unicode': ['1f69b'], 'isCanonical': true},
	':tractor:':
		{'unicode': ['1f69c'], 'isCanonical': true},
	':monorail:':
		{'unicode': ['1f69d'], 'isCanonical': true},
	':mountain_railway:':
		{'unicode': ['1f69e'], 'isCanonical': true},
	':suspension_railway:':
		{'unicode': ['1f69f'], 'isCanonical': true},
	':mountain_cableway:':
		{'unicode': ['1f6a0'], 'isCanonical': true},
	':aerial_tramway:':
		{'unicode': ['1f6a1'], 'isCanonical': true},
	':rowboat:':
		{'unicode': ['1f6a3'], 'isCanonical': true},
	':vertical_traffic_light:':
		{'unicode': ['1f6a6'], 'isCanonical': true},
	':put_litter_in_its_place:':
		{'unicode': ['1f6ae'], 'isCanonical': true},
	':do_not_litter:':
		{'unicode': ['1f6af'], 'isCanonical': true},
	':potable_water:':
		{'unicode': ['1f6b0'], 'isCanonical': true},
	':non-potable_water:':
		{'unicode': ['1f6b1'], 'isCanonical': true},
	':no_bicycles:':
		{'unicode': ['1f6b3'], 'isCanonical': true},
	':bicyclist:':
		{'unicode': ['1f6b4'], 'isCanonical': true},
	':mountain_bicyclist:':
		{'unicode': ['1f6b5'], 'isCanonical': true},
	':no_pedestrians:':
		{'unicode': ['1f6b7'], 'isCanonical': true},
	':children_crossing:':
		{'unicode': ['1f6b8'], 'isCanonical': true},
	':shower:':
		{'unicode': ['1f6bf'], 'isCanonical': true},
	':bathtub:':
		{'unicode': ['1f6c1'], 'isCanonical': true},
	':passport_control:':
		{'unicode': ['1f6c2'], 'isCanonical': true},
	':customs:':
		{'unicode': ['1f6c3'], 'isCanonical': true},
	':baggage_claim:':
		{'unicode': ['1f6c4'], 'isCanonical': true},
	':left_luggage:':
		{'unicode': ['1f6c5'], 'isCanonical': true},
	':earth_africa:':
		{'unicode': ['1f30d'], 'isCanonical': true},
	':earth_americas:':
		{'unicode': ['1f30e'], 'isCanonical': true},
	':globe_with_meridians:':
		{'unicode': ['1f310'], 'isCanonical': true},
	':waxing_crescent_moon:':
		{'unicode': ['1f312'], 'isCanonical': true},
	':waning_gibbous_moon:':
		{'unicode': ['1f316'], 'isCanonical': true},
	':last_quarter_moon:':
		{'unicode': ['1f317'], 'isCanonical': true},
	':waning_crescent_moon:':
		{'unicode': ['1f318'], 'isCanonical': true},
	':new_moon_with_face:':
		{'unicode': ['1f31a'], 'isCanonical': true},
	':last_quarter_moon_with_face:':
		{'unicode': ['1f31c'], 'isCanonical': true},
	':full_moon_with_face:':
		{'unicode': ['1f31d'], 'isCanonical': true},
	':sun_with_face:':
		{'unicode': ['1f31e'], 'isCanonical': true},
	':evergreen_tree:':
		{'unicode': ['1f332'], 'isCanonical': true},
	':deciduous_tree:':
		{'unicode': ['1f333'], 'isCanonical': true},
	':lemon:':
		{'unicode': ['1f34b'], 'isCanonical': true},
	':pear:':
		{'unicode': ['1f350'], 'isCanonical': true},
	':baby_bottle:':
		{'unicode': ['1f37c'], 'isCanonical': true},
	':horse_racing:':
		{'unicode': ['1f3c7'], 'isCanonical': true},
	':rugby_football:':
		{'unicode': ['1f3c9'], 'isCanonical': true},
	':european_post_office:':
		{'unicode': ['1f3e4'], 'isCanonical': true},
	':rat:':
		{'unicode': ['1f400'], 'isCanonical': true},
	':mouse2:':
		{'unicode': ['1f401'], 'isCanonical': true},
	':ox:':
		{'unicode': ['1f402'], 'isCanonical': true},
	':water_buffalo:':
		{'unicode': ['1f403'], 'isCanonical': true},
	':cow2:':
		{'unicode': ['1f404'], 'isCanonical': true},
	':tiger2:':
		{'unicode': ['1f405'], 'isCanonical': true},
	':leopard:':
		{'unicode': ['1f406'], 'isCanonical': true},
	':rabbit2:':
		{'unicode': ['1f407'], 'isCanonical': true},
	':cat2:':
		{'unicode': ['1f408'], 'isCanonical': true},
	':dragon:':
		{'unicode': ['1f409'], 'isCanonical': true},
	':crocodile:':
		{'unicode': ['1f40a'], 'isCanonical': true},
	':whale2:':
		{'unicode': ['1f40b'], 'isCanonical': true},
	':ram:':
		{'unicode': ['1f40f'], 'isCanonical': true},
	':goat:':
		{'unicode': ['1f410'], 'isCanonical': true},
	':rooster:':
		{'unicode': ['1f413'], 'isCanonical': true},
	':dog2:':
		{'unicode': ['1f415'], 'isCanonical': true},
	':pig2:':
		{'unicode': ['1f416'], 'isCanonical': true},
	':dromedary_camel:':
		{'unicode': ['1f42a'], 'isCanonical': true},
	':busts_in_silhouette:':
		{'unicode': ['1f465'], 'isCanonical': true},
	':two_men_holding_hands:':
		{'unicode': ['1f46c'], 'isCanonical': true},
	':two_women_holding_hands:':
		{'unicode': ['1f46d'], 'isCanonical': true},
	':thought_balloon:':
		{'unicode': ['1f4ad'], 'isCanonical': true},
	':euro:':
		{'unicode': ['1f4b6'], 'isCanonical': true},
	':pound:':
		{'unicode': ['1f4b7'], 'isCanonical': true},
	':mailbox_with_mail:':
		{'unicode': ['1f4ec'], 'isCanonical': true},
	':mailbox_with_no_mail:':
		{'unicode': ['1f4ed'], 'isCanonical': true},
	':postal_horn:':
		{'unicode': ['1f4ef'], 'isCanonical': true},
	':no_mobile_phones:':
		{'unicode': ['1f4f5'], 'isCanonical': true},
	':twisted_rightwards_arrows:':
		{'unicode': ['1f500'], 'isCanonical': true},
	':repeat:':
		{'unicode': ['1f501'], 'isCanonical': true},
	':repeat_one:':
		{'unicode': ['1f502'], 'isCanonical': true},
	':arrows_counterclockwise:':
		{'unicode': ['1f504'], 'isCanonical': true},
	':low_brightness:':
		{'unicode': ['1f505'], 'isCanonical': true},
	':high_brightness:':
		{'unicode': ['1f506'], 'isCanonical': true},
	':mute:':
		{'unicode': ['1f507'], 'isCanonical': true},
	':sound:':
		{'unicode': ['1f509'], 'isCanonical': true},
	':no_bell:':
		{'unicode': ['1f515'], 'isCanonical': true},
	':microscope:':
		{'unicode': ['1f52c'], 'isCanonical': true},
	':telescope:':
		{'unicode': ['1f52d'], 'isCanonical': true},
	':clock130:':
		{'unicode': ['1f55c'], 'isCanonical': true},
	':clock230:':
		{'unicode': ['1f55d'], 'isCanonical': true},
	':clock330:':
		{'unicode': ['1f55e'], 'isCanonical': true},
	':clock430:':
		{'unicode': ['1f55f'], 'isCanonical': true},
	':clock530:':
		{'unicode': ['1f560'], 'isCanonical': true},
	':clock630:':
		{'unicode': ['1f561'], 'isCanonical': true},
	':clock730:':
		{'unicode': ['1f562'], 'isCanonical': true},
	':clock830:':
		{'unicode': ['1f563'], 'isCanonical': true},
	':clock930:':
		{'unicode': ['1f564'], 'isCanonical': true},
	':clock1030:':
		{'unicode': ['1f565'], 'isCanonical': true},
	':clock1130:':
		{'unicode': ['1f566'], 'isCanonical': true},
	':clock1230:':
		{'unicode': ['1f567'], 'isCanonical': true},
	':speaker:':
		{'unicode': ['1f508'], 'isCanonical': true},
	':train:':
		{'unicode': ['1f68b'], 'isCanonical': true},
	':medal:':
		{'unicode': ['1f3c5'], 'isCanonical': true},
	':sports_medal:':
		{'unicode': ['1f3c5'], 'isCanonical': false},
	':flag_black:':
		{'unicode': ['1f3f4'], 'isCanonical': true},
	':waving_black_flag:':
		{'unicode': ['1f3f4'], 'isCanonical': false},
	':camera_with_flash:':
		{'unicode': ['1f4f8'], 'isCanonical': true},
	':sleeping_accommodation:':
		{'unicode': ['1f6cc'], 'isCanonical': true},
	':middle_finger:':
		{'unicode': ['1f595'], 'isCanonical': true},
	':reversed_hand_with_middle_finger_extended:':
		{'unicode': ['1f595'], 'isCanonical': false},
	':vulcan:':
		{'unicode': ['1f596'], 'isCanonical': true},
	':raised_hand_with_part_between_middle_and_ring_fingers:':
		{'unicode': ['1f596'], 'isCanonical': false},
	':slight_frown:':
		{'unicode': ['1f641'], 'isCanonical': true},
	':slightly_frowning_face:':
		{'unicode': ['1f641'], 'isCanonical': false},
	':slight_smile:':
		{'unicode': ['1f642'], 'isCanonical': true},
	':slightly_smiling_face:':
		{'unicode': ['1f642'], 'isCanonical': false},
	':airplane_departure:':
		{'unicode': ['1f6eb'], 'isCanonical': true},
	':airplane_arriving:':
		{'unicode': ['1f6ec'], 'isCanonical': true},
	':tone1:':
		{'unicode': ['1f3fb'], 'isCanonical': true},
	':tone2:':
		{'unicode': ['1f3fc'], 'isCanonical': true},
	':tone3:':
		{'unicode': ['1f3fd'], 'isCanonical': true},
	':tone4:':
		{'unicode': ['1f3fe'], 'isCanonical': true},
	':tone5:':
		{'unicode': ['1f3ff'], 'isCanonical': true},
	':upside_down:':
		{'unicode': ['1f643'], 'isCanonical': true},
	':upside_down_face:':
		{'unicode': ['1f643'], 'isCanonical': false},
	':money_mouth:':
		{'unicode': ['1f911'], 'isCanonical': true},
	':money_mouth_face:':
		{'unicode': ['1f911'], 'isCanonical': false},
	':nerd:':
		{'unicode': ['1f913'], 'isCanonical': true},
	':nerd_face:':
		{'unicode': ['1f913'], 'isCanonical': false},
	':hugging:':
		{'unicode': ['1f917'], 'isCanonical': true},
	':hugging_face:':
		{'unicode': ['1f917'], 'isCanonical': false},
	':rolling_eyes:':
		{'unicode': ['1f644'], 'isCanonical': true},
	':face_with_rolling_eyes:':
		{'unicode': ['1f644'], 'isCanonical': false},
	':thinking:':
		{'unicode': ['1f914'], 'isCanonical': true},
	':thinking_face:':
		{'unicode': ['1f914'], 'isCanonical': false},
	':zipper_mouth:':
		{'unicode': ['1f910'], 'isCanonical': true},
	':zipper_mouth_face:':
		{'unicode': ['1f910'], 'isCanonical': false},
	':thermometer_face:':
		{'unicode': ['1f912'], 'isCanonical': true},
	':face_with_thermometer:':
		{'unicode': ['1f912'], 'isCanonical': false},
	':head_bandage:':
		{'unicode': ['1f915'], 'isCanonical': true},
	':face_with_head_bandage:':
		{'unicode': ['1f915'], 'isCanonical': false},
	':robot:':
		{'unicode': ['1f916'], 'isCanonical': true},
	':robot_face:':
		{'unicode': ['1f916'], 'isCanonical': false},
	':lion_face:':
		{'unicode': ['1f981'], 'isCanonical': true},
	':lion:':
		{'unicode': ['1f981'], 'isCanonical': false},
	':unicorn:':
		{'unicode': ['1f984'], 'isCanonical': true},
	':unicorn_face:':
		{'unicode': ['1f984'], 'isCanonical': false},
	':scorpion:':
		{'unicode': ['1f982'], 'isCanonical': true},
	':crab:':
		{'unicode': ['1f980'], 'isCanonical': true},
	':turkey:':
		{'unicode': ['1f983'], 'isCanonical': true},
	':cheese:':
		{'unicode': ['1f9c0'], 'isCanonical': true},
	':cheese_wedge:':
		{'unicode': ['1f9c0'], 'isCanonical': false},
	':hotdog:':
		{'unicode': ['1f32d'], 'isCanonical': true},
	':hot_dog:':
		{'unicode': ['1f32d'], 'isCanonical': false},
	':taco:':
		{'unicode': ['1f32e'], 'isCanonical': true},
	':burrito:':
		{'unicode': ['1f32f'], 'isCanonical': true},
	':popcorn:':
		{'unicode': ['1f37f'], 'isCanonical': true},
	':champagne:':
		{'unicode': ['1f37e'], 'isCanonical': true},
	':bottle_with_popping_cork:':
		{'unicode': ['1f37e'], 'isCanonical': false},
	':bow_and_arrow:':
		{'unicode': ['1f3f9'], 'isCanonical': true},
	':archery:':
		{'unicode': ['1f3f9'], 'isCanonical': false},
	':amphora:':
		{'unicode': ['1f3fa'], 'isCanonical': true},
	':place_of_worship:':
		{'unicode': ['1f6d0'], 'isCanonical': true},
	':worship_symbol:':
		{'unicode': ['1f6d0'], 'isCanonical': false},
	':kaaba:':
		{'unicode': ['1f54b'], 'isCanonical': true},
	':mosque:':
		{'unicode': ['1f54c'], 'isCanonical': true},
	':synagogue:':
		{'unicode': ['1f54d'], 'isCanonical': true},
	':menorah:':
		{'unicode': ['1f54e'], 'isCanonical': true},
	':prayer_beads:':
		{'unicode': ['1f4ff'], 'isCanonical': true},
	':cricket:':
		{'unicode': ['1f3cf'], 'isCanonical': true},
	':cricket_bat_ball:':
		{'unicode': ['1f3cf'], 'isCanonical': false},
	':volleyball:':
		{'unicode': ['1f3d0'], 'isCanonical': true},
	':field_hockey:':
		{'unicode': ['1f3d1'], 'isCanonical': true},
	':hockey:':
		{'unicode': ['1f3d2'], 'isCanonical': true},
	':ping_pong:':
		{'unicode': ['1f3d3'], 'isCanonical': true},
	':table_tennis:':
		{'unicode': ['1f3d3'], 'isCanonical': false},
	':badminton:':
		{'unicode': ['1f3f8'], 'isCanonical': true},
	':drum:':
		{'unicode': ['1f941'], 'isCanonical': true},
	':drum_with_drumsticks:':
		{'unicode': ['1f941'], 'isCanonical': false},
	':shrimp:':
		{'unicode': ['1f990'], 'isCanonical': true},
	':squid:':
		{'unicode': ['1f991'], 'isCanonical': true},
	':egg:':
		{'unicode': ['1f95a'], 'isCanonical': true},
	':milk:':
		{'unicode': ['1f95b'], 'isCanonical': true},
	':glass_of_milk:':
		{'unicode': ['1f95b'], 'isCanonical': false},
	':peanuts:':
		{'unicode': ['1f95c'], 'isCanonical': true},
	':shelled_peanut:':
		{'unicode': ['1f95c'], 'isCanonical': false},
	':kiwi:':
		{'unicode': ['1f95d'], 'isCanonical': true},
	':kiwifruit:':
		{'unicode': ['1f95d'], 'isCanonical': false},
	':pancakes:':
		{'unicode': ['1f95e'], 'isCanonical': true},
	':regional_indicator_w:':
		{'unicode': ['1f1fc'], 'isCanonical': true},
	':regional_indicator_v:':
		{'unicode': ['1f1fb'], 'isCanonical': true},
	':regional_indicator_u:':
		{'unicode': ['1f1fa'], 'isCanonical': true},
	':regional_indicator_t:':
		{'unicode': ['1f1f9'], 'isCanonical': true},
	':regional_indicator_s:':
		{'unicode': ['1f1f8'], 'isCanonical': true},
	':regional_indicator_r:':
		{'unicode': ['1f1f7'], 'isCanonical': true},
	':regional_indicator_q:':
		{'unicode': ['1f1f6'], 'isCanonical': true},
	':regional_indicator_p:':
		{'unicode': ['1f1f5'], 'isCanonical': true},
	':regional_indicator_o:':
		{'unicode': ['1f1f4'], 'isCanonical': true},
	':regional_indicator_n:':
		{'unicode': ['1f1f3'], 'isCanonical': true},
	':regional_indicator_m:':
		{'unicode': ['1f1f2'], 'isCanonical': true},
	':regional_indicator_l:':
		{'unicode': ['1f1f1'], 'isCanonical': true},
	':regional_indicator_k:':
		{'unicode': ['1f1f0'], 'isCanonical': true},
	':regional_indicator_j:':
		{'unicode': ['1f1ef'], 'isCanonical': true},
	':regional_indicator_i:':
		{'unicode': ['1f1ee'], 'isCanonical': true},
	':regional_indicator_h:':
		{'unicode': ['1f1ed'], 'isCanonical': true},
	':regional_indicator_g:':
		{'unicode': ['1f1ec'], 'isCanonical': true},
	':regional_indicator_f:':
		{'unicode': ['1f1eb'], 'isCanonical': true},
	':regional_indicator_e:':
		{'unicode': ['1f1ea'], 'isCanonical': true},
	':regional_indicator_d:':
		{'unicode': ['1f1e9'], 'isCanonical': true},
	':regional_indicator_c:':
		{'unicode': ['1f1e8'], 'isCanonical': true},
	':regional_indicator_b:':
		{'unicode': ['1f1e7'], 'isCanonical': true},
	':regional_indicator_a:':
		{'unicode': ['1f1e6'], 'isCanonical': true},
	':fast_forward:':
		{'unicode': ['23e9'], 'isCanonical': true},
	':rewind:':
		{'unicode': ['23ea'], 'isCanonical': true},
	':arrow_double_up:':
		{'unicode': ['23eb'], 'isCanonical': true},
	':arrow_double_down:':
		{'unicode': ['23ec'], 'isCanonical': true},
	':alarm_clock:':
		{'unicode': ['23f0'], 'isCanonical': true},
	':hourglass_flowing_sand:':
		{'unicode': ['23f3'], 'isCanonical': true},
	':ophiuchus:':
		{'unicode': ['26ce'], 'isCanonical': true},
	':white_check_mark:':
		{'unicode': ['2705'], 'isCanonical': true},
	':fist:':
		{'unicode': ['270a'], 'isCanonical': true},
	':raised_hand:':
		{'unicode': ['270b'], 'isCanonical': true},
	':sparkles:':
		{'unicode': ['2728'], 'isCanonical': true},
	':x:':
		{'unicode': ['274c'], 'isCanonical': true},
	':negative_squared_cross_mark:':
		{'unicode': ['274e'], 'isCanonical': true},
	':question:':
		{'unicode': ['2753'], 'isCanonical': true},
	':grey_question:':
		{'unicode': ['2754'], 'isCanonical': true},
	':grey_exclamation:':
		{'unicode': ['2755'], 'isCanonical': true},
	':heavy_plus_sign:':
		{'unicode': ['2795'], 'isCanonical': true},
	':heavy_minus_sign:':
		{'unicode': ['2796'], 'isCanonical': true},
	':heavy_division_sign:':
		{'unicode': ['2797'], 'isCanonical': true},
	':curly_loop:':
		{'unicode': ['27b0'], 'isCanonical': true},
	':loop:':
		{'unicode': ['27bf'], 'isCanonical': true}
};

const mapBackwards = {};
const mapUnicode = {};

for (const k in map) {
	mapBackwards[map[k]] = k;
}

for (const k in emojiList) {
	mapUnicode[emojiList[k].unicode[0]] = k;
}

let avaliableCharEmoji = [];
let avaliableCharEmojiMap = {};
const mine = 'regional_indicator_';

module.charEmoji = avaliableCharEmoji;
module.charEmojMap = avaliableCharEmojiMap;

for (const k in map) {
	mapBackwards[map[k]] = k;
}

{
	const s = [];
	
	for (const name in emojiList) {
		const bare = name.substr(1, name.length - 2);
		
		s.push(`${bare}','${mapBackwards[emojiList[name].unicode[0]]}','${emojiList[name].unicode[0]}`);
		
		if (name.substr(1, mine.length) !== mine)
			continue;
		
		avaliableCharEmoji.push(name.substr(mine.length + 1, 1));
		avaliableCharEmojiMap[name.substr(mine.length + 1, 1)] = emojiList[name].unicode[0];
	}
	
	hook.single('SQLInitialize', (Postgres) => Postgres.query(`WITH full_list("memoji", "unicode", "UNICODE") AS (VALUES ('${s.join("'),('")}'))
		INSERT INTO emoji_ids ("EMOJI_NAME", "EMOJI", "UNICODE")
			(SELECT * FROM full_list WHERE "unicode" NOT IN
				(SELECT "EMOJI" FROM emoji_ids)
			) ON CONFLICT DO NOTHING;`));
}

const regExpObj = new RegExp('!?(' + regExp + '|<:[a-zA-Z_0-9]+:([0-9]+)>|\n|' + avaliableCharEmoji.join('|') + ')', 'gi');
const regExpObjWeak = new RegExp('(' + regExp + '|<:[a-zA-Z_0-9]+:([0-9]+)>)', 'gi');
const regExpUnicodeOnly = new RegExp('(' + regExp + ')', 'gi');
const customEmoji = new RegExp('<:[a-zA-Z_0-9]+:([0-9]+)>', 'gi');
const emojiBase = 'https://cdn.discordapp.com/emojis/';

module.regExp = regExpObj;
module.regExpWeak = regExpObjWeak;
module.unicodeOnly = regExpUnicodeOnly;
module.customRegExp = customEmoji;
module.map = map;
module.mapBackwards = mapBackwards;

module.findURL = function(str) {
	let subStr = str.toLowerCase();
	
	if (subStr.substr(0, 2) === '<:') {
		let hitStr;
		
		subStr.replace(customEmoji, function(matched, p1, offset, Self) {
			hitStr = emojiBase + p1 + '.png';
		});
		
		return hitStr;
	} else {
		let unicode = map[subStr];
		
		if (!unicode)
			return;
		
		return './resource/emoji/' + unicode + '.png';
	}
};

module.spliceString = function(str) {
	return str.match(regExpUnicodeOnly);
};

module.exports = module;
