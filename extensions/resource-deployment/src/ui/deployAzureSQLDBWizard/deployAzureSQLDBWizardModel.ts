/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { EOL } from 'os';
import * as azdata from 'azdata';
import { Model } from '../model';

export class DeployAzureSQLDBWizardModel extends Model {
	public azureAccount!: azdata.Account;
	public securityToken!: any;
	public azureSubscription!: string;
	public azureSubscriptionDisplayName!: string;
	public azureResouceGroup!: string;
	public azureServerName!: string;
	public azureRegion!: string;

	public databaseEdition!: string;
	public databaseFamily!: string;

	public databaseName!: string;
	//public newServer!: 'True' | 'False'; //@todo alma1 9/8/2020 used for upcoming server creation feature.
	public startIpAddress!: string;
	public endIpAddress!: string;
	public firewallRuleName!: string;
	public databaseCollation!: string;


	constructor() {
		super();
	}

	public getCodeCellContentForNotebook(): string[] {
		const statements: string[] = [];

		statements.push(`azure_sqldb_subscription = '${this.azureSubscription}'`);
		statements.push(`azure_sqldb_resource_group_name = '${this.azureResouceGroup}'`);
		statements.push(`azure_sqldb_server_name = '${this.azureServerName}'`);
		statements.push(`azure_sqldb_database_edition = '${this.databaseEdition}'`);
		statements.push(`azure_sqldb_database_name = '${this.databaseName}'`);
		//statements.push(`azure_sqldb_location = '${this.azureRegion}'`);  //@todo alma1 9/10/2020 used for upcoming server creation feature.
		statements.push(`azure_sqldb_ip_start = '${this.startIpAddress}'`);
		statements.push(`azure_sqldb_ip_end = '${this.endIpAddress}'`);
		statements.push(`azure_sqldb_firewall_name = '${this.firewallRuleName}'`);
		statements.push(`azure_sqldb_collation = '${this.databaseCollation}'`);
		statements.push(`azure_sqldb_family = '${this.databaseFamily}'`);
		//statements.push(`azure_sqldb_new_server = '${this.newServer}'`); //@todo alma1 9/8/2020 used for upcoming server creation feature.

		return statements.map(line => line.concat(EOL));
	}
}
