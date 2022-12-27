import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
const datePipe = new DatePipe('en-US');
const currencyPipe = new CurrencyPipe('en-US');
const decimalPipe = new DecimalPipe('en-US');

export const FundExcelConfig = {
    fileName: 'FundExport',
    colProps: {
        'fundCode': { headerName: 'Fund Code', width: 12 },
        'fundName': { headerName: 'Fund Name', width: 50 },
        'assetBalance': {
            headerName: 'Asset Balance', width: 12, displayColumn: 'C', format: '#,##0.00'
        },
        'approvedName': { headerName: 'Approved Name', width: 50 }
    }
};
export const AuditExcelConfig = {
    fileName: 'AuditExport',
    colProps: {
        'tableName': { headerName: 'Table Name', width: 40 },
        'keyColumnName': { headerName: 'Key Column Name', width: 40 },
        'keyColumnValue': { headerName: 'Key Column Value', width: 30 },
        'updatedColumnName': { headerName: 'Updated Column Name', width: 30 },
        'oldValue': { headerName: 'Old Value', width: 15 },
        'newValue': { headerName: 'New Value', width: 15 },
        'lastUpdatedDate': { headerName: 'Last Updated Date', width: 20 },
        'updatedBy': { headerName: 'Updated By', width: 20 }
    }
};

export const FbsiFundExcelConfig = {
    fileName: 'FbsiFundExport',
    colProps: {
        'cusipNumber': { headerName: 'Cusip Number', width: 12 },
        'tradeSymbolCode': { headerName: 'Trade Symbol Code', width: 15 },
        'fundName': { headerName: 'Fund Name', width: 70 },
        'fundCode': { headerName: 'Fund Code', width: 12 }
    }
};

export const ReclassificationExcelConfig = {
    fileName: 'Reclassification',
    colProps: {
        'date': { headerName: 'Date', width: 12 },
        'fromTransaction': { headerName: 'FromTxn', width: 12 },
        'toTransaction': { headerName: 'ToTxn', width: 12 },
        'planId': { headerName: 'Plan', width: 15 },
        'planName': { headerName: 'Plan Name', width: 20 },
        'svcLevel': { headerName: 'Service', width: 12 },
        'grp': { headerName: 'Grp', width: 12 }, // WFIRMSSP-82
        'fund': { headerName: 'Fund', width: 12 },
        'fundName': { headerName: 'Fund Name', width: 20 },
        'transactionAmount': { headerName: 'TxnAmt', width: 15, displayColumn: 'J', format: '#,##0.00' },
        'userId': { headerName: 'User Id', width: 12 },
        'batchId': { headerName: 'Batch Id', width: 12 },
        'ToPlanID': { headerName: 'SGPlanID', width: 20 }
    }
};

export const UnlinkedPlansExcelConfig = {
    fileName: 'UnlinkedPlans',
    colProps: {
        'planId': { headerName: 'Plan Number', width: 12 },
        'planName': { headerName: 'Plan Name', width: 25 },
        'taAccountLevelCode': { headerName: 'Account Level Code', width: 17 },
        'taSystemCode': { headerName: 'System Code', width: 12 },
        'taStatusCode': { headerName: 'Status Code', width: 12 },
        'badgeId': { headerName: 'Rep Badge ID', width: 15 }
    }
};

export const AePlanSetupExcelConfig = {
    fileName: 'AE Auto Plan Setup',
    colProps: {
        'currentMonth': { headerName: 'Month', width: 10 },
        'firmsIpId': { headerName: 'IP ID', width: 10 },
        'idbClientId': { headerName: 'IDB ID', width: 10 },
        'clientName': { headerName: 'Client Name', width: 20 },
        'badgeId': { headerName: 'AE Badge ID', width: 12 },
        'firstName': { headerName: 'First Name', width: 15 },
        'lastName': { headerName: 'Last Name', width: 15 },
        'planID': { headerName: 'Plan ID', width: 10 },
        'planName': { headerName: 'Plan Name', width: 20 },
        'segment': { headerName: 'Segment', width: 10 },
        'servicingSegmentation': { headerName: 'Servicing Segmentation', width: 15 },
        'transactionGroup': { headerName: 'Txn Group', width: 10 },
        'transactionAmount': { headerName: 'Txn Amount', width: 12, displayColumn: 'M', format: '#,##0.00' }
    }
};
