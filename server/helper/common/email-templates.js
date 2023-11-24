const constants = require("../utilities/constants");
const moment = require('moment-timezone');

module.exports.emailTemplate = async function (data, type) {
    var template = `
	<!DOCTYPE html
				PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
			<html xmlns="http://www.w3.org/1999/xhtml">

			<head>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<title>Jitendra</title>
			</head>
			<style type="text/css">
				/* FONTS */
				@media screen {
					@font-face {
						font-family: 'Lato';
						font-style: normal;
						font-weight: 400;
						src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff');
					}

					@font-face {
						font-family: 'Lato';
						font-style: normal;
						font-weight: 700;
						src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format('woff');
					}

					@font-face {
						font-family: 'Lato';
						font-style: italic;
						font-weight: 400;
						src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format('woff');
					}

					@font-face {
						font-family: 'Lato';
						font-style: italic;
						font-weight: 700;
						src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format('woff');
					}
				}

				/* CLIENT-SPECIFIC STYLES */
				body,
				table,
				td,
				a {
					-webkit-text-size-adjust: 100%;
					-ms-text-size-adjust: 100%;
				}

				table,
				td {
					mso-table-lspace: 0pt;
					mso-table-rspace: 0pt;
				}

				img {
					-ms-interpolation-mode: bicubic;
				}

				/* RESET STYLES */
				img {
					border: 0;
					height: auto;
					line-height: 100%;
					outline: none;
					text-decoration: none;
				}

				table {
					border-collapse: collapse !important;
				}

				body {
					height: 100% !important;
					margin: 0 !important;
					padding: 0 !important;
					width: 100% !important;
				}

				/* iOS BLUE LINKS */
				a[x-apple-data-detectors] {
					color: inherit !important;
					text-decoration: none !important;
					font-size: inherit !important;
					font-family: inherit !important;
					font-weight: inherit !important;
					line-height: inherit !important;
				}

				/* ANDROID CENTER FIX */
				div[style*="margin: 16px 0;"] {
					margin: 0 !important;
				}
			</style>
			</head>

			<body style="background-color: #f4f4f4; margin: 0 !important; padding: 0 !important;">

				<table border="0" cellpadding="0" cellspacing="0" width="100%">
					<!-- LOGO -->
					<tr>
						<td bgcolor="#efe7e3" align="center">
							<table border="0" cellpadding="0" cellspacing="0" width="480">
								<tr>
									<td align="center" valign="top" style="padding: 20px 10px 20px 10px;">
										<a href="${constants.web.JITEN}" target="_blank">
											<img src="${constants.path.IMAGE_ROOT}logo-name-clear.png" width="200"
												style="display: block;  font-family: 'Lato', Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px;"
												border="0">
										</a>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<!-- HERO -->
					${await exports.getEmailBody(data, type)}
					<!-- SUPPORT CALLOUT -->
					<tr>
						<td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
							<table border="0" cellpadding="0" cellspacing="0" width="480">
								<!-- ADDRESS -->
								<tr>
									<td bgcolor="#f4f4f4" align="left"
										style="padding: 0px 30px 30px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
										<p style="margin-top: 10px; text-align: center;">${moment().tz('Asia/Kolkata').format('DD/MM/YYYY, hh:mm:ss a')}</p>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>

			</body>

			</html>
	`
    return template;
}


module.exports.getEmailBody = async function (data, type) {
    let body = '';
    switch (type) {
        case constants.emailType.SEND_TO_DEVELOPER:
            body += ` 
				<tr>
					<td bgcolor="#efe7e3" align="center" style="padding: 0px 10px 0px 10px;">
						<table border="0" cellpadding="0" cellspacing="0" width="480">
							<tr>
								<td bgcolor="##1F51FF" align="left" valign="top"
									style="padding: 20px 30px 20px 30px; border-radius: 4px 4px 0px 0px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 20px;">
									<h1
										style="font-size: 18px; font-weight: 700; margin: 0; color: #fff; line-height:22px; letter-spacing: 1px; text-align: center;">
										${data.heading}</h1>
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
						<table border="0" cellpadding="0" cellspacing="0" width="480">
							<tr>
								<td bgcolor="#ffffff" align="left"
									style="padding: 30px 30px 20px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 20px;">
									<p style="margin:0">Hy Jiten, <span style="color:#5599ff"></span>
									</p>
									<br>`

								if (data && data.name) {
									body +=	`<p style="margin: 0px; margin-top: 2px; color: #666666;"> <b>Name :
												</b>${data.name}</p>
											<br>`
								}

								if (data && data.email) {
									body +=	`<p style="margin: 0px; margin-top: 2px; color: #666666;"> <b>Email :
												</b><a href="mailto:${data.email}" style="color: #666666; text-decoration: none;">${data.email}</a></p>
											<br>`
								}

								if (data && data.subject) {
									body +=	`<p style="margin: 0px; margin-top: 2px; color: #666666;"> <b>Subject :
												</b>${data.subject}</p>
											<br>`
								}

								if (data && data.message) {
									body +=	`<p style="margin: 0px; margin-top: 2px; color: #666666;"">${data.message}</p>`
								}
									
					body += `</td>
							</tr>
							<tr>
								<td bgcolor="#ffffff">
									<h2 style="margin: 0; text-align: center;"></h2>
								</td>
							</tr>
						</table>
					</td>
				</tr>`;
            break;
        default:
            break;
    }
	return body;
}