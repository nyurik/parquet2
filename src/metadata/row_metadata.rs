use parquet_format::RowGroup;

use super::{column_chunk_metadata::ColumnChunkMetaData, schema_descriptor::SchemaDescriptor};
use crate::errors::Result;

/// Metadata for a row group.
#[derive(Debug, Clone)]
pub struct RowGroupMetaData {
    columns: Vec<ColumnChunkMetaData>,
    num_rows: i64,
    total_byte_size: i64,
}

impl RowGroupMetaData {
    /// Number of columns in this row group.
    pub fn num_columns(&self) -> usize {
        self.columns.len()
    }

    /// Returns column chunk metadata for `i`th column.
    pub fn column(&self, i: usize) -> &ColumnChunkMetaData {
        &self.columns[i]
    }

    /// Returns slice of column chunk metadata.
    pub fn columns(&self) -> &[ColumnChunkMetaData] {
        &self.columns
    }

    /// Number of rows in this row group.
    pub fn num_rows(&self) -> i64 {
        self.num_rows
    }

    /// Total byte size of all uncompressed column data in this row group.
    pub fn total_byte_size(&self) -> i64 {
        self.total_byte_size
    }

    /// Total size of all compressed column data in this row group.
    pub fn compressed_size(&self) -> i64 {
        self.columns.iter().map(|c| c.compressed_size()).sum()
    }

    /// Method to convert from Thrift.
    pub fn try_from_thrift(
        schema_descr: &SchemaDescriptor,
        rg: &RowGroup,
    ) -> Result<RowGroupMetaData> {
        assert_eq!(schema_descr.num_columns(), rg.columns.len());
        let total_byte_size = rg.total_byte_size;
        let num_rows = rg.num_rows;
        let mut columns = vec![];
        for (cc, d) in rg.columns.iter().zip(schema_descr.columns()) {
            let cc = ColumnChunkMetaData::try_from_thrift(d.clone(), cc)?;
            columns.push(cc);
        }
        Ok(RowGroupMetaData {
            columns,
            num_rows,
            total_byte_size,
        })
    }

    /// Method to convert to Thrift.
    pub fn to_thrift(&self) -> RowGroup {
        RowGroup {
            columns: self.columns().iter().map(|v| v.to_thrift()).collect(),
            total_byte_size: self.total_byte_size,
            num_rows: self.num_rows,
            sorting_columns: None,
        }
    }
}
