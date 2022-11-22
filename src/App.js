import { useDataQuery } from '@dhis2/app-runtime'
import React from 'react'
import classes from './App.module.css'
import {
    Table,
    TableBody,
    TableCell,
    TableCellHead,
    TableHead,
    TableRow,
    TableRowHead,
} from '@dhis2/ui'

const query = {
    results: {
        resource: 'programs',
        params: {
            pageSize: 5,
            fields: ['id', 'created', 'displayName'],
        },
    },
}

const MyApp = () => {
    const { loading, error, data } = useDataQuery(query)

    if (error) {
        return <span>ERROR: {error.message}</span>
    }

    if (loading) {
        return <span>coming...</span>
    }

    return (
        <div className={classes.container}>
            <div>
                <h1>Programs Table</h1>
                <Table>
                    <TableHead>
                        <TableRowHead>
                            <TableCellHead>Name</TableCellHead>
                            <TableCellHead>Created</TableCellHead>
                        </TableRowHead>
                    </TableHead>
                    <TableBody>
                        {data.results.programs.map(
                            ({ id, created, displayName }) => (
                                <TableRow key={id}>
                                    <TableCell>{displayName}</TableCell>
                                    <TableCell>{created}</TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                    <TableBody>
                        {data.results.programs.map(
                            ({ id, created, displayName }) => (
                                <TableRow key={id}>
                                    <TableCell>{displayName}</TableCell>
                                    <TableCell>{created}</TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                    <TableBody>
                        {data.results.programs.map(
                            ({ id, created, displayName }) => (
                                <TableRow key={id}>
                                    <TableCell>{displayName}</TableCell>
                                    <TableCell>{created}</TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody><TableBody>
                        {data.results.programs.map(
                            ({ id, created, displayName }) => (
                                <TableRow key={id}>
                                    <TableCell>{displayName}</TableCell>
                                    <TableCell>{created}</TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default MyApp

