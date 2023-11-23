const constants = require("../utilities/constants");

module.exports.emailTemplate = async function (data, type) {
    console.log("🙈 🙉 🙊 Line 4 ~  :  ");
    var template = `
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>Stikkum</title>
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
		body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
		table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
		img { -ms-interpolation-mode: bicubic; }

		/* RESET STYLES */
		img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
		table { border-collapse: collapse !important; }
		body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }

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
		div[style*="margin: 16px 0;"] { margin: 0 !important; }
	</style>
	</head>
	<body style="background-color: #f4f4f4; margin: 0 !important; padding: 0 !important;">

		<table border="0" cellpadding="0" cellspacing="0" width="100%">
			<!-- LOGO -->
			<tr>
				<td bgcolor="#efe7e3" align="center">
					<table border="0" cellpadding="0" cellspacing="0" width="480" >
						<tr>
							<td align="center" valign="top" style="padding: 40px 10px 40px 10px;">
								<a href="https://app.stikkum.io" target="_blank">
									<img  src="src-link" width="150" style="display: block;  font-family: 'Lato', Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px;" border="0">
								</a>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<!-- HERO -->
					${exports.getEmailBody(data)}
			<!-- SUPPORT CALLOUT -->
			<tr>
				<td bgcolor="#f4f4f4" align="center" style="padding: 30px 10px 0px 10px;">
					<table border="0" cellpadding="0" cellspacing="0" width="480" >
						<!-- HEADLINE -->
						<tr>
							<td bgcolor="#fff9f5" align="center" style="padding: 30px 30px 30px 30px; border-radius: 4px 4px 4px 4px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;" >
								<h2 style="font-size: 20px; font-weight: 400; color: #111111; margin: 0;">Need more help?</h2>
								<p style="margin: 0;"><a href="https://www.stikkum.io/contact-us/" target="_blank" style="color: #ff4213;">We&rsquo;re here, ready to talk</a></p>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<!-- FOOTER -->
			<tr>
				<td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
					<table border="0" cellpadding="0" cellspacing="0" width="480" >

						<!-- PERMISSION REMINDER -->
						<tr>
							<td bgcolor="#f4f4f4" align="left" style="padding: 0px 30px 30px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;" ><br>
								<p style="margin: 0;">If you have any problem, please contact us.</a>.</p>
							</td>
						</tr>

						<!-- ADDRESS -->
						<tr>
							<td bgcolor="#f4f4f4" align="left" style="padding: 0px 30px 30px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;" >
								<p style="margin: 0;">STIKKUM © ${new Date().getFullYear()} All Rights Reserved</p>
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


module.exports.getEmailBody = function (data, type) {
    let body = '';
    let tr = '';
	type = "preferredPartnerType";
    switch (type) {
        case 'preferredPartnerType':
            body += ` <tr>
			<td bgcolor="#efe7e3" align="center" style="padding: 0px 10px 0px 10px;">
				<table border="0" cellpadding="0" cellspacing="0" width="480">
				<tr>
					<td bgcolor="#ff4213" align="left" valign="top" style="padding: 20px 30px 20px 30px; border-radius: 4px 4px 0px 0px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 20px;">
					<h1 style="font-size: 18px; font-weight: 700; margin: 0; color: #fff; line-height:22px; letter-spacing: 1px;">Notification Email for New Enquiry</h1>
					</td>
				</tr>
				</table>
			</td>
			</tr>
			<tr>
			<td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
				<table border="0" cellpadding="0" cellspacing="0" width="480">
				<tr>
					<td bgcolor="#ffffff" align="left" style="padding: 30px 30px 20px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 20px;">`
            body += ` <p style="margin:0">Dear Admin, <span style="color:#5599ff"></span>
					</p>
					<br>
					<p style="margin:0">We are writing to inform you that a new enquiry has been submitted through our website's enquiry form. Here are the details: <span style="color:#5599ff"></span>
					</p>
					<br>
					<p style="margin: 0;color: #21324f">
						<b>Name:</b>
						<span style="color: #5599ff">${data.name}</span>
					</p>
					<p style="margin: 0;color: #21324f">
						<b>Email:</b>
						<span style="color: #5599ff">${data.email}</span>
					</p>
					<p style="margin: 0;color: #21324f">
						<b>Mobile Number: </b>
						<span style="color: #5599ff"> ${data.message}</span>
					</p>
					<p style="margin: 0;color: #21324f">
						<b>Description: </b>
						<span style="color: #5599ff">${JSON.stringify(data)}</span>
					</p>`
            body += `
					</td>
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
}